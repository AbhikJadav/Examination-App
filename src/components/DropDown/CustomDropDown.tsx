import { Form, Select } from "antd";
import { RuleObject } from "antd/lib/form";
import React, { InputHTMLAttributes } from "react";
import style from "../Input/CustomInput.module.scss";
const { Option } = Select;
type DropDownObj = {
  key: number;
  label: string;
};
type DropDownProps = {
  label?: string;
  name?: string;
  value?: string;
  rules?: RuleObject[];
  dropDownData: DropDownObj[];
  placeholder?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const CustomDropDown: React.FC<DropDownProps> = ({
  label,
  name,
  rules,
  onChange,
  dropDownData,
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
        <Select
          placeholder={placeholder}
          style={{ width: "80%", textAlign: "left" }}
          allowClear
          optionFilterProp="children"
          onChange={onChange}
          // filterOption={(input, option) =>
          //   option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          // }
          // filterSort={(optionA, optionB) =>
          //   optionA.children
          //     .toLowerCase()
          //     .localeCompare(optionB.children.toLowerCase())
          // }
        >
          {dropDownData?.map((element, index) => {
            return (
              <Option value={element.label} key={index}>
                {element.label}
              </Option>
            );
          })}
        </Select>
      </Form.Item>
    </div>
  );
};

export default CustomDropDown;
