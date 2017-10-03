import { call, put } from "redux-saga/effects";

import ApiUsers from "../api/users";

export function* usersFetchList(action) {
    const users = yield call(ApiUsers.getList);

    yield put({
        type: "users.fetchListSuccess",
        users: users,
    });
}
