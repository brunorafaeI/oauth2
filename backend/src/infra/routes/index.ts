import { Router } from "express"
import appController from "@core/controller/appController"

const router = Router()

router.use("/", appController)

export default router