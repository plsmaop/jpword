#!/usr/bin/env bash

file=$(cat $1 | sed 's/\[0-9\]/ /g' | sed 's/p//g' | sed 's/\.//g')
touch word_done
$file >> word_done
