terraform {
  required_version = ">= 1.5"

  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "~> 5.0"
    }
  }

  backend "gcs" {
    # bucket は terraform init -backend-config で指定
    prefix = "terraform/state"
  }
}

provider "google" {
  project = var.project_id
  region  = var.region
}

# 必要な API を有効化
resource "google_project_service" "apis" {
  for_each = toset([
    "run.googleapis.com",
    "firestore.googleapis.com",
    "artifactregistry.googleapis.com",
    "firebase.googleapis.com",
    "iam.googleapis.com",
  ])
  service            = each.value
  disable_on_destroy = false
}

# Artifact Registry（Docker イメージ保管）
resource "google_artifact_registry_repository" "main" {
  depends_on    = [google_project_service.apis]
  repository_id = var.app_name
  location      = var.region
  format        = "DOCKER"
  description   = "Docker images for ${var.app_name}"
}

# Terraform state 用 GCS バケット は手動で作成済み（bootstrap リソースのため Terraform 管理外）
# バケット名: ${project_id}-tf-state
# ※ Terraform 自身の state をここに置いているため、Terraform で管理すると循環依存になる
