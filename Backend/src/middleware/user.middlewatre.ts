import { NextFunction, Request, Response } from "express";
import { verifyJwt } from "../helper/jwtHelper";

export const checkRole = (req: Request, res: Response, next: NextFunction) => {
  const user = res.locals.user;

  if (user) {
    return res.status(400).send({ message: "Authentication required" });
  }

  if (user.role === "compony") {
    next();
  } else {
    return res.status(403).send({ message: "Permission denied" });
  }
};

export async function checkToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const token = req.headers.authorization;

  if (!token) {
    return res
      .status(401)
      .json({ message: "Authentication failed: No token provided" });
  }

  const { valid, decoded } = await verifyJwt(token);

  if (valid && decoded) {
    res.locals.user = decoded;
    next();
  } else {
    return res.status(401).json({ message: "Authentication failed" });
  }
}
