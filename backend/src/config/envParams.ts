import * as dotenv from 'dotenv';
dotenv.config();

export default {
  SESSION_SECRET: process.env.SESSION_SECRET ?? '',
  APP_SECRET: process.env.APP_SECRET ?? '',
  APP_PORT: process.env.APP_PORT ?? '',
  NODE_ENV: process.env.NODE_ENV ?? '',
  CLIENT_ID: process.env.CLIENT_ID ?? '',
  CLIENT_SECRET: process.env.CLIENT_SECRET ?? '',
  REDIRECT_URI: process.env.REDIRECT_URI ?? '',
  DB_HOST: process.env.DB_HOST ?? '',
  DB_PORT: process.env.DB_PORT ?? '',
  DB_USERNAME: process.env.DB_USERNAME ?? '',
  DB_PASSWORD: process.env.DB_PASSWORD ?? '',
  DB_DATABASE: process.env.DB_DATABASE ?? ''
}