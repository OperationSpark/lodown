#!/bin/bash
set -ev

echo "pull request is ${TRAVIS_PULL_REQUEST}."

if [ "${TRAVIS_PULL_REQUEST}" != "false" ]; then
    cd .master
    readarray a < c.txt
    echo "Running pull request tests for spec ${a[0]}..."
	npm install && wget "${a[0]}" -P test/ && npm test
fi
