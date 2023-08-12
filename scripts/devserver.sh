#!/bin/sh

scriptdir=$(dirname $0)
sitedir="$scriptdir/../site"
{ cd $sitedir ; npx docusaurus start ; }
