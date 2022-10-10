import { Dispatch } from "redux";

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

export const logOutUser = () => (dispatch: Dispatch) => {
  dispatch({
    type: Types.LOG_OUT_USER,
  });
};
