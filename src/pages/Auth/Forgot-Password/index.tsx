import React, { useState } from "react";
import ConfirmEmail from "./ConfirmEmail";
import ConfirmPassword from "./ConfirmPassword";
const ForgotPassword = () => {
  const [isDisplayNext, setIsDisplayNext] = useState(false);
  return (
    <div>
      {!isDisplayNext ? (
        <ConfirmEmail
          isDisplayNext={isDisplayNext}
          setIsDisplayNext={setIsDisplayNext}
        />
      ) : (
        <ConfirmPassword />
      )}
    </div>
  );
};

export default ForgotPassword;
