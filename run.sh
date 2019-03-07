#!/usr/bin/env bash -euxo pipefail

docker build -q . | xargs docker run