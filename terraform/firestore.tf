resource "google_firestore_database" "main" {
  depends_on  = [google_project_service.apis]
  name        = "(default)"
  location_id = var.region
  type        = "FIRESTORE_NATIVE"

  # 削除保護（本番運用時は true を推奨）
  delete_protection_state = "DELETE_PROTECTION_DISABLED"
}
