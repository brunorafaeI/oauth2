import { OAuthController } from './../../../../app/controller/OAuthController';
import { Router } from "express"

const router = Router()

router.use("/", new OAuthController().getRoutes())

export default router