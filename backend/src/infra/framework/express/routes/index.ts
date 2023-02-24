import { OAuthController } from '@app/controller/OAuthController'
import { Router } from "express"

const router = Router()

router.use("/auth", new OAuthController().router)

export default router