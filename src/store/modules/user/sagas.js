import { takeLatest, call, put, all } from "redux-saga/effects";

import { toast } from "react-toastify";
import api from "../../../services/api";

import { updateProfileSuccess, updateProfileFailure } from "./actions";

export function* updateProfile({ payload }) {
  try {
    const { name, occupation, cellNumber, country, state } = payload.data;

    yield call(api.put, "users", {
      name,
      occupation,
      cellNumber,
      country,
      state,
    });

    toast.success("Perfil Atualizado com sucesso!");

    yield put(updateProfileSuccess(payload.data));
  } catch (err) {
    toast.error("Erro ao atualizar perfil");
    yield put(updateProfileFailure());
  }
}

export default all([takeLatest("@user/UPDATE_PROFILE_REQUEST", updateProfile)]);
