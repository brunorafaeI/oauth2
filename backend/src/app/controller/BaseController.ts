import { Router } from "express"

export abstract class BaseController {
  protected readonly _router: Router = Router()
  
  abstract getRoutes(): Router
}