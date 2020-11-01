#!/bin/sh
TMP_DIR=$(mktemp -d --suffix='.clip')

cd $TMP_DIR
git clone https://github.com/joshuacox/clip.git
cd clip
git pull
sudo make install
cd
rm -Rf $TMP_DIR
