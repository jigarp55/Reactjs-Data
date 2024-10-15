import { call, put, takeLatest } from 'redux-saga/effects';
import { addUserRequest, addUserSuccess, addUserFailure } from '../slice/userSlicee';

function* addUserSaga(action) {
  try {
    const response = yield call(apiAddUser, action.payload); // Replace with actual API call
    yield put(addUserSuccess(response.data));
  } catch (error) {
    yield put(addUserFailure(error.message));
  }
}

export default function* userSaga() {
  yield takeLatest(addUserRequest.type, addUserSaga);
}
