import { ReactNode, createContext, useContext, useState } from "react";
import { getLocalData } from "../utils/localstorage.utils";
import { IAuthContext, IAuthState } from "../types/context.types";

export const initialize = {
  user: { email: "", name: "" },
  accessToken: "",
  role: "",
  Auth: false,
};

const authContext = createContext<IAuthContext>({
  Auth: initialize,
  setAuth: () => {},
});

export const AuthcontextProvider = ({ children }: { children: ReactNode }) => {
  const store: IAuthState = getLocalData("user") || initialize;
  const [Auth, setAuth] = useState<IAuthState>(store);

  return (
    <authContext.Provider value={{ Auth, setAuth }}>
      {children}
    </authContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(authContext);
};
