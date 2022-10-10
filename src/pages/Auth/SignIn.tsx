import React, { useState } from "react";
import { useNavigate } from "react-router";

import Button from "src/components/Button";
import Input from "src/components/Input";
import { setUser } from "src/store/actions/auth";
import { useStoreActions } from "src/store/hooks";

const SignIn = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });
  const actions = useStoreActions({ setUser });

  const handleSignIn = async () => {
    await actions.setUser(userDetails);
    setUserDetails({
      email: "",
      password: "",
    });
    navigate("/dashboard");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  return (
    <div>
      SignIn Page
      <div>
        <Input
          name="email"
          placeholder="email"
          value={userDetails.email}
          onChange={handleChange}
        />
        <Input
          name="password"
          placeholder="password"
          type="password"
          value={userDetails.password}
          onChange={handleChange}
        />
        <Button buttonText="Sign In" onClick={handleSignIn} />
      </div>
    </div>
  );
};

export default SignIn;
