import React from 'react';
import {Route, Switch} from "react-router";
import Home from "./components/Home";
import Company from './components/Company'

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/company" component={Company}/>
        </Switch>
    );
};

export default Routes;