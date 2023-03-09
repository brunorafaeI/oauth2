import "dotenv/config"
import "express-async-errors"
import "@infra/config/typeorm"

import express from "express"
import cors from "cors"
import routes from '@infra/framework/express/routes'
import { AppSecurity } from '@app/middlewares/security'
import { GlobalError } from '@app/middlewares/error'

const app = express()

app.use(cors())
app.use(express.json())

app.use(
  AppSecurity, 
  routes, 
  GlobalError
)

export default app