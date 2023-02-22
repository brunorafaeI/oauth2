import 'dotenv/config'

export default {
  google: {
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    redirectURI: process.env.REDIRECT_URI
  },
  pgsql: {
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env._DB_PORT) || 5432,
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || 'postgres',
    database: process.env.DB_DATABASE || 'postgres',
    db_url: process.env.DB_URL
  }
}