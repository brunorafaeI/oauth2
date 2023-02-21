import "dotenv/config";
import { Request, Response, NextFunction } from "express";
import { Token } from "@infra/auth/tokenGenerated";

export default function AuthMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const tokenGenerated = new Token();

  const { authorization } = req.headers;
  if (!authorization) return res.sendStatus(401);

  const token = authorization.split(` `)[1];
  try {
    const tokenVerify = tokenGenerated.VerifyToken(token);
    console.log(tokenVerify);
    return next();
  } catch {
    return res.sendStatus(401);
  }
}
