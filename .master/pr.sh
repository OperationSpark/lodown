#!/bin/bash
set -ev
if [ "${TRAVIS_PULL_REQUEST}" = "false" ]; then
	cd .master && npm install && wget https://raw.github.com/jfraboni/os/master/ld/i.spec.js -P test/ && npm test
fi