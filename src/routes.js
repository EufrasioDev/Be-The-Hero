import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Logon from "./pages/Logon";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import NewIncident from "./pages/NewIncident";
import HomeIncidents from "./pages/HomeIncidents";
import DetailIncident from "./pages/DetailIncident";
import EditIncident from "./pages/EditIncident";

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={HomeIncidents} />
                <Route path="/details/:pid" component={DetailIncident} />
                <Route path="/profile" component={Profile} />
                
                <Route path="/incidents/new" component={NewIncident} />
                <Route path="/logon" component={Logon} />
                <Route path="/incidents/edit/:id" component={EditIncident} />                
                <Route  path="/register" component={Register} />
            </Switch>
        </BrowserRouter>
    );
}