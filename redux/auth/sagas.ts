import { takeLatest, call, put } from "redux-saga/effects";
import { ReduxActionParams } from "../../types";
import { SIGN_IN, SIGN_OUT, SIGN_UP } from "./constants";
import { authApi } from "./apis";
import {
  signInSuccess,
  signInFailed,
  signUpSuccess,
  signUpFailed,
  signOutSuccess,
  signOutFailed,
} from "./actions";

function* signInSaga(action: ReduxActionParams): Generator {
  try {
    const response = yield call(authApi.signIn, action.payload);
    yield put(signInSuccess(response));
  } catch (error) {
    yield put(signInFailed(error));
  }
}

function* signUpSaga(action: ReduxActionParams): Generator {
  try {
    const response = yield call(authApi.signUp, action.payload);
    yield put(signUpSuccess(response));
  } catch (error) {
    yield put(signUpFailed(error));
  }
}

function* signOutSaga(action: ReduxActionParams): Generator {
  try {
    const response = yield call(authApi.signOut, action.payload);
    yield put(signOutSuccess(response));
  } catch (error) {
    yield put(signOutFailed(error));
  }
}

export function* authSaga() {
  yield takeLatest(SIGN_IN, signInSaga);
  yield takeLatest(SIGN_UP, signUpSaga);
  yield takeLatest(SIGN_OUT, signOutSaga);
}
