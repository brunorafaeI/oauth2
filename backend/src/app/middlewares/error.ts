import { Request, Response, NextFunction } from 'express'

 export class AppError extends Error {

  constructor (
    public readonly message: string,
    public readonly statusCode: number = 400
  ) {
    super()
  }
}

export const GlobalError = (
  err: any,
  req: Request,
  res: Response,
  _: NextFunction
) => {
  const { message, statusCode } = err

  return res.status(statusCode || 500).json({ message })
}
