import { useState } from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import "./nav.css";
import { useNavigate } from "react-router-dom";
import { initialize, useAuth } from "../../context/Authcontext";

const Navbar = () => {
  const [show, setShow] = useState<boolean>(false);
  const { Auth, setAuth } = useAuth();
  const navigate = useNavigate();

  const handleShow = () => {
    setShow((prev) => !prev);
  };

  const handleNavigate = (path: string) => {
    if (!path) {
      alert("require path");
      return;
    }

    if (path !== "/") {
      setShow((prev) => !prev);
    }

    navigate(path);
  };

  const handelLogout = () => {
    setAuth(initialize);
    localStorage.clear();
  };

  return (
    <nav className={styles.navbar}>
      <div
        className={styles.navbar_logo_con}
        onClick={() => handleNavigate("/")}
      >
        <div className={styles.navbar_logo}>
          <img src="https://i.ibb.co/7RWj0BX/hotel-3447.png" alt="" />
          <h3>MR</h3>
        </div>
        <div className={styles.nav_text}>
          <span>Part of Times</span>
          <span>Higher Education</span>
        </div>
      </div>

      <ul className={styles.navbar_list}>
        <li className="activelink">
          <NavLink to="/">Home</NavLink>
        </li>
        <li>Jobs</li>
        <li className="activelink">
          <NavLink to="/mentors">Mentors</NavLink>
        </li>
        <li>Sections</li>
      </ul>

      <div>
        {Auth?.Auth ?? false ? (
          <button onClick={handelLogout}>Logout</button>
        ) : (
          <button onClick={handleShow}>Signin</button>
        )}
        {show && (
          <div>
            <button onClick={() => handleNavigate("/companylogin")}>
              Company Signin
            </button>
            <button onClick={() => handleNavigate("/studentlogin")}>
              Student Signin
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
