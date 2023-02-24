import { AppError } from '@infra/config/error';
import { OAuth2Client, TokenPayload } from "google-auth-library"

import { UserDTO } from "@infra/database/models/user/dtos/UserDTO"
import env from "@infra/config/env"

export class OAuth2ClientService {
  private readonly _google: OAuth2Client;
  private  _userTokenPayload: TokenPayload | undefined;

  constructor() {    
    this._google = new OAuth2Client(
      env.google.clientId,
      env.google.clientSecret,
      env.google.redirectURI,
    )
  }

  public getTokenInfos = async (code: string): Promise<UserDTO> => {
    const { tokens } = await this._google.getToken(code)
    const { id_token } = tokens

    if (!id_token) {
      throw new AppError("Unauthorized access" , 401)
    }

    const ticket = await this._google.verifyIdToken({
      idToken: id_token,
      audience: env.google.clientId,
    })

    this._userTokenPayload = ticket.getPayload()
    if (!this._userTokenPayload || !this._userTokenPayload.email) {
      throw new AppError("Unauthorized user token.", 401)
    }

    return new UserDTO({
      name: this._userTokenPayload.name,
      email: this._userTokenPayload.email,
      picture: this._userTokenPayload.picture
    })
  }
}
