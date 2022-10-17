import { Dispatch } from "redux";

import { SignupData } from "src/pages/Auth/SignUp/Type";
import Types from "../types/auth";

interface User {
  email?: string;
  password?: string;
}

export const setUser = (user: User) => (dispatch: Dispatch) => {
  dispatch({
    payload: user,
    type: Types.SET_USER_DATA,
    asyncCall: () => {
      return new Promise((resolve) => {
        resolve({ status: 1, user });
      });
    },
    onSuccess: () => {},
  });
};

export const setUserType = (user_type: string) => (dispatch: Dispatch) => {
  dispatch({
    payload: user_type,
    type: Types.SET_USER_TYPE,
    asyncCall: () => {
      return new Promise((resolve) => {
        resolve({ status: 1, user_type });
      });
    },
    onSuccess: () => {},
  });
};

export const doSignUp = (signup_data: SignupData) => (dispatch: Dispatch) => {
  dispatch({
    payload: signup_data,
    type: Types.SIGNUP_SUCCESS,
    asyncCall: () => {
      return new Promise((resolve) => {
        resolve({ status: 1, signup_data });
      });
    },
    onSuccess: () => {},
  });
};

export const logOutUser = () => (dispatch: Dispatch) => {
  dispatch({
    type: Types.LOG_OUT_USER,
  });
};
