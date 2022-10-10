import React from "react";
import { useNavigate } from "react-router";

import Button from "src/components/Button";
import { useReducerData } from "src/store/hooks";

const Home = () => {
  const navigate = useNavigate();
  const user = useReducerData("auth", "user", {});
  // eslint-disable-next-line no-console
  console.log("user", user);

  const handleRedirect = () => {
    navigate("/signin");
  };
  return (
    <div>
      Home Page
      <Button buttonText="Go to Signin Page" onClick={handleRedirect} />
    </div>
  );
};

export default Home;
