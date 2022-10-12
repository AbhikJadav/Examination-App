import Dashboard from "src/pages/Dashboard";
import Home from "src/pages/Home";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp/SignUp";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    isPrivate: false,
    layout: "public",
  },
  {
    path: "/login",
    name: "LogIn",
    component: Login,
    isPrivate: false,
    layout: "auth",
  },
  {
    path: "/sign-up",
    name: "Sign-Up",
    component: SignUp,
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
