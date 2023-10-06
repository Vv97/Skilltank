import dotenv from "dotenv";
import jwt, { JwtPayload } from "jsonwebtoken";
dotenv.config();

const secretKey = process.env.jwt_secret_key ?? "";

interface IVerifyJwt {
  valid: boolean;
  expired: boolean;
  decoded: JwtPayload | string | null;
}

export function signJwt(object: Object, options?: jwt.SignOptions | undefined) {
  return jwt.sign(object, secretKey, {
    ...(options && options),
  });
}

export async function verifyJwt(token: string): Promise<IVerifyJwt> {
  try {
    const decoded = jwt.verify(token, secretKey);
    return {
      valid: true,
      expired: false,
      decoded,
    };
  } catch (e: any) {
    console.error(e);
    return {
      valid: false,
      expired: e.message === "jwt expired",
      decoded: null,
    };
  }
}
