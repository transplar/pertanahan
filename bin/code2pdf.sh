#!/usr/bin/env bash

OUTPUT_DIR="pdf"
EXCLUDED_DIR="-path ./node_modules -o -path ./.git -o -path ./build -o -path ./pdf"
EXCLUDED_FILE=".ico|.lock|.png|.jpg|.DS_Store"
SOURCE_LIST=$(find . -type d \( $EXCLUDED_DIR \) -prune -o -print | grep -vE $EXCLUDED_FILE | xargs)

mkdir -p $OUTPUT_DIR

a2ps --medium=A4 \
	--portrait \
	--header="Sistem Informasi Pertanahan - Disperkim Jabar" \
	--column=1 \
	--line-number=1 \
	--font-size=11 \
	--toc \
	--delegate=no \
	$SOURCE_LIST \
	-o - | ps2pdf - $OUTPUT_DIR/code.pdf
