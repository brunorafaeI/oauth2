import "dotenv/config";
import { Request, Response, NextFunction } from "express";
import { TokenGenerated } from "@infra/auth/tokenGenerated";

export default function AuthMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const tokenGenerated = new TokenGenerated();

  const { authorization } = req.headers;
  if (!authorization) return res.sendStatus(403);

  const token = authorization
    .replace(tokenGenerated.GenerateToken(), "")
    .trim();

  try {
    const tokenVerify = tokenGenerated.VerifyToken(token);
    console.log(tokenVerify);
    return next();
  } catch {
    return res.sendStatus(403);
  }
}
