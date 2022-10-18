import { Form, Input } from "antd";
import { Rule } from "antd/lib/form";
import React, { InputHTMLAttributes } from "react";
import "./CustomPassword.module.scss";
import style from "../Input/CustomInput.module.scss";

type PasswordProps = {
  label?: string;
  name?: string;
  rules?: Rule[];
  placeholder?: string;
} & InputHTMLAttributes<HTMLInputElement>;
const CustomPassword: React.FC<PasswordProps> = ({
  label,
  name,
  value,
  onChange,
  rules,
  placeholder,
}) => {
  return (
    <div>
      <Form.Item
        label={label}
        name={name}
        rules={rules}
        className={style.inputWrapper}
      >
        <Input.Password
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          allowClear
        />
      </Form.Item>
    </div>
  );
};

export default CustomPassword;
