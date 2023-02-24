import 'dotenv/config'

import express from "express"
import cors from "cors"
import routes from '@infra/framework/express/routes'
import { AppSecurity } from '@app/middlewares/security'

const app = express()

app.use(cors())
app.use(express.json())

app.use(AppSecurity, routes)

export default app