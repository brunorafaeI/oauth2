import { Router } from "express"
import appController from "@core/controller/appController"
import { OAuthController } from "@core/controller/oAuthController"

const router = Router()

router.use("/", appController)
router.use("/auth", new OAuthController().router);

export default router