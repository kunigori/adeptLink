variable "project_id" {
  description = "GCP project ID"
  type        = string
}

variable "region" {
  description = "GCP region"
  type        = string
  default     = "asia-northeast1"
}

variable "app_name" {
  description = "Application name"
  type        = string
  default     = "ezasset"
}

variable "mcp_server_image" {
  description = "MCP server container image URL"
  type        = string
  default     = ""
}
