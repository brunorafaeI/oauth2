import { OAuth2Client, TokenPayload } from "google-auth-library"

import { AuthMessage } from "@core/common/util/messages/auth.util"
import { UserGoogleDTO } from "@infra/dtos/UserGoogleDTO/UserGoogleDTO"
import env from "config/env"

export class GoogleAuth {
  private readonly _google: OAuth2Client;
  private  _userTokenPayload: TokenPayload | undefined;

  constructor() {    
    this._google = new OAuth2Client(
      env.google.clientId,
      env.google.clientSecret,
      env.google.redirectURI,
    )
  }

  public getTokenInfos = async (code: string): Promise<UserGoogleDTO> => {
    const { tokens } = await this._google.getToken(code)
    const { id_token } = tokens

    if (!id_token) {
      throw new Error(AuthMessage.message02EX01())
    }

    const ticket = await this._google.verifyIdToken({
      idToken: id_token,
      audience: env.google.clientId,
    })

    this._userTokenPayload = ticket.getPayload()
    if (!this._userTokenPayload || !this._userTokenPayload.email) {
      throw new Error("Unauthorized user token.")
    }

    return new UserGoogleDTO({
      name: this._userTokenPayload.name,
      email: this._userTokenPayload.email,
    })
  }
}
