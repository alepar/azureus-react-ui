import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { browserHistory, Router, Route, IndexRoute } from "react-router";
import { syncHistoryWithStore, routerMiddleware } from "react-router-redux";
import { Provider } from "react-redux";

import "./stylesheets/main.scss";
import App from "./components/App";
import Home from "./components/Home";
import UserEdit from "./components/UserEdit";
import NotFound from "./components/NotFound";
import { reducers } from "./reducers/index"

const users = [];
for (let i=1; i<18; i++) {
    users.push({
        id: i,
        username: "John " + i,
        job: "Some job " + i,
    });
}
const initial_state = {
    users: {
        list: users,
    },
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let middleware = applyMiddleware(routerMiddleware(browserHistory));
const store = createStore(reducers, initial_state, composeEnhancers(middleware));
const history = syncHistoryWithStore(browserHistory, store);

// render the main component
ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path={"/"} components={App}>
                <IndexRoute component={Home}/>
                <Route path={"user-edit(/:id)"} component={UserEdit}/>
                <Route path={"*"} component={NotFound}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);
