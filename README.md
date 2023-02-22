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
```js
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