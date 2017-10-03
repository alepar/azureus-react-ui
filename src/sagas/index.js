import { takeLatest } from "redux-saga";
import { fork } from "redux-saga/effects";

import { usersFetchList } from "./users";

export function* sagas() {
    yield [
        fork(takeLatest, "users.fetchList", usersFetchList),
    ]
}
