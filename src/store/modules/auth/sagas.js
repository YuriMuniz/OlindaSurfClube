import { takeLatest, call, put, all } from "redux-saga/effects";

import { toast } from "react-toastify";

import firebase from "firebase";
import { signInSuccess, signFailure, signUpSuccess } from "./actions";

import history from "../../../services/history";

import api from "../../../services/api";

export function* signIn({ payload }) {
  // try {
  //   const { email, password } = payload;
  //   const response = yield call(api.post, "sessions", {
  //     email,
  //     password,
  //   });
  //   const { token, user } = response.data;
  //   api.defaults.headers.Authorization = `Bearer ${token}`;
  //   yield put(signInSuccess(token, user));
  //   history.push("/");
  // } catch (err) {
  //   toast.error("Falha na autenticação, verifique seus dados");
  //   yield put(signFailure());
  // }

  try {
    const { email, password } = payload;
    const userCredential = yield firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    console.log(userCredential);
    const { user } = userCredential;
    const { refreshToken } = user;

    // put(signInSuccess(token, user));
    yield put(signInSuccess(refreshToken, user));
    history.push("/admin");
  } catch (err) {
    toast.error("Falha na autenticação, verifique seus dados");
    yield put(signFailure());
  }

  // yield firebase
  //   .auth()
  //   .signInWithEmailAndPassword(email, password)
  //   .then((userCredential) => {
  //     console.log(userCredential);
  //     const { user } = userCredential;
  //     const { refreshToken } = user;

  //     // put(signInSuccess(token, user));
  //     yield  put(signInSuccess(refreshToken, user));
  //   })
  //   .catch((error) => {
  //     yield put(signFailure());
  //     toast.error("Falha na autenticação, verifique seus dados");
  //     console.log(error);
  //   });
}

export function* signUp({ payload }) {
  try {
    const {
      name,
      email,
      occupation,
      cellNumber,
      country,
      state,
      password,
    } = payload;

    yield call(api.post, "users", {
      name,
      email,
      occupation,
      cellNumber,
      country,
      state,
      password,
    });

    yield put(signUpSuccess());

    history.push("/");
  } catch (err) {
    toast.error("Falha no cadastro, verifique os dados e tente novamente.");
    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function signOut() {
  history.push("/");
  toast.success("Logout realizado.");
}

export default all([
  takeLatest("persist/REHYDRATE", setToken),
  takeLatest("@auth/SIGN_IN_REQUEST", signIn),
  takeLatest("@auth/SIGN_UP_REQUEST", signUp),
  takeLatest("@auth/SIGN_OUT", signOut),
]);
