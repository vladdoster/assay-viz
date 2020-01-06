#!/usr/bin/env bash

echo "Loading data"
docker-compose -f local.yml run --rm django python manage.py loaddata dataset.json