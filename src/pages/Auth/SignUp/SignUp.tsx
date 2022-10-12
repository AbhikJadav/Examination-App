import { Form } from "antd";
import React from "react";
import CustomButton from "src/components/Button/CustomButton";
import CustomDropDown from "src/components/DropDown/CustomDropDown";
import CustomEmail from "src/components/Input-Email/CustomEmail";
import CustomPassword from "src/components/Input-Password/CustomPassword";
import CustomInput from "src/components/Input/CustomInput";
import { DropDownData } from "./DropDownData";
import style from "./SignUp.module.scss";

const SignUp: React.FC = () => {
  return (
    <div className={style.mainContainer}>
      <div className={style.authHeader}>
        <p>Sign Up</p>
      </div>
      <div className={style.boxContainer}>
        <div className={style.formContainer}>
          <Form
            name="basic"
            layout="vertical"
            initialValues={{ remember: true }}
            // onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <CustomInput
              label="User_No / User_id"
              name="user_id"
              // value={authData.user_id}
              placeholder="User_id"
              rules={[
                { required: true, message: "Please input your User Id!" },
              ]}
              // onChange={handleChange}
            />

            <CustomDropDown
              name="user_type"
              label="User_Type"
              rules={[{ required: true, message: "Please select User Type!" }]}
              dropDownData={DropDownData}
              placeholder={"Please Select User Type"}
            />

            <CustomInput
              label="Full Name"
              name="fname"
              // value={authData.user_id}
              placeholder="Full Name"
              rules={[{ required: true, message: "Please input User Name!" }]}
              // onChange={handleChange}
            />

            <CustomEmail
              name="email"
              label="E-mail"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
                {
                  required: true,
                  message: "Please input your E-mail!",
                },
              ]}
              placeholder="Email"
            />

            <CustomPassword
              label={"Password"}
              name={"password"}
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
              placeholder="Please Enter 6-10 Digit Password"
            />

            <CustomPassword
              label={"Confirm Password"}
              name={"confirmPassword"}
              rules={[
                {
                  required: true,
                  message: "Please input your confirm password!",
                },
              ]}
              placeholder="Please Enter 6-10 Digit Password"
            />
            <CustomButton
              buttonText={"SUBMIT"}
              type={"primary"}
              htmlType="submit"
            />
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
