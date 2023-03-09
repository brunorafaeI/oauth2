import { Request, Response, NextFunction } from "express"

import { AppError } from '@app/middlewares/error'
import { JwtTokenService } from '@app/services/auth/JwtTokenService'

const jwtTokenService = new JwtTokenService()

export default function AuthMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { authorization } = req.headers

  if (!authorization || !authorization.includes('Bearer')) {
    throw new AppError('Invalid authorization', 401)
  }

  const token = authorization.split(` `)[1]

  if (!jwtTokenService.VerifyToken(token)) {
    throw new AppError('Invalid jwt token', 401)
  }
  
  next()
}
