import { Request, Response } from "express"

import { IRepositoryService } from '@app/services/contracts/IRepositoryService'
import { JwtTokenService } from '@app/services/auth/JwtTokenService'
import { OAuth2ClientService } from '@app/services/auth/OAuth2ClientService'
import { UserPrismaService } from '@app/services/UserPrismaService'
import { AppThrowException } from "@infra/config/error"
import { Controller } from "@app/controller/Controller"
import { Users } from "@prisma/client"

interface OAuthRequestBody extends Request {
  body: {
    credential: string
  }
}
export class OAuthController extends Controller {
  private readonly _oAuth2ClientService: OAuth2ClientService
  private readonly _jwtTokenService: JwtTokenService
  private readonly _userService: IRepositoryService<Users>

  constructor() {
    super()
    this._oAuth2ClientService = new OAuth2ClientService()
    this._userService = new UserPrismaService()
    this._jwtTokenService = new JwtTokenService() 
    
    this.router.post("/google", this.OAuthGoogle)
  }

  private OAuthGoogle = async (
    req: Request<OAuthRequestBody>,
    res: Response,
  ): Promise<Response|void> => {
    const { credential } = req.body

    try {
      const userInfo = await this._oAuth2ClientService.getTokenInfos(credential)
      const jwtToken = this._jwtTokenService.generateToken(userInfo)
      const userSaved = await this._userService.save({ ...userInfo, token: jwtToken })
      
      return res.status(201).json({ userInfo: userSaved })
    } catch (err: any) {
      AppThrowException(err, res)
    } 
  }
}