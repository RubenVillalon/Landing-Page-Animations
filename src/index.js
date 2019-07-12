import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Home from './components/Home';
import {Provider} from "react-redux";
import store from "./store";
import {BrowserRouter} from "react-router-dom";
import {Switch} from "react-router";
import Routes from "./Routes";


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes/>
        </BrowserRouter>

    </Provider>

    , document.getElementById("root"));

