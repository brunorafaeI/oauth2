import { OAuth2Client, TokenPayload } from 'google-auth-library';
import env from 'config/env';
import { User } from '@infra/models/User';
import { UsersApplication } from '@infra/application/UsersApplication';
import { IUsersApplication } from '@infra/application/contracts/IUsersApplication';
import { IsNull } from 'typeorm';

export class GoogleAuth {
  private _google: OAuth2Client;
  private _userTokenPayload: TokenPayload | undefined;
  private _usersApplication: IUsersApplication;

  constructor() {
    this._google = new OAuth2Client(
      env.CLIENT_ID,
      env.CLIENT_SECRET,
      env.REDIRECT_URI
    );

    this._usersApplication = new UsersApplication();
  }

  public getTokenInfos = async (code: string): Promise<User> => {
    const tokenInfo = await this._google.getToken(code);
    const access_token: string = String(tokenInfo.tokens.access_token);
    const id_token: string = String(tokenInfo.tokens.id_token);

    if (id_token == null) return new User();

    const ticket = await this._google.verifyIdToken({
      idToken: id_token,
      audience: env.CLIENT_ID
    });

    this._userTokenPayload = ticket.getPayload();
    if (!this._userTokenPayload) return new User();

    let userVerify = await this._usersApplication.getUserByEmail(String(this._userTokenPayload.email));
    if (userVerify.email == null) return await this._usersApplication.setUser(this._userTokenPayload);

    return userVerify;
  }
}