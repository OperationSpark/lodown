#!/bin/bash
set -ev

if [ "${TRAVIS_PULL_REQUEST}" = "false" ]; then
    cd .master
    IFS=$'\n' read -d '' -r -a config < c.txt
    echo "Running pull request tests for spec ${config[0]}..."
	npm install && wget "${config[0]}" -P test/ && npm test
fi