#!/usr/bin/env bash

OUTPUT_DIR="pdf"

mkdir -p $OUTPUT_DIR

a2ps --medium=A4 \
	--portrait \
	--header="Sistem Informasi Pertanahan - Disperkim Jabar" \
	--column=1 \
	--line-number=1 \
	--font-size=11 \
	--toc \
	package.json .travis.yml public/**/* src/**/* \
	-o - | ps2pdf - $OUTPUT_DIR/code.pdf
