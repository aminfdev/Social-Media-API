import { Express } from "express-serve-static-core";
import { Jwt } from "jsonwebtoken";

declare module "express-serve-static-core" {
  interface Request {
    user?: string | jwt.JwtPayload;
  }
}
