import { Request, Response } from "express"

import { JwtTokenService } from '@infra/services/auth/JwtTokenService'
import { OAuth2ClientService } from '@infra/services/auth/OAuth2ClientService'
import { UserService } from '@infra/services/UserService'
import { AppThrowException } from "@infra/config/error"
import { Controller } from "@app/controller/Controller"

export class OAuthController extends Controller {
  private readonly _oAuth2ClientService: OAuth2ClientService
  private readonly _jwtTokenService: JwtTokenService
  private readonly _userService: UserService

  constructor() {
    super()
    this._oAuth2ClientService = new OAuth2ClientService()
    this._userService = new UserService()
    this._jwtTokenService = new JwtTokenService()
    
    this.router.post("/google", this.OAuthGoogle)
  }

  private OAuthGoogle = async (
    req: Request,
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