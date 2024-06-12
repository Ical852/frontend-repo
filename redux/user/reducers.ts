import * as CONST from "./constants";
import * as STATE from "./initialStates";
import { ReduxActionParams } from "../../types";

const userInitialStates = {
  ...STATE.userInitialStates,
  action: "",
};

export const userReducers = (
  state = userInitialStates,
  action: ReduxActionParams
) => {
  const { payload, type } = action;
  const actions: any = {
    // USER_UDPATE
    [CONST.USER_UDPATE]: () => ({
      ...state,
      userUpdateLoading: true,
      userUpdateError: false,
      userUpdateResponse: {},
      action: type,
    }),
    [CONST.USER_UDPATE_SUCCESS]: () => ({
      ...state,
      userUpdateLoading: false,
      userUpdateError: false,
      userUpdateResponse: payload,
      action: type,
    }),
    [CONST.USER_UDPATE_FAILED]: () => ({
      ...state,
      userUpdateLoading: false,
      userUpdateError: true,
      userUpdateResponse: payload,
      action: type,
    }),
    [CONST.USER_UDPATE_RESET]: () => ({
      ...state,
      userUpdateLoading: false,
      userUpdateError: false,
      userUpdateResponse: {},
      action: type,
    }),
    // USER_UDPATE

    // USER_FETCH
    [CONST.USER_FETCH]: () => ({
      ...state,
      userFetchLoading: true,
      userFetchError: false,
      userFetchResponse: {},
      action: type,
    }),
    [CONST.USER_FETCH_SUCCESS]: () => ({
      ...state,
      userFetchLoading: false,
      userFetchError: false,
      userFetchResponse: payload,
      action: type,
    }),
    [CONST.USER_FETCH_FAILED]: () => ({
      ...state,
      userFetchLoading: false,
      userFetchError: true,
      userFetchResponse: payload,
      action: type,
    }),
    [CONST.USER_FETCH_RESET]: () => ({
      ...state,
      userFetchLoading: false,
      userFetchError: false,
      userFetchResponse: {},
      action: type,
    }),
    // USER_FETCH

    DEFAULT: () => state,
  };

  return (actions[type] || actions.DEFAULT)();
};
