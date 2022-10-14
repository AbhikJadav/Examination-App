import { Form } from "antd";
import React, { useState } from "react";
import CustomButton from "src/components/Button/CustomButton";
import CustomDatePicker from "src/components/DatePicker/CustomDatePicker";
import CustomDropDown from "src/components/DropDown/CustomDropDown";
import CustomEmail from "src/components/Input-Email/CustomEmail";
import CustomPassword from "src/components/Input-Password/CustomPassword";
import CustomInput from "src/components/Input/CustomInput";
import { doSignUp, setUserType } from "src/store/actions/auth";
import { useReducerData, useStoreActions } from "src/store/hooks";
import {
  BranchDropDownData,
  SemesterDropDownData,
  UserTypeDropDownData,
} from "./DropDownData";
import style from "./SignUp.module.scss";

const SignUp: React.FC = () => {
  const [form] = Form.useForm();
  const [userData, setUserData] = useState({
    user_type: "",
    name: "",
    admission: "",
    email: "",
    batch: "",
    mobileNo: 0,
    branch: "",
    semester: "",
    password: "",
    confirmPassword: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };
  const userAuthData = useReducerData("auth", "userData", "");

  const userDropDownChange = async (
    value: string & React.ChangeEvent<HTMLInputElement>
  ) => {
    setUserData({ ...userData, user_type: value });
  };

  const branchDropDownChange = (
    value: string & React.ChangeEvent<HTMLInputElement>
  ) => {
    setUserData({ ...userData, branch: value });
  };

  const SemesterDropDownChange = (
    value: string & React.ChangeEvent<HTMLInputElement>
  ) => {
    setUserData({ ...userData, semester: value });
  };

  const action = useStoreActions({ setUserType, doSignUp });
  const onSubmit = async () => {
    await action.setUserType(userData.user_type);
    await action.doSignUp(userData);

    setUserData({
      user_type: "",
      name: "",
      admission: "",
      email: "",
      batch: "",
      mobileNo: 0,
      branch: "",
      semester: "",
      password: "",
      confirmPassword: "",
    });
    form.resetFields();
  };
  /* eslint-disable no-console */
  console.log("userAuthData:", userAuthData);

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
            onFinish={onSubmit}
            autoComplete="off"
            form={form}
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
              value={userData.user_type}
              label="User_Type"
              rules={[{ required: true, message: "Please select User Type!" }]}
              dropDownData={UserTypeDropDownData}
              placeholder={"Select User Type"}
              onChange={userDropDownChange}
            />

            <CustomInput
              label="Full Name"
              name="name"
              value={userData.name}
              placeholder="Full Name"
              rules={[{ required: true, message: "Please input User Name!" }]}
              onChange={handleChange}
            />

            <CustomEmail
              name="email"
              label="E-mail"
              value={userData.email}
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
              onChange={handleChange}
            />

            <CustomInput
              label="Mobile No"
              name="mobileNo"
              value={userData.mobileNo}
              placeholder="Mobile No"
              rules={[
                //   if (!userData.mobileNo.match(digit)) {
                //   { required: true, message: "Contact Number Should Be In Digits!" },
                // }
                //   if (userData.mobileNo.length !== 10) {
                //  { required: true, message: "Contact Number Must Be 10 Digit.!" },
                // }
                { required: true, message: "Please input your Mobile No!" },
              ]}
              onChange={handleChange}
            />

            {userData.user_type === "Student" && (
              <>
                {/*<Form.Item*/}
                {/*  className={style.inputWrapper}*/}
                {/*  label={"Batch"}*/}
                {/*  name={"batch"}*/}
                {/*  rules={[*/}
                {/*    { required: true, message: "Please input your Mobile No!" },*/}
                {/*  ]}*/}
                {/*>*/}
                {/*  <RangePicker picker="year" />*/}
                {/*</Form.Item>*/}

                <CustomDatePicker
                  label={"Batch Year"}
                  name={"batch"}
                  rules={[
                    { required: true, message: "Please input your Mobile No!" },
                  ]}
                  placeholder={""}
                />

                <CustomInput
                  label="Batch"
                  name="batch"
                  value={userData.batch}
                  placeholder="Batch Year"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Batch Year!",
                    },
                  ]}
                  onChange={handleChange}
                />

                <CustomDropDown
                  name="branch"
                  value={userData.branch}
                  label="Branch"
                  rules={[{ required: true, message: "Please select Branch!" }]}
                  dropDownData={BranchDropDownData}
                  placeholder={"Select Your Branch"}
                  onChange={branchDropDownChange}
                />

                <CustomDropDown
                  name="semester"
                  value={userData.semester}
                  label="Semester"
                  rules={[
                    { required: true, message: "Please select Semester!" },
                  ]}
                  dropDownData={SemesterDropDownData}
                  placeholder={"Select Your Branch"}
                  onChange={SemesterDropDownChange}
                />
              </>
            )}

            <CustomPassword
              label={"Password"}
              name={"password"}
              value={userData.password}
              onChange={handleChange}
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
              placeholder="Please Enter 6-10 Digit Password"
            />

            {/*<Form.Item*/}
            {/*  name="confirm"*/}
            {/*  label="Confirm Password"*/}
            {/*  dependencies={["password"]}*/}
            {/*  hasFeedback*/}
            {/*  rules={[*/}
            {/*    {*/}
            {/*      required: true,*/}
            {/*      message: "Please confirm your password!",*/}
            {/*    },*/}
            {/*    ({ getFieldValue }) => ({*/}
            {/*      validator(_, value) {*/}
            {/*        if (!value || getFieldValue("password") === value) {*/}
            {/*          return Promise.resolve();*/}
            {/*        }*/}
            {/*        return Promise.reject(*/}
            {/*          new Error(*/}
            {/*            "The two passwords that you entered do not match!"*/}
            {/*          )*/}
            {/*        );*/}
            {/*      },*/}
            {/*    }),*/}
            {/*  ]}*/}
            {/*>*/}
            {/*  <Input.Password />*/}
            {/*</Form.Item>*/}

            <CustomPassword
              label={"Confirm Password"}
              name={"confirmPassword"}
              value={userData.confirmPassword}
              onChange={handleChange}
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
