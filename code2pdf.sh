#!/usr/bin/env bash

OUTPUT_DIR="pdf"
SOURCE_LIST=$(find . -type d \( -path ./node_modules -o -path ./.git -o -path ./build -o -path ./pdf \) -prune -o -print | grep -vE ".ico|.lock|.png|.jpg" | xargs)

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
