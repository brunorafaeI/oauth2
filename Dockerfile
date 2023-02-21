FROM node:lts-alpine3.16

WORKDIR /app

EXPOSE 3333

RUN npm config set strict-ssl false \
    && yarn config set strict-ssl false \
    && yarn global add pm2 \
    && yarn global add typescript