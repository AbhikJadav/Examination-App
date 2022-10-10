import { Reducer } from "redux";

import { handleData } from "../middlewares/handleData";
import Types from "../types/auth";

const initialState = {
  user: null,
};

const AuthReducer: Reducer = (state = initialState, action) => {
  const { type, payload } = action;

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
