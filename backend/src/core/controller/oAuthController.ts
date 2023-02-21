import { GoogleAuth } from '@infra/services/GoogleAuthService';
import { Router, Request, Response } from 'express';
import { Token } from '@infra/auth/tokenGenerated';

export class OAuthController {
  public router: Router = Router(); 

  constructor() {
    this.router.post('/google', this.googleOAuth);
  }

  private googleOAuth = async (req: Request, res: Response): Promise<Response> => {
    const { credential } = req.body;

    const googleInfo = await new GoogleAuth().getTokenInfos(credential);
    console.log(googleInfo);

    const token = new Token().GenerateToken();

    return res.status(201).json({ token });
  }
}
