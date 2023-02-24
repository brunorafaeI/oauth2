import { Request, Response } from "express"

import { JwtTokenService } from '@infra/services/auth/JwtTokenService'
import { OAuth2ClientService } from '@infra/services/auth/OAuth2ClientService'
import { UserService } from '@infra/services/UserService'
import { AppController } from '@app/controller/AppController'
import { AppThrowException } from "@infra/config/error"

export class OAuthController extends AppController {
  private readonly _oAuth2ClientService: OAuth2ClientService
  private readonly _jwtTokenService: JwtTokenService
  private readonly _userService: UserService

  constructor() {
    super()
    this._oAuth2ClientService = new OAuth2ClientService()
    this._userService = new UserService()
    this._jwtTokenService = new JwtTokenService()
    
    this.router.post("/auth/google", this.OAuthGoogle)
  }

  private OAuthGoogle = async (
    req: Request,
    res: Response,
  ): Promise<Response|void> => {
    const { credential } = req.body

    try {
      const userInfo = await this._oAuth2ClientService.getTokenInfos(credential)
      const jwtToken = this._jwtTokenService.generateToken(userInfo)

      // const userSaved = await this._userService.save(userInfo)
      // TODO : persist user info with token on bdd
      
      return res.status(201).json({ userInfo, token: jwtToken })
    } catch (err: any) {
      AppThrowException(err, res)
    } 
  }
}
