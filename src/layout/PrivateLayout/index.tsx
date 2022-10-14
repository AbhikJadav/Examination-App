import React from "react";
import Header from "../AuthLayout/Header";

interface Props {
  children: React.ReactNode;
}

const PrivateLayout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Header />
      {/*<p>Private Layout</p>*/}
      {children}
    </div>
  );
};

export default PrivateLayout;
