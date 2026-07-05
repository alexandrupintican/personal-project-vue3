#!/usr/bin/env bash
set -euo pipefail

BASE_BRANCH="develop"

CREATED_BRANCH=""

echo "What type of branch do you want to create?"
echo "  1) feature"
echo "  2) chore"
echo "  3) fix"
read -rp "Enter choice [1-3]: " BRANCH_TYPE

case "$BRANCH_TYPE" in
  1) CREATED_BRANCH="feature-" ;;
  2) CREATED_BRANCH="chore-" ;;
  3) CREATED_BRANCH="fix-" ;;
  *)
    echo "Error: invalid choice '$BRANCH_TYPE'. Must be 1, 2 or 3." >&2
    exit 1
    ;;
esac

read -rp "Enter branch name (without prefix): " BRANCH_NAME

if [[ -z "$BRANCH_NAME" ]]; then
  echo "Error: branch name cannot be empty." >&2
  exit 1
fi

CREATED_BRANCH="${CREATED_BRANCH}${BRANCH_NAME}"

if git rev-parse --verify --quiet "refs/heads/$CREATED_BRANCH" >/dev/null; then
  echo "Error: branch '$CREATED_BRANCH' already exists." >&2
  exit 1
fi

git fetch origin "$BASE_BRANCH"
git checkout "$BASE_BRANCH"
git pull origin "$BASE_BRANCH"
git checkout -b "$CREATED_BRANCH" "$BASE_BRANCH"

echo "Created and switched to branch '$CREATED_BRANCH' from '$BASE_BRANCH'."
