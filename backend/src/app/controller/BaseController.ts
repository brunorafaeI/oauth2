import { Router } from "express"

export abstract class BaseController {
  abstract getRoutes(): Router
}