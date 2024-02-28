#!/bin/bash

# read arguments and loop through each argument
for arg in "$@"; do
    # extract component name
    key=$(echo "$arg" | sed -e 's/^\-\-//' -e 's/=.*//')
    # extract testing type name
    if [[ "$arg" == *"="* ]]; then
      value=$(echo "$arg" | sed -e 's/^.*=//')
    else
      value='default'
    fi

    # Set environment variables
    export "${key}=$value"
done

yarn playwright test
