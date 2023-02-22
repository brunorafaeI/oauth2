import { NextFunction } from 'express';
import { Response } from 'express'

 export class AppError extends Error {

  constructor (
    public readonly message: string,
    public readonly statusCode: number = 400
  ) {
    super()
  }
}

export const AppThrowException = (
  err: Error, 
  req: Request, 
  res: Response, 
  _: NextFunction
) => {
  
  if (err instanceof AppError) {
    const { message, statusCode } = err
    return res.status(statusCode).json({ message })
  }

  return res.status(500).json({ message: err.message })
}