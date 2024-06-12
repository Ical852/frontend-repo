import { takeLatest, call, put } from "redux-saga/effects";
import { ReduxActionParams } from "../../types";
import { USER_UDPATE, USER_FETCH } from "./constants";
import { userApi } from "./apis";
import {
  userUpdateSuccess,
  userUpdateFailed,
  userFetchSuccess,
  userFetchFailed,
} from "./actions";

function* userUpdateSaga(action: ReduxActionParams): Generator {
  try {
    const response = yield call(userApi.userUpdate, action.payload);
    yield put(userUpdateSuccess(response));
  } catch (error) {
    yield put(userUpdateFailed(error));
  }
}

function* userFetchSaga(action: ReduxActionParams): Generator {
  try {
    const response = yield call(userApi.userFetch, action.payload);
    yield put(userFetchSuccess(response));
  } catch (error) {
    yield put(userFetchFailed(error));
  }
}

export function* userSaga() {
  yield takeLatest(USER_UDPATE, userUpdateSaga);
  yield takeLatest(USER_FETCH, userFetchSaga);
}
