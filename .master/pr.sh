#!/bin/bash
set -ev
if [ "${TRAVIS_PULL_REQUEST}" = "false" ]; then
	istanbul cover _mocha -- .master/test/ -R spec
fi