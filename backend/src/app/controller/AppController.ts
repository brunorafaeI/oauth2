import { Router } from "express"

export class AppController {
  protected router: Router = Router()

  constructor() {
    this.router.get("/", (req, res) => {
      return res.status(200).json({ message: "Hello world!" })
    })
  }

  getRoutes() {
    return this.router
  }
}
