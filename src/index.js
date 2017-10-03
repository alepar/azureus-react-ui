import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { browserHistory, Router, Route, IndexRoute } from "react-router";
import { syncHistoryWithStore, routerMiddleware } from "react-router-redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";

import "./stylesheets/main.scss";
import App from "./components/App";
import Home from "./components/Home";
import UserEdit from "./components/UserEdit";
import NotFound from "./components/NotFound";
import { reducers } from "./reducers/index"
import { sagas } from "./sagas/index";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const middleware = applyMiddleware(routerMiddleware(browserHistory), sagaMiddleware);
const store = createStore(reducers, composeEnhancers(middleware));
const history = syncHistoryWithStore(browserHistory, store);
sagaMiddleware.run(sagas);

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
