import type { RadioChangeEvent } from "antd";
import { Form, Radio, notification } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "src/components/Button/CustomButton";
import CustomPassword from "src/components/Input-Password/CustomPassword";
import CustomInput from "src/components/Input/CustomInput";
import { setUser } from "src/store/actions/auth";
import { useReducerData, useStoreActions } from "src/store/hooks";
import { SignupData } from "../SignUp/Type";
import style from "./Login.module.scss";

const Login: React.FC = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [selectUser, setSelectUser] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleSelectUser = (e: RadioChangeEvent) => {
    setSelectUser(e.target.value);
  };
  const initialValue = {
    user_id: 0,
    password: "",
  };
  const [authData, setAuthData] = useState(initialValue);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAuthData({
      ...authData,
      [name]: value,
    });
  };

  const signupData = useReducerData("auth", "signupData", "");
  const action = useStoreActions({ setUser });
  const handleSubmit = async () => {
    /* eslint-disable no-console */
    const findData = signupData?.find((elements: SignupData) => {
      return (
        elements.admission === +authData.user_id &&
        elements.password === authData.password
      );
    });

    if (findData) {
      setLoading(true);
      await action.setUser(authData);
      localStorage.setItem("userData", JSON.stringify(findData));
      setAuthData(initialValue);
      form.resetFields();
      setLoading(false);
      navigate("/user-profile");
    } else {
      setLoading(true);
      notification["error"]({
        message: "This User Is Not Exists",
      });
      setAuthData(initialValue);
      setLoading(false);
      form.resetFields();
    }
  };
  /* eslint-disable no-console */
  console.log("signupData:", signupData);
  return (
    <div className={style.mainContainer}>
      <div className={style.authHeader}>
        <p>Log In</p>
      </div>
      <div className={style.boxContainer}>
        <div className={style.userTypeWrapper}>
          <div className={style.headingContainer}>User Type</div>
          <Radio.Group
            onChange={handleSelectUser}
            value={selectUser}
            className={style.radioBtnContainer}
          >
            <Radio value={1}>Student</Radio>
            <Radio value={2}>Faculty</Radio>
            <Radio value={3}>Admin</Radio>
          </Radio.Group>
        </div>

        <hr />

        <div className={style.formContainer}>
          <Form
            name="basic"
            onFinish={handleSubmit}
            layout="vertical"
            initialValues={{ remember: true }}
            autoComplete="off"
            form={form}
          >
            <CustomInput
              label="Student_No / Student_id"
              formName={"user_id"}
              value={authData.user_id}
              placeholder="User_id"
              rules={[
                { required: true, message: "Please input your User Id!" },
              ]}
              onChange={handleChange}
            />

            <CustomPassword
              label={"Password"}
              name={"password"}
              value={authData.password}
              onChange={handleChange}
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
              placeholder="Please Enter 6-10 Digit Password"
            />

            <CustomButton
              buttonText={"SUBMIT"}
              type={"primary"}
              htmlType="submit"
              loading={loading}
            />

            <CustomButton buttonText={"FORGOT PASSWORD"} type={"primary"} />
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
