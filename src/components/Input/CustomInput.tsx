import { Form, Input } from "antd";
import { RuleObject } from "antd/lib/form";
import React, { InputHTMLAttributes } from "react";
import style from "./CustomInput.module.scss";
type InputProps = {
  label?: string;
  name?: string;
  rules?: RuleObject[];
  placeholder: string;
} & InputHTMLAttributes<HTMLInputElement>;

const CustomInput: React.FC<InputProps> = ({
  label,
  name,
  value,
  rules,
  placeholder,
  onChange,
}) => {
  return (
    <div>
      <Form.Item
        className={style.inputWrapper}
        label={label}
        name={name}
        rules={rules}
      >
        <Input
          type="text"
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          allowClear
        />
      </Form.Item>
    </div>
  );
};

export default CustomInput;
