import { Router, Request, Response } from "express"

const appController = Router()

appController.get(
  "/",
  async (req: Request, res: Response) => {
    res.status(200).json({ message: "hello world"})
})

export default appController
