import { Form, Input } from "antd";
import { RuleObject } from "antd/lib/form";
import React, { InputHTMLAttributes } from "react";
import style from "../Input/CustomInput.module.scss";

type EmailProps = {
  label?: string;
  name?: string;
  rules?: RuleObject[];
  placeholder: string;
} & InputHTMLAttributes<HTMLInputElement>;

const CustomEmail: React.FC<EmailProps> = ({
  label,
  name,
  rules,
  placeholder,
}) => {
  return (
    <div>
      <Form.Item
        name={name}
        label={label}
        rules={rules}
        className={style.inputWrapper}
      >
        <Input placeholder={placeholder} allowClear />
      </Form.Item>
    </div>
  );
};

export default CustomEmail;
