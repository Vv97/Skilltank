import { Routes, Route, RouteObject } from "react-router-dom";
import Home from "../pages/Home/Home";
import Mentors from "../pages/Mentor/Mentors";
import StudentLogin from "../pages/studentlogin/StudentLogin";
import CompanyLogin from "../pages/companylogin/CompanyLogin";
import MentorBook from "../components/mentorbook/MentorBook";
import PrivateRoute from "./PivateRoute";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/mentors",
    element: (
      <PrivateRoute>
        <Mentors />
      </PrivateRoute>
    ),
  },
  {
    path: "/studentlogin",
    element: <StudentLogin />,
  },
  {
    path: "/companylogin",
    element: <CompanyLogin />,
  },
  {
    path: "/mentorsbook/:id",
    element: <MentorBook />,
  },
];

const Allroutes = () => {
  // Render the Route components using map
  return (
    <Routes>
      {routes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
  );
};

export default Allroutes;
