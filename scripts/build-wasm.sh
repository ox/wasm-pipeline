#!/usr/bin/env bash

SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
ROOT_DIR=$SCRIPT_DIR/..

pushd $ROOT_DIR/app

GOOS=js GOARCH=wasm go build -o $ROOT_DIR/public/wasm/main.wasm

popd
