#!/bin/bash
export COUCH_DATABASE="anagrammer"
HERE=`pwd`
export COUCH_TRANSFORM="$HERE/trans.js"
export COUCH_URL="https://reader.cloudant.com"
echo "$COUCH_TRANSFORM"
cat idioms5.txt | couchimport 
cat words.tt | couchimport
