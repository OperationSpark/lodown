#!/bin/bash
set -ev

config=()

getConfig() {
    i=0
    while read line 
    do
        config[i]=$line
        echo config[i]
        i=$(($i + 1))
    done < $1
}
getConfig ".master/c.txt" 

if [ "${TRAVIS_PULL_REQUEST}" = "false" ]; then
    cd .master
    echo "Running pull request tests for spec ${config[0]}..."
	npm install && wget config[0] -P test/ && npm test
fi