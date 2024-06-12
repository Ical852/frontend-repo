import * as CONST from "./constants";

export const userUpdate = (payload: any) => {
  return {
    type: CONST.USER_UDPATE,
    payload,
  };
};
export const userUpdateSuccess = (payload: any) => {
  return {
    type: CONST.USER_UDPATE_SUCCESS,
    payload,
  };
};
export const userUpdateFailed = (payload: any) => {
  return {
    type: CONST.USER_UDPATE_FAILED,
    payload,
  };
};
export const userUpdateReset = () => {
  return {
    type: CONST.USER_UDPATE_RESET,
  };
};

export const userFetch = (payload: any) => {
  return {
    type: CONST.USER_FETCH,
    payload,
  };
};
export const userFetchSuccess = (payload: any) => {
  return {
    type: CONST.USER_FETCH_SUCCESS,
    payload,
  };
};
export const userFetchFailed = (payload: any) => {
  return {
    type: CONST.USER_FETCH_FAILED,
    payload,
  };
};
export const userFetchReset = () => {
  return {
    type: CONST.USER_FETCH_RESET,
  };
};
