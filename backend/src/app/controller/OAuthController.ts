import { Request, Response, Router } from 'express'

import { UserDTO } from '@infra/database/dtos/UserDTO'
import { IRepository } from '@app/services/contracts/Repository/IRepository'
import { JwtTokenService } from '@app/services/auth/JwtTokenService'
import { OAuth2ClientService } from '@app/services/auth/OAuth2ClientService'
import { UserPrismaService } from '@app/services/user/UserPrismaService'
import { Users } from "@prisma/client"
import { BaseController } from '@app/controller/BaseController'

interface OAuthFormRequest extends Request {
  body: {
    credential: string | UserDTO
  }
}
export class OAuthController extends BaseController {
  private readonly _oAuth2ClientService: OAuth2ClientService
  private readonly _jwtTokenService: JwtTokenService
  private readonly _userService: IRepository<Users>
  private readonly _router: Router = Router()

  constructor() {
    super()
    this._oAuth2ClientService = new OAuth2ClientService()
    this._userService = new UserPrismaService()
    this._jwtTokenService = new JwtTokenService()    
  }

  getRoutes(): Router {
    this._router.post("/login", this.AuthLogin)
    this._router.post("/google", this.AuthGoogle)
    this._router.post("/facebook", this.AuthFacebook)

    return this._router
  }

  private AuthLogin = async (
    req: Request<OAuthFormRequest>,
    res: Response,
  ): Promise<Response|void> => {
    const { credential } = req.body

    const jwtToken = this._jwtTokenService.generateToken(credential)
    const userSaved = await this._userService.save({ ...credential, token: jwtToken })

    return res.status(201).json({ userInfo: userSaved })
  }

  private AuthGoogle = async (
    req: Request<OAuthFormRequest>,
    res: Response,
  ): Promise<Response|void> => {
    const { credential } = req.body

    const userInfo = await this._oAuth2ClientService.getTokenInfos(credential)
    const jwtToken = this._jwtTokenService.generateToken(userInfo)
    const userSaved = await this._userService.save({ ...userInfo, token: jwtToken })
    
    return res.status(201).json({ userInfo: userSaved })
  }

  private AuthFacebook = async (
    req: Request<OAuthFormRequest>,
    res: Response,
  ): Promise<Response|void> => {
    const { credential } = req.body

    const jwtToken = this._jwtTokenService.generateToken(credential)
    const userSaved = await this._userService.save({ ...credential, token: jwtToken })

    return res.status(201).json({ userInfo: userSaved })
  }
}