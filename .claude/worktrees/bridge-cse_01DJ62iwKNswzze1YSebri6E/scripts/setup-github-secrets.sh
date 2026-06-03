#!/bin/bash
# GitHub Secrets 一括登録スクリプト
# ターミナルで実行: bash scripts/setup-github-secrets.sh

set -e
REPO="kunigori/ez-asset"

echo "=== GitHub Secrets 一括登録 ==="
echo ""

secrets=(
  "GCP_PROJECT_ID=ezasset-497719"
  "WIF_PROVIDER=projects/88343870603/locations/global/workloadIdentityPools/github-pool/providers/github-provider"
  "WIF_SERVICE_ACCOUNT=github-actions@ezasset-497719.iam.gserviceaccount.com"
  "FIREBASE_PROJECT_ID=corpolation-134fd"
  "FIREBASE_API_KEY=AIzaSyCc192Ij9kUxVaAqIHtPBzH0xBdikbSpvo"
  "FIREBASE_AUTH_DOMAIN=corpolation-134fd.firebaseapp.com"
  "FIREBASE_STORAGE_BUCKET=corpolation-134fd.firebasestorage.app"
  "FIREBASE_MESSAGING_SENDER_ID=657135550893"
  "FIREBASE_APP_ID=1:657135550893:web:d2410b21110d966c17a124"
)

for kv in "${secrets[@]}"; do
  key="${kv%%=*}"
  val="${kv#*=}"
  echo -n "  登録中: $key ... "
  echo "$val" | gh secret set "$key" --repo "$REPO"
  echo "✅"
done

echo ""
echo "⚠️  FIREBASE_SERVICE_ACCOUNT は別途手動登録が必要です（後述）"
echo ""
echo "完了！確認: https://github.com/$REPO/settings/secrets/actions"
