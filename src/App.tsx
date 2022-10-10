import React from "react";
import { Navigate, Route, Routes } from "react-router";

// eslint-disable-next-line no-restricted-imports
import "./App.css";
import AuthLayout from "./layout/AuthLayout";
import PrivateLayout from "./layout/PrivateLayout";
import PublicLayout from "./layout/PublicLayout";
import RoutesList from "./routes";
import { useReducerData } from "./store/hooks";

const App = () => {
  const user = useReducerData("auth", "user", "");

  const renderRoutes = () => {
    const isLogin = !!user;
    const renderRoute = (
      Component: React.FC,
      layout: string,
      isPrivate: boolean
    ) => {
      if (Component) {
        switch (layout) {
          case "private":
            return isLogin && isPrivate ? (
              <PrivateLayout>
                <Component />
              </PrivateLayout>
            ) : (
              <Navigate to="/" />
            );
          case "auth":
            return isLogin ? (
              <Navigate to="/" />
            ) : (
              <AuthLayout>
                <Component />
              </AuthLayout>
            );
          case "public":
          default:
            return (
              <PublicLayout>
                <Component />
              </PublicLayout>
            );
        }
      }
      return null;
    };

    return RoutesList.map((route) => (
      <Route
        key={route.name}
        path={route.path}
        element={renderRoute(route.component, route.layout, route.isPrivate)}
      />
    ));
  };

  return (
    <div className="App">
      <Routes>{renderRoutes()}</Routes>
    </div>
  );
};

export default App;
