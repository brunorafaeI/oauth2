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
