import { Form, notification } from "antd";
import { RangePickerProps } from "antd/lib/date-picker";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "src/components/Button/CustomButton";
import CustomDatePicker from "src/components/DatePicker/CustomDatePicker";
import CustomDropDown from "src/components/DropDown/CustomDropDown";
import CustomEmail from "src/components/Input-Email/CustomEmail";
import CustomPassword from "src/components/Input-Password/CustomPassword";
import CustomInput from "src/components/Input/CustomInput";
import { validatePassword } from "src/helpers/constant";
import { doSignUp, setUserType } from "src/store/actions/auth";
import { useReducerData, useStoreActions } from "src/store/hooks";
import {
  BranchDropDownData,
  SemesterDropDownData,
  UserTypeDropDownData,
} from "./DropDownData";
import style from "./SignUp.module.scss";
import { SignupData } from "./Type";
// eslint-disable-next-line no-use-before-define

const SignUp: React.FC = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const initialValue = {
    user_type: "",
    name: "",
    admission: 0,
    email: "",
    batch: "",
    mobileNo: 0,
    branch: "",
    semester: "",
    password: "",
    confirmPassword: "",
  };
  const [userData, setUserData] = useState(initialValue);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };
  // const handleDateChange = (
  //   value: string & React.ChangeEvent<HTMLInputElement>
  // ) => {
  //   setUserData({
  //     ...userData,
  //     batch: value,
  //   });
  // };

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
  const signupData = useReducerData("auth", "signupData", "");
  const onSubmit = async () => {
    const findData = signupData?.find((elements: SignupData) => {
      return (
        elements.user_type === userData.user_type &&
        elements.email === userData.email &&
        elements.password === userData.password
      );
    });
    if (!findData) {
      setLoading(true);
      const uniqId = new Date().getTime();
      const payload = { ...userData, admission: uniqId };
      await action.setUserType(userData.user_type);
      await action.doSignUp(payload);

      setUserData(initialValue);
      setLoading(false);
      navigate("/login");
      form.resetFields();
    } else {
      setLoading(true);
      notification["error"]({
        message: "This User Is Already Exists",
      });
      setUserData(initialValue);
      setLoading(false);
      form.resetFields();
    }
  };
  /* eslint-disable no-console */
  const rangeOnChange: RangePickerProps["onChange"] = (dates, dateStrings) => {
    // console.log("from: ", dates[0], ", to: ", dates[1]);
    const batchYear = dateStrings[0] + "-" + dateStrings[1];
    setUserData({ ...userData, batch: batchYear });
    // console.log("from: ", );
  };
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
              formName="name"
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
              formName="mobileNo"
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
                <CustomDatePicker
                  label={"Batch Year"}
                  name={"batch"}
                  // value={userData.batch}
                  onChange={rangeOnChange}
                  rules={[
                    {
                      required: true,
                      message: "Please Select the Batch Year!",
                    },
                  ]}
                />

                {/*<CustomInput*/}
                {/*  label="Batch"*/}
                {/*  name="batch"*/}
                {/*  value={userData.batch}*/}
                {/*  placeholder="Batch Year"*/}
                {/*  rules={[*/}
                {/*    {*/}
                {/*      required: true,*/}
                {/*      message: "Please input your Batch Year!",*/}
                {/*    },*/}
                {/*  ]}*/}
                {/*  onChange={handleChange}*/}
                {/*/>*/}

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
                ({ getFieldValue }) => ({
                  validator() {
                    if (!validatePassword(getFieldValue("password"))) {
                      if (!getFieldValue("password")) {
                        return Promise.reject(
                          new Error("Please enter password")
                        );
                      }
                      return Promise.reject(
                        new Error("Please enter strong password")
                      );
                    }
                    return Promise.resolve();
                  },
                }),
              ]}
              placeholder="Please Enter 6-10 Digit Password"
            />

            <CustomPassword
              label={"Confirm Password"}
              name={"confirmPassword"}
              value={userData.confirmPassword}
              onChange={handleChange}
              rules={[
                {
                  required: true,
                  message: "Please enter confirm password",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error("confirm password does not match with password")
                    );
                  },
                }),
              ]}
              placeholder="Please Enter 6-10 Digit Password"
            />
            <CustomButton
              buttonText={"SUBMIT"}
              type={"primary"}
              htmlType="submit"
              loading={loading}
            />
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
