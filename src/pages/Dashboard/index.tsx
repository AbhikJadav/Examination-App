import React from "react";
import { useNavigate } from "react-router";

import Button from "src/components/Button";
import { logOutUser } from "src/store/actions/auth";
import { useStoreActions } from "src/store/hooks";

const Dashboard = () => {
  const navigate = useNavigate();
  const actions = useStoreActions({ logOutUser });

  const handleLogout = () => {
    actions.logOutUser();
    navigate("/");
  };

  return (
    <div>
      Dashboard Page
      <Button buttonText="Sign Out" onClick={handleLogout} />
    </div>
  );
};

export default Dashboard;
