import "dotenv/config";
import jwt, { JwtPayload } from "jsonwebtoken";

export class TokenGenerated {
  private _secretKey: string;
  private _expiresToken: string;

  public GenerateToken(): string {
    this._secretKey = String(process.env.JWT_KEY);
    this._expiresToken = String(process.env.JWT_EXPIRES_TIME);

    const tokenDescription = jwt.sign(
      {
        userId: 1,
        userName: "User",
      },
      this._secretKey,
      {
        expiresIn: this._expiresToken,
      },
    );

    return tokenDescription;
  }

  public VerifyToken(tokenGenerated: string): JwtPayload | string{
    this._secretKey = String(process.env.JWT_KEY);
    const tokenVerify = jwt.verify(tokenGenerated, this._secretKey);
    return tokenVerify;
  }
}
