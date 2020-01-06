#!/usr/bin/env bash

echo "Clearing computer of env"

docker system prune -af
docker volume prune