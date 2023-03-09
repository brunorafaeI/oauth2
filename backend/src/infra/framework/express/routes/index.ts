import { OAuthController } from '@app/controller/OAuthController'
import { Router } from "express"

const router = Router()

router.use("/auth", new OAuthController().getRoutes())

export default router