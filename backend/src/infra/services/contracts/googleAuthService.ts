import { OAuth2Client } from 'google-auth-library';
import env from 'config/env';

export class GoogleAuth {
  private google: OAuth2Client;

  constructor() {
    this.google = new OAuth2Client(
      env.CLIENT_ID,
      env.CLIENT_SECRET,
      env.REDIRECT_URI
    )
  }

  public getTokenInfos = async (code: string) => {
    const tokenInfo = await this.google.getToken(code);
    const access_token: string = tokenInfo.tokens.access_token ?? '';
    const id_token: string = tokenInfo.tokens.id_token ?? ''

    console.log(await this.google.getTokenInfo(access_token));

    const ticket = await this.google.verifyIdToken({
      idToken: id_token,
      audience: env.CLIENT_ID
    });

    console.log(ticket);

    //TODO - pegar o email, access_token e id_token e salvar no db
    //TODO - retornar o jwt com as infos

    console.log(tokenInfo.tokens);
  }
}