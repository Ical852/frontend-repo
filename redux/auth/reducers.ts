import * as CONST from "./constants";
import * as STATE from "./initialStates";
import { ReduxActionParams } from "../../types";

const authInitialStates = {
  ...STATE.authInitialStates,
  action: "",
};

export const authReducers = (
  state = authInitialStates,
  action: ReduxActionParams
) => {
  const { payload, type } = action;
  const actions: any = {
    // SIGN_UP
    [CONST.SIGN_UP]: () => ({
      ...state,
      signUpLoading: true,
      signUpError: false,
      signUpResponse: {},
      action: type,
    }),
    [CONST.SIGN_UP_SUCCESS]: () => ({
      ...state,
      signUpLoading: false,
      signUpError: false,
      signUpResponse: payload,
      action: type,
    }),
    [CONST.SIGN_UP_FAILED]: () => ({
      ...state,
      signUpLoading: false,
      signUpError: true,
      signUpResponse: payload,
      action: type,
    }),
    [CONST.SIGN_UP_RESET]: () => ({
      ...state,
      signUpLoading: false,
      signUpError: false,
      signUpResponse: {},
      action: type,
    }),
    // SIGN_UP

    // SIGN_IN
    [CONST.SIGN_IN]: () => ({
      ...state,
      signInLoading: true,
      signInError: false,
      signInResponse: {},
      action: type,
    }),
    [CONST.SIGN_IN_SUCCESS]: () => ({
      ...state,
      signInLoading: false,
      signInError: false,
      signInResponse: payload,
      action: type,
    }),
    [CONST.SIGN_IN_FAILED]: () => ({
      ...state,
      signInLoading: false,
      signInError: true,
      signInResponse: payload,
      action: type,
    }),
    [CONST.SIGN_IN_RESET]: () => ({
      ...state,
      signInLoading: false,
      signInError: false,
      signInResponse: {},
      action: type,
    }),
    // SIGN_IN

    // SIGN_OUT
    [CONST.SIGN_OUT]: () => ({
      ...state,
      signOutLoading: true,
      signOutError: false,
      signOutResponse: {},
      action: type,
    }),
    [CONST.SIGN_OUT_SUCCESS]: () => ({
      ...state,
      signOutLoading: false,
      signOutError: false,
      signOutResponse: payload,
      action: type,
    }),
    [CONST.SIGN_OUT_FAILED]: () => ({
      ...state,
      signOutLoading: false,
      signOutError: true,
      signOutResponse: payload,
      action: type,
    }),
    [CONST.SIGN_OUT_RESET]: () => ({
      ...state,
      signOutLoading: false,
      signOutError: false,
      signOutResponse: {},
      action: type,
    }),
    // SIGN_OUT

    // SESSION
    [CONST.SET_SESSION]: () => ({
      ...state,
      session: payload,
      action: type,
    }),
    [CONST.RESET_SESSION]: () => ({
      ...state,
      session: {},
      action: type,
    }),
    // SESSION

    DEFAULT: () => state,
  };

  return (actions[type] || actions.DEFAULT)();
};
