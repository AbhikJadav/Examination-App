import { Form, notification } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "src/components/Button/CustomButton";
// import CustomPassword from "src/components/Input-Password/CustomPassword";
import CustomEmail from "src/components/Input-Email/CustomEmail";
import { useReducerData } from "src/store/hooks";
import { SignupData } from "../SignUp/Type";
import style from "./ForgotPassword.module.scss";

interface Props {
  isDisplayNext: boolean;
  setIsDisplayNext: (e: boolean) => void;
}

const ConfirmEmail: React.FC<Props> = ({ isDisplayNext, setIsDisplayNext }) => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  /* eslint-disable no-console */
  const signupData = useReducerData("auth", "signupData", "");
  const initialValue = {
    email: "",
  };
  const [emailData, setEmailData] = useState(initialValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEmailData({
      ...emailData,
      [name]: value,
    });
  };
  const handleSubmit = async () => {
    setLoading(true);
    const findEmail = signupData.find(
      (element: SignupData) => element.email === emailData.email
    );
    if (findEmail) {
      setEmailData(initialValue);
      form.resetFields();
      setIsDisplayNext(true);
      setLoading(false);
    } else {
      setLoading(false);
      notification["error"]({
        message: "The User With This Email Is Not Exists",
      });
      setIsDisplayNext(isDisplayNext);
    }
  };

  return (
    <div className={style.mainContainer}>
      <div className={style.authHeader}>
        <p>Forgot Password</p>
      </div>
      <div className={style.boxContainer}>
        <div className={style.userTypeWrapper}>
          <div className={style.headingContainer}>Confirm Email</div>
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
            <CustomEmail
              name="email"
              label="E-mail"
              value={emailData.email}
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

            <CustomButton
              buttonText={"SUBMIT"}
              type={"primary"}
              htmlType="submit"
              loading={loading}
            />

            <CustomButton
              buttonText={"BACK TO LOGIN"}
              type={"primary"}
              onClick={() => {
                navigate("/forgot-password");
              }}
            />
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ConfirmEmail;
