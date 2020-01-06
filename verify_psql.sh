#!/usr/bin/env bash

psql "sslmode=verify-ca sslrootcert=/home/vlad/github/assay-visualizer/server-ca.pem \
sslcert=/home/vlad/github/assay-visualizer/client-cert.pem \
sslkey=/home/vlad/github/assay-visualizer/client-key.pem \
hostaddr=34.68.184.190 \
user=postgres dbname=viz"