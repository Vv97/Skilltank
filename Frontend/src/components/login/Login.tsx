import React, { useState } from "react";
import styles from "../Signup//Signup.module.css";
import axios, { AxiosResponse } from "axios";
import { ILoginFormState, ILoginResponse } from "../../types/user.types";
import { setLocalData } from "../../utils/localstorage.utils";
import { IAuthState } from "../../types/context.types";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/Authcontext";

//initalize
const init = {
  email: "",
  password: "",
};

const Login = () => {
  const [loginfrom, setLoginFrom] = useState<ILoginFormState>(init);
  const { setAuth } = useAuth();
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginFrom((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(false);
    const url = import.meta.env.VITE_APP_LOGIN_URL;
    try {
      await axios
        .post(url, loginfrom)
        .then((res: AxiosResponse<ILoginResponse>) => {
          if (res) {
            setLoading(true);
            alert(res.data.message);
            setLocalData<IAuthState>("user", { ...res.data, Auth: true });
            setAuth({ ...res.data, Auth: true });
            setLoginFrom(init);
            navigate("/");
          }
        });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setLoading(true);
      if (error) {
        alert(error.response.data.message);
      }
      console.log("Error while Login", error);
    }
  };

  return (
    <div className={styles.signup}>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          required
          name="email"
          value={loginfrom.email}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          required
          name="password"
          value={loginfrom.password}
          onChange={handleChange}
        />

        <span>Forgot Password</span>
        <input type="submit" value={loading ? "Login" : "loading..."} />
      </form>
    </div>
  );
};

export default Login;
