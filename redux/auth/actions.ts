import * as CONST from "./constants";

export const signUp = (payload: any) => {
  return {
    type: CONST.SIGN_UP,
    payload,
  };
};
export const signUpSuccess = (payload: any) => {
  return {
    type: CONST.SIGN_UP_SUCCESS,
    payload,
  };
};
export const signUpFailed = (payload: any) => {
  return {
    type: CONST.SIGN_UP_FAILED,
    payload,
  };
};
export const signUpReset = () => {
  return {
    type: CONST.SIGN_UP_RESET,
  };
};

export const signIn = (payload: any) => {
  return {
    type: CONST.SIGN_IN,
    payload,
  };
};
export const signInSuccess = (payload: any) => {
  return {
    type: CONST.SIGN_IN_SUCCESS,
    payload,
  };
};
export const signInFailed = (payload: any) => {
  return {
    type: CONST.SIGN_IN_FAILED,
    payload,
  };
};
export const signInReset = () => {
  return {
    type: CONST.SIGN_IN_RESET,
  };
};

export const signOut = (payload: any) => {
  return {
    type: CONST.SIGN_OUT,
    payload,
  };
};
export const signOutSuccess = (payload: any) => {
  return {
    type: CONST.SIGN_OUT_SUCCESS,
    payload,
  };
};
export const signOutFailed = (payload: any) => {
  return {
    type: CONST.SIGN_OUT_FAILED,
    payload,
  };
};
export const signOutReset = () => {
  return {
    type: CONST.SIGN_OUT,
  };
};

export const setSession = (payload: any) => {
  return {
    type: CONST.SET_SESSION,
    payload,
  };
};
export const resetSession = () => {
  return {
    type: CONST.RESET_SESSION,
  };
};
