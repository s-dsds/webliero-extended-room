#!/bin/bash
trap ' ' INT
../src/dist/cli.js stop $1
../src/dist/cli.js launch --id $1 --token $2
../src/dist/cli.js run $1 *.js
