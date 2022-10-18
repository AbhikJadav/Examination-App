import { Form, Input, InputProps } from "antd";
// import { InputProps } from "antd/lib/Input/style";
import { RuleObject } from "antd/lib/form";
import React from "react";
import style from "./CustomInput.module.scss";
type CustomInputProps = {
  formName?: string;
  label?: string;
  rules?: RuleObject[];
} & InputProps;

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  formName,
  rules,
  ...rest
}) => {
  return (
    <div>
      <Form.Item
        className={style.inputWrapper}
        label={label}
        name={formName}
        rules={rules}
      >
        <Input name={formName} allowClear {...rest} />
      </Form.Item>
    </div>
  );
};

export default CustomInput;
