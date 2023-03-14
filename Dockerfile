FROM node:lts-alpine3.17 AS oauth_builder

WORKDIR /usr/src/app

COPY ./backend/package.json ./backend/package-lock.json ./

## SSL Certificate
COPY ./docker/certs /usr/local/share/ca-certificates/
ENV NODE_EXTRA_CA_CERTS=/usr/local/share/ca-certificates/CACERT.pem

## Update npm to latest version
RUN npm i -g npm@latest

## Install packages
RUN npm i -g pm2 typescript \
    && npm ci --silent

RUN chown -R node:node ./node_modules

USER node

FROM oauth_builder AS oauth_frontend

RUN rm -rf node_modules/*

COPY ./frontend/package.json ./frontend/package-lock.json ./

## Install packages
RUN npm ci --silent

RUN chown -R node:node ./node_modules

USER node

ENTRYPOINT [ -d "node_modules" ] && sh -c "npm run dev" || npm ci --silent && sh -c "npm run dev"

FROM oauth_builder AS oauth_backend

COPY --from=oauth_builder /usr/src/app ./

EXPOSE 3333

ENTRYPOINT [ -d "node_modules" ] && pm2-runtime process.json || npm i --save && pm2-runtime process.json