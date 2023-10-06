import React, { useState } from "react";
import styles from "../studentlogin/StudentLogin.module.css";
import Login from "../../components/login/Login";
import Signup from "../../components/Signup/Signup";

const StudentLogin = () => {
  const [show, setShow] = useState<boolean>(true);

  const handleShow = () => {
    setShow((prev) => !prev);
  };

  return (
    <div className={styles.auth}>
      <div className={styles.authContainer}>
        <h1>{show ? "Student Login" : "Signup"}</h1>
        <div className={styles.authBtnCon}>
          <div>
            <button
              onClick={handleShow}
              style={{
                color: show ? "#fff" : "#000",
                background: show
                  ? "linear-gradient(to right, rgb(174, 69, 174), rgb(240, 65, 155))"
                  : "#fff",
              }}
            >
              Login
            </button>
            <button
              onClick={handleShow}
              style={{
                color: !show ? "#fff" : "#000",
                background: !show
                  ? "linear-gradient(to right, rgb(174, 69, 174), rgb(240, 65, 155))"
                  : "#fff",
              }}
            >
              Signup
            </button>
          </div>
        </div>

        {show ? <Login /> : <Signup setShow={setShow} />}
      </div>
    </div>
  );
};

export default StudentLogin;
