import * as React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";
import Home from "@src/pages/home";
import {Creation} from "@src/pages/account/creation";
import {Demo} from "@src/pages/demo";

export function Routing(props: any) {
    return <Router>
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route path="/account/creation">
                <Creation />
            </Route>
            <Route path="/demo">
                <Demo />
            </Route>
        </Switch>
    </Router>
}