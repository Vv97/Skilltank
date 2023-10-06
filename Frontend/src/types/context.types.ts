import { ILoginResponse } from "./user.types";

export interface IAuthState extends ILoginResponse {
  Auth: boolean;
}

// context interface
export interface IAuthContext {
  Auth: IAuthState;
  setAuth: (res: IAuthState) => void;
}
