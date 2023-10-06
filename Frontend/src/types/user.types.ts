// interface
export interface ISignupFormState {
  name: string;
  email: string;
  password: string;
  role: string;
}

// response interface
export interface ISignUpResponse {
  message: string;
}

export interface ISignUpProps {
  setShow: (value: boolean) => void;
}

// ------- Login ----
export interface ILoginFormState {
  email: string;
  password: string;
}

export interface ILoginUser {
  name: string;
  email: string;
}

export interface ILoginResponse {
  message?: string;
  user: ILoginUser;
  accessToken: string;
  role: string;
}
