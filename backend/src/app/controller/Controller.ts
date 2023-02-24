import { Router } from "express"

export abstract class Controller {
  public readonly router: Router = Router()
}
