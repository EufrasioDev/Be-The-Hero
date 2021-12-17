import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Logon from "./pages/Logon";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import NewIncident from "./pages/NewIncident";
import HomeIncidents from "./pages/HomeIncidents";
import DetailIncident from "./pages/DetailIncident";
import EditIncident from "./pages/EditIncident";
import NotFound from "./pages/NotFound";

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/details/:pid" component={DetailIncident} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/incidents/new" component={NewIncident} />
                <Route exact path="/" component={Logon} />
                <Route exact path="/incidents/edit/:id" component={EditIncident} />                
                <Route exact path="/register" component={Register} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
}