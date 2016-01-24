#!/bin/bash
set -ev

if [ "${TRAVIS_PULL_REQUEST}" = "false" ]; then
    cd .master 
    config=()

    getConfig() {
        i=0
        while read line 
        do
            config[i]=$line
            i=$(($i + 1))
        done < $1
    }
    getConfig "c.txt"
    echo "Running pull request tests for spec ${config[0]}..."
	npm install && wget config[0] -P test/ && npm test
fi