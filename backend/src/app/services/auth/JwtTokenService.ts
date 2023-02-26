import jwt, { JwtPayload } from "jsonwebtoken"

import { UserDTO } from "@infra/database/dtos/UserDTO"

export class JwtTokenService {
  private _secretKey: string
  private _expiresToken: string

  constructor() {
    this._secretKey = String(process.env.JWT_KEY)
    this._expiresToken = String(process.env.JWT_EXPIRES_TIME)
  }

  public generateToken(user: UserDTO): string {
    const jwtToken = jwt.sign(
      {
        userName: user.name,
        userEmail: user.email
      },
      this._secretKey,
      {
        expiresIn: this._expiresToken,
      },
    )

    return jwtToken
  }

  public VerifyToken(jwtToken: string): JwtPayload | string {
    return jwt.verify(jwtToken, this._secretKey)     
  }
}
