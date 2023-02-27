## Getting Started with Docker
THis is an simple project **monorepo** built to estableshing connection to access API with oauth Google.
### Requirements :
- Docker and docker-compose
- vscode or your own preferred IDE

Before to start with docker or manually, you will need to install all dependencies of projects :
```sh
  cd backend && npm install
  cd frontend && npm install
```
Then, you can right up all containers using the next command:

### Docker
```sh
docker-compose up -d --build
```

### Manually
```sh
  cd backend && npm run dev:server
  cd frontend && npm run dev:server
```

### Further commands (Docker):
to down the containers:
`
docker-compose down
`

to up again the containers *(not necessary to rebuild)*
`
docker-compose up -d
`

### (Prisma)
to update migration via docker container with the following commands : 
```sh
docker exec -it oauth_backend sh # (to go inside docker container)
npx prisma migrate reset # to reset migration
npx prisma db push # to push migration
npx prisma generate # to update prisma client configuration
```