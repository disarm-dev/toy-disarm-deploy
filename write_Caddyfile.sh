#!/bin/bash

if [ -z ${DOMAIN+x} ]; 
  then 
    echo "DOMAIN is unset"; 
    exit 1;
  else 
    cat Caddyfile.tmpl | envsubst > Caddyfile;
    echo "Caddyfile written"
fi

