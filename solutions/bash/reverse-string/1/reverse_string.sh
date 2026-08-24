#!/usr/bin/env bash

INPUT=$1
OUTPUT=""

for (( i=${#INPUT}-1; i>=0; i-- )); do
    OUTPUT="$OUTPUT${INPUT:$i:1}"
done

echo "$OUTPUT"