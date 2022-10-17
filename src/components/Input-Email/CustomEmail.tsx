import { Form, Input } from "antd";
import { RuleObject } from "antd/lib/form";
import React, { InputHTMLAttributes } from "react";
import style from "../Input/CustomInput.module.scss";

type EmailProps = {
  label?: string;
  name?: string;
  value?: string;
  rules?: RuleObject[];
  placeholder: string;
} & InputHTMLAttributes<HTMLInputElement>;

const CustomEmail: React.FC<EmailProps> = ({
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
        name={name}
        label={label}
        rules={rules}
        className={style.inputWrapper}
      >
        <Input
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          allowClear
        />
      </Form.Item>
    </div>
  );
};

export default CustomEmail;
