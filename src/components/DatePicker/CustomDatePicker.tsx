import { DatePicker, Form } from "antd";
import { RangePickerProps } from "antd/lib/date-picker";
import { RuleObject } from "antd/lib/form";
import React from "react";
import style from "./CustomDatePicker.module.scss";
// import {PickerProps}
const { RangePicker } = DatePicker;

type DatePickerProps = {
  label?: string;
  name?: string;
  rules?: RuleObject[];
} & RangePickerProps;

const CustomDatePicker: React.FC<DatePickerProps> = ({
  label,
  name,
  rules,
  ...rest
}) => {
  return (
    <div>
      <Form.Item
        className={style.inputWrapper}
        label={label}
        name={name}
        rules={rules}
      >
        <RangePicker
          picker="year"
          // name={name}
          // value={value}
          // onChange={onChange}
          {...rest}
        />
      </Form.Item>
    </div>
  );
};

export default CustomDatePicker;
