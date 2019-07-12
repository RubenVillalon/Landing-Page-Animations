import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Home from './components/Home';
import Provider from "react-redux";




ReactDOM.render(
    <Provider store={store}>
        <Home />
    </Provider>

    , document.getElementById("root"));

