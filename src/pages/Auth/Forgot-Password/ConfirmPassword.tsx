import { Form } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "src/components/Button/CustomButton";
import CustomPassword from "src/components/Input-Password/CustomPassword";
import { validatePassword } from "src/helpers/constant";
import { useReducerData } from "src/store/hooks";
import style from "./ForgotPassword.module.scss";

const ConfirmPassword = () => {
  /* eslint-disable no-console */
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const initialValue = {
    password: 0,
    confirmPassword: "",
  };
  const [passwordData, setPasswordData] = useState(initialValue);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswordData({
      ...passwordData,
      [name]: value,
    });
  };

  const signupData = useReducerData("auth", "signupData", "");
  console.log("signupdata:", signupData);
  const handleSubmit = async () => {
    setLoading(false);
    console.log("hii");
    form.resetFields();
  };
  return (
    <div className={style.mainContainer}>
      <div className={style.authHeader}>
        <p>Forgot Password</p>
      </div>
      <div className={style.boxContainer}>
        <div className={style.userTypeWrapper}>
          <div className={style.headingContainer}>Confirm Password</div>
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
            <CustomPassword
              label={"Password"}
              name={"password"}
              value={passwordData.password}
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
              placeholder="Enter Password"
            />

            <CustomPassword
              label={"Confirm Password"}
              name={"confirmPassword"}
              value={passwordData.confirmPassword}
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
              placeholder="Enter Confirm Password"
            />

            <CustomButton
              buttonText={"Forgot Password"}
              type={"primary"}
              htmlType="submit"
              loading={loading}
            />

            <CustomButton
              buttonText={"Back To Login"}
              type={"primary"}
              onClick={() => {
                navigate("/login");
              }}
            />
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ConfirmPassword;
