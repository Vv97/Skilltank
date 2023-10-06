import React, { useState } from "react";
import styles from "./Signup.module.css";
import axios, { AxiosResponse } from "axios";
import {
  ISignUpProps,
  ISignUpResponse,
  ISignupFormState,
} from "../../types/user.types";

//initalize
const init = {
  name: "",
  email: "",
  password: "",
  role: "",
};

const Signup = ({ setShow = () => {} }: ISignUpProps) => {
  const [signupform, setSignupFrom] = useState<ISignupFormState>(init);
  const [loading, setLoding] = useState<boolean>(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignupFrom((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSignupFrom((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoding(false);
    const url = import.meta.env.VITE_APP_SIGNUP_URL;
    try {
      await axios
        .post(url, signupform)
        .then((res: AxiosResponse<ISignUpResponse>) => {
          if (res) {
            setLoding(true);
            alert(res.data.message);
            setShow(true);
            setSignupFrom(init);
          }
        });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setLoding(true);
      if (error) {
        alert(error.response.data.message);
      }
      console.log("Error while signup", error);
    }
  };

  return (
    <div className={styles.signup}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          required
          name="name"
          value={signupform.name}
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Email"
          required
          value={signupform.email}
          name="email"
          onChange={handleChange}
        />
        <input
          type="password"
          value={signupform.password}
          placeholder="Password"
          required
          name="password"
          onChange={handleChange}
        />
        <select
          name="role"
          required
          value={signupform.role}
          onChange={handleSelectChange}
        >
          <option value="">Select a role</option>
          <option value="student">Student</option>
          <option value="compony">Compony</option>
        </select>

        <input type="submit" value={loading ? "Signup" : "loading..."} />
      </form>
    </div>
  );
};

export default Signup;
