import type { RadioChangeEvent } from "antd";
import { Form, Radio } from "antd";
import React, { useState } from "react";
import CustomButton from "src/components/Button/CustomButton";
import CustomPassword from "src/components/Input-Password/CustomPassword";
import CustomInput from "src/components/Input/CustomInput";
import { setUser } from "src/store/actions/auth";
import { useReducerData, useStoreActions } from "src/store/hooks";
import style from "./Login.module.scss";

// type user = {
//   val?: number;
// };

const Login: React.FC = () => {
  // const initUser: user = {
  //   val: 1,
  // };
  const [selectUser, setSelectUser] = useState(1);
  const handleSelectUser = (e: RadioChangeEvent) => {
    setSelectUser(e.target.value);
  };
  const [authData, setAuthData] = useState({
    user_id: "",
    password: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAuthData({
      ...authData,
      [name]: value,
    });
  };

  const userData = useReducerData("auth", "user", "");
  const action = useStoreActions({ setUser });
  const handleSubmit = async () => {
    /* eslint-disable no-console */
    await action.setUser(authData);
    console.log("authdata:", authData, userData);
  };

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
            // onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <CustomInput
              label="Student_No / Student_id"
              name="user_id"
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
            />

            <CustomButton buttonText={"FORGOT PASSWORD"} type={"primary"} />
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
