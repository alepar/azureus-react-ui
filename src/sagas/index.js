import { takeLatest } from "redux-saga";
import { fork } from "redux-saga/effects";

import { usersFetchList, usersAdd, usersEdit, usersDelete } from "./users";

export function* sagas() {
    yield [
        fork(takeLatest, "users.saga.list", usersFetchList),
        fork(takeLatest, "users.saga.add", usersAdd),
        fork(takeLatest, "users.saga.edit", usersEdit),
        fork(takeLatest, "users.saga.delete", usersDelete),
    ]
}
