import { GoogleAuth } from '@infra/services/contracts/googleAuthService';
import { Router, Request, Response } from 'express';

export class OAuthController {
  public router: Router = Router(); 

  constructor() {
    this.router.post('/google', this.googleOAuth);
  }

  private googleOAuth = async (req: Request, res: Response): Promise<Response> => {
    const { credential } = req.body;

    const google = new GoogleAuth();

    const info = google.getTokenInfos(credential);

    //console.log(info);

    return res.status(201).json({});
  }
}
