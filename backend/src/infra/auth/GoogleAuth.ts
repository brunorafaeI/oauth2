import { OAuth2Client, TokenPayload } from "google-auth-library";
import env from "config/env";
import { AuthMessage } from "@core/common/util/messages/auth.util";
import { UserGoogleDTO } from "@infra/dtos/UserGoogleDTO/UserGoogleDTO";

export class GoogleAuth {
  private _google: OAuth2Client;
  private _userTokenPayload: TokenPayload | undefined;

  constructor() {
    this._google = new OAuth2Client(
      env.CLIENT_ID,
      env.CLIENT_SECRET,
      env.REDIRECT_URI,
    );
  }

  public getTokenInfos = async (code: string): Promise<UserGoogleDTO> => {
    const tokenInfo = await this._google.getToken(code);
    const access_token: string = String(tokenInfo.tokens.access_token);
    const id_token: string = String(tokenInfo.tokens.id_token);

    if (!id_token) throw new Error(String(AuthMessage.message02EX01));

    const ticket = await this._google.verifyIdToken({
      idToken: id_token,
      audience: env.CLIENT_ID,
    });

    this._userTokenPayload = ticket.getPayload();
    if (!this._userTokenPayload) return new UserGoogleDTO();

    let userDto = new UserGoogleDTO();
    userDto.email = this._userTokenPayload.email;
    userDto.name = this._userTokenPayload.name;
    return userDto;
  };
}
