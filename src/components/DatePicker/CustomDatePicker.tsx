import { DatePicker, Form } from "antd";
import { RuleObject } from "antd/lib/form";
import React, { InputHTMLAttributes } from "react";
import style from "./CustomDatePicker.module.scss";
const { RangePicker } = DatePicker;

type DatePickerProps = {
  label?: string;
  name?: string;
  rules?: RuleObject[];
  placeholder: string;
} & InputHTMLAttributes<HTMLInputElement>;

const CustomDatePicker: React.FC<DatePickerProps> = ({
  label,
  name,
  rules,
}) => {
  return (
    <div>
      <Form.Item
        className={style.inputWrapper}
        label={label}
        name={name}
        rules={rules}
      >
        <RangePicker picker="year" />
      </Form.Item>
    </div>
  );
};

export default CustomDatePicker;
