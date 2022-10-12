import { Button } from "antd";
import { ButtonProps } from "antd/es/button/button";
import React from "react";

type BtnProp = {
  buttonText: string;
} & ButtonProps;

const CustomButton: React.FC<BtnProp> = ({ buttonText, ...rest }: BtnProp) => {
  return (
    <div>
      <Button {...rest} danger>
        {buttonText}
      </Button>
    </div>
  );
};

export default CustomButton;
