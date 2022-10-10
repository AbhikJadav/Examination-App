// import SignIn from "src/pages/Auth/SignIn";
import Dashboard from "src/pages/Dashboard";
import Home from "src/pages/Home";
import Login from "./pages/Auth/Login";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    isPrivate: false,
    layout: "public",
  },
  // {
  //   path: "/signin",
  //   name: "SignIn",
  //   component: SignIn,
  //   isPrivate: false,
  //   layout: "auth",
  // },
  {
    path: "/login",
    name: "LogIn",
    component: Login,
    isPrivate: false,
    layout: "auth",
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    isPrivate: true,
    layout: "private",
  },
];

export default routes;
