import { Reducer } from "redux";

import { handleData } from "../middlewares/handleData";
import Types from "../types/auth";

const initialState = {
  userType: "",
  user: null,
  signupData: [],
};

const AuthReducer: Reducer = (state = initialState, action) => {
  const { type, payload } = action;
  /* eslint-disable no-console */

  // debugger; // eslint-disable-line no-debugger
  switch (type) {
    case Types.SET_USER_DATA:
      return handleData(state, action, {
        request: (prevState) => ({ ...prevState }),
        success: (prevState) => ({
          ...prevState,
          user: payload.user,
        }),
        failure: (prevState) => ({ ...prevState }),
      });
    case Types.SET_USER_TYPE:
      return handleData(state, action, {
        request: (prevState) => ({ ...prevState }),
        success: (prevState) => ({
          ...prevState,
          userType: payload.user_type,
        }),
        failure: (prevState) => ({ ...prevState }),
      });
    case Types.SIGNUP_SUCCESS: {
      /* eslint-disable no-console */

      const newArray = [...state.signupData, payload?.signup_data];
      return handleData(state, action, {
        request: (prevState) => ({ ...prevState }),
        success: (prevState) => ({
          ...prevState,
          signupData: newArray,
        }),
        failure: (prevState) => ({ ...prevState }),
      });
    }
    case Types.LOG_OUT_USER: {
      return {
        ...state,
        user: null,
      };
    }
    default:
      return state;
  }
};

export default AuthReducer;
