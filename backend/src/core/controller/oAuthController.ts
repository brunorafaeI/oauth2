//const {OAuth2Client} = require('google-auth-library');
// import http from 'http';
// import url from 'url';
// import open from 'open';
// import destroyer from 'server-destroy';

// Download your OAuth2 configuration from the Google
//const keys = require('./oauth2.keys.json');

import envParams from 'config/envParams';

import { Router, Request, Response } from 'express';

export class OAuthController {
  public router: Router = Router();
  public clientId: string = envParams.CLIENT_ID;
  public clientSecret: string = envParams.CLIENT_SECRET;
  public redirectUri: string = envParams.REDIRECT_URI;

  constructor() {
    this.router.post('/google', this.googleOAuth);
  }

  private googleOAuth = async (req: Request, res: Response): Promise<Response> => {
    const { credential } = req.body;
    console.log(req.body);

    return res.status(201).json({});
  }
}


// const clientId = '147246760101-7v79598493u0n8adm6ammdaeo9oa2q96.apps.googleusercontent.com';
// const clientSecret = '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';


// async function main() {
//   const oAuth2Client: any = await getAuthenticatedClient();
//   const url = 'https://people.googleapis.com/v1/people/me?personFields=names';
//   const res = await oAuth2Client.request({url});
//   console.log(res.data);

//   const tokenInfo = await oAuth2Client.getTokenInfo(
//     oAuth2Client.credentials.access_token
//   );
//   console.log(tokenInfo);
// }

// function getAuthenticatedClient() {
//   return new Promise((resolve, reject) => {
//     const oAuth2Client = new OAuth2Client(
//       clientId, // TODO
//       clientSecret, // TODO
//       'postmessage' // TODO
//     );
//   });
// }

//main().catch(console.error);