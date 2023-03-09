import { UserPrismaService } from '@app/services/user/UserPrismaService'
import { JwtTokenService } from '@app/services/auth/JwtTokenService'
import { OAuth2ClientService } from '@app/services/auth/OAuth2ClientService'
import { UserDTO } from '@infra/database/dtos/UserDTO'
import { Router, Request, Response } from 'express'

interface AuthFormRequest extends Request {
  body: {
    credential: string | UserDTO
  }
}

const _authService = new OAuth2ClientService()
const _userService = new UserPrismaService()
const _jwtTokenService = new JwtTokenService()

export const AuthController = Router()

AuthController.post(
  "/login",
  async (
  req: Request<AuthFormRequest>,
  res: Response,
): Promise<Response|void> => {
  const { credential } = req.body

  const jwtToken = _jwtTokenService.generateToken(credential)
  const userSaved = await _userService.save({ ...credential, token: jwtToken })

  return res.status(201).json({ userInfo: userSaved })
})

AuthController.post(
  "/google",
  async (
  req: Request<AuthFormRequest>,
  res: Response,
): Promise<Response|void> => {
  const { credential } = req.body

  const userInfo = await _authService.getTokenInfos(credential)
  const jwtToken = _jwtTokenService.generateToken(userInfo)
  const userSaved = await _userService.save({ ...userInfo, token: jwtToken })

  return res.status(201).json({ userInfo: userSaved })
})

AuthController.post(
  "/facebook",
  async (
  req: Request<AuthFormRequest>,
  res: Response,
): Promise<Response|void> => {
  const { credential } = req.body

  const userInfo = await _authService.getTokenInfos(credential)
  const jwtToken = _jwtTokenService.generateToken(userInfo)
  const userSaved = await _userService.save({ ...userInfo, token: jwtToken })
 
  return res.status(201).json({ userInfo: userSaved })
})
