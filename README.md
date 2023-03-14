# Getting Started with Docker

This is a simple project **monorepo** built with nodejs to estableshing connection to access with auth like: Google, Facebook, etc.

## Requirements

- Docker and docker-compose
- vscode or your own preferred IDE

Before to start with docker or manually, you will need to install all dependencies of projects :

```sh
  cd backend && npm install
  cd frontend && npm install
```

Then, you can right up all containers using the next command:

## Docker

```sh
docker-compose up -d --build
```

## Manually

```sh
  cd backend && npm run dev:server
  cd frontend && npm run dev:server
```

## Further commands (Docker)

- `docker-compose down` (down the containers)
- `docker-compose up -d` (up again the containers) *not necessary to rebuild*

## Working with Prisma

For update migration via docker container with the following commands:

```sh
docker exec -it oauth_backend sh # (to go inside docker container)
npx prisma migrate reset # to reset migration
npx prisma db push # to push migration
npx prisma generate # to update prisma client configuration
```

## How to generate JWT RS256 key (linux)

### Ssh

```sh
ssh-keygen -t rsa -b 4096 -m PEM -f jwtRS256-private.key
# Don't add passphrase
ssh-keygen -f jwtRS256-private.key -e -m PKCS8 > jwtRS256-public.key
cat jwtRS256-public.key # Use the key pub to sign new token with jwt .
```

### Openssl

```sh
openssl genrsa -out jwtRSA256-private.pem 2048 # Create a private RSA keys that are between 1024 and 4096 bits long
# Don't add passphrase
openssl rsa -in jwtRSA256-private.pem -pubout -outform PEM -out jwtRSA256-public.pem
cat jwtRSA256-public.pem
```
