import { Reducer } from "redux";

import { handleData } from "../middlewares/handleData";
import Types from "../types/auth";

const initialState = {
  userType: "",
  user: null,
  userData: [],
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
    case Types.SIGNUP_SUCCESS:
      // const teampData = state.userData.push(payload?.user_data);
      return handleData(state, action, {
        request: (prevState) => ({ ...prevState }),
        success: (prevState) => ({
          ...prevState,
          userData: state.userData.push(payload?.user_data),
        }),
        failure: (prevState) => ({ ...prevState }),
      });
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
