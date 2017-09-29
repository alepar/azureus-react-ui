import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import "./stylesheets/main.scss";
import App from "./components/App";
import { reducers } from "./reducers/index"

const users = [];
for (let i=1; i<10; i++) {
    users.push({
        id: i,
        username: "John " + i,
        job: "Some job " + i,
    });
}
const initial_state = {
    users: users,
};
const store = createStore(reducers, initial_state);

// render the main component
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app')
);
