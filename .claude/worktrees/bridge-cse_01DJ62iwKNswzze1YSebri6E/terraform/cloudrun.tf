# Cloud Run サービスアカウント
resource "google_service_account" "cloudrun" {
  account_id   = "${var.app_name}-cloudrun"
  display_name = "Cloud Run Service Account for ${var.app_name}"
}

resource "google_project_iam_member" "cloudrun_firestore" {
  project = var.project_id
  role    = "roles/datastore.user"
  member  = "serviceAccount:${google_service_account.cloudrun.email}"
}

# フロントエンドは Firebase Hosting（静的エクスポート）で配信するため Cloud Run 不要
# SSR が必要になった場合はここに google_cloud_run_v2_service.frontend を追加する

# MCP サーバー
resource "google_cloud_run_v2_service" "mcp_server" {
  depends_on = [google_project_service.apis]
  name       = "${var.app_name}-mcp-server"
  location   = var.region

  template {
    service_account = google_service_account.cloudrun.email

    scaling {
      min_instance_count = 0
      max_instance_count = 1
    }

    containers {
      image = var.mcp_server_image != "" ? var.mcp_server_image : "us-docker.pkg.dev/cloudrun/container/hello"

      resources {
        limits = {
          cpu    = "1"
          memory = "256Mi"
        }
        cpu_idle = true
      }
    }
  }

  lifecycle {
    ignore_changes = [
      template[0].containers[0].image,
    ]
  }
}

output "mcp_server_url" {
  value = google_cloud_run_v2_service.mcp_server.uri
}

output "artifact_registry_host" {
  value = "${var.region}-docker.pkg.dev/${var.project_id}/${var.app_name}"
}
