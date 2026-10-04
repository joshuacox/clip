#!/bin/sh
set -eu

THIS_NAME=clip
THIS_GH=joshuacox
THIS_BRANCH=master
TMP_DIR=$(mktemp -d -t clip_bootstrap.XXXXXXXXXX)

cleanup_func () {
  rm -rf "${TMP_DIR}"
}
trap cleanup_func EXIT

cd "${TMP_DIR}"
curl -sL -o "${THIS_NAME}-${THIS_BRANCH}.zip" "https://github.com/${THIS_GH}/${THIS_NAME}/archive/refs/heads/${THIS_BRANCH}.zip"
unzip -q "${THIS_NAME}-${THIS_BRANCH}.zip"
cd "${THIS_NAME}-${THIS_BRANCH}"

if command -v make >/dev/null 2>&1; then
  sudo make install
elif command -v cmake >/dev/null 2>&1; then
  cmake .
  make
  sudo make install
else
  sudo install -d /usr/local/bin /usr/local/share/man/man1
  sudo install -m 755 clip /usr/local/bin/clip
  sudo install -m 644 man/clip.1 /usr/local/share/man/man1/clip.1
fi
