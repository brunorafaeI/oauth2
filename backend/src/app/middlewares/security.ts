import { Request, Response, NextFunction } from 'express'

export const AppSecurity = async (req: Request, res: Response, next: NextFunction) => {
  const { url, method, ip } = req

  console.log({ method, url, ip })

  next()
}
