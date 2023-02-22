import { GoogleAuth } from "@infra/auth/GoogleAuth";
import { Router, Request, Response } from "express";
import { Token } from "@infra/auth/tokenGenerated";
import { IUsersApplication } from "@infra/application/contracts/IUsersApplication";
import { UsersApplication } from "@infra/application/UsersApplication";

export class OAuthController {
  public router: Router = Router();
  private _usersApplication: IUsersApplication;

  constructor() {
    this.router.post("/google", this.googleOAuth);

    this._usersApplication = new UsersApplication();
  }

  private googleOAuth = async (
    req: Request,
    res: Response,
  ): Promise<Response> => {
    const { credential } = req.body;
    try {
      const userInfo = await new GoogleAuth().getTokenInfos(credential);
      let userVerify = await this._usersApplication.getUserByEmail(
        String(userInfo.email),
      );
      if (!userVerify.email)
        userVerify = await this._usersApplication.setUser(userInfo);

      const accessToken = await new Token().GenerateToken(userVerify);

      return res.status(201).json({ accessToken, userInfo });
    } catch (error) {
      return res.status(500).json({ error });
    } 
  };
}
