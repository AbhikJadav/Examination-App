import { Dispatch } from "redux";

import Types from "../types/auth";

interface User {
  email?: string;
  password?: string;
}
interface UserData {
  user_type?: string;
  name?: string;
  admission?: string;
  email?: string;
  batch?: string;
  mobileNo?: number;
  branch?: string;
  semester?: string;
  password?: string;
  confirmPassword?: string;
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

export const doSignUp = (user_data: UserData) => (dispatch: Dispatch) => {
  dispatch({
    payload: user_data,
    type: Types.SIGNUP_SUCCESS,
    asyncCall: () => {
      return new Promise((resolve) => {
        resolve({ status: 1, user_data });
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
