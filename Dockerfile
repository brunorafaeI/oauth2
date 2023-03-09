FROM node:lts-alpine3.16

WORKDIR /app

ENV NODE_TLS_REJECT_UNAUTHORIZED=0

RUN npm config set strict-ssl false \
    && npm i -g pm2 typescript \
    && npm i -g npm@latest 

EXPOSE 3333

USER node
