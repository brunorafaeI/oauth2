#!bin/bash

set -e

psql - ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
	CREATE DATABASE IF NOT oauth;
	GRANT ALL PRIVILEGES ON DATABASE oauth TO oauth;
EOSQL