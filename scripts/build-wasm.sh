#!/usr/bin/env bash

SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
ROOT_DIR=$SCRIPT_DIR/..

for module in negative addthousand; do 
  pushd $ROOT_DIR/transformers/$module
  GOOS=js GOARCH=wasm go build -o $ROOT_DIR/public/wasm/$module.wasm
  popd
done
