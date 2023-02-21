import 'dotenv/config'

import express from 'express'

const app = express()

const APP_PORT = Number(process.env.APP_PORT) || 5000

app.listen(APP_PORT, "0.0.0.0", () => {
  console.log("Server listening on port " + APP_PORT)
})