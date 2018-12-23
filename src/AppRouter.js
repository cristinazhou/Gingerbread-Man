import React from "react";
import Home from "./Home";
import Content from "./Content";
import App from "./App"

import {HashRouter, Route, Switch} from 'react-router-dom';
const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route exact path="/detail" component={Content}/>
        </Switch>
    </HashRouter>
);

export default BasicRoute;