import React from "react";
import { Route, Switch } from "react-router-dom"
import Home from "../views/Home"
import About from "../views/About"
import Explore from "../views/Explore"
import Detail from "../views/Detail";
import NotFound from "../views/NotFound";
import FindIntern from "../views/FindIntern";

const Routes = () => {
    return (
        <React.Fragment>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" exact component={About} />
                <Route path="/explore" exact component={Explore} />
                <Route path="/findintern" exact component={FindIntern} />
                <Route path="/detail/:id" exact component={Detail} />
                <Route component={NotFound} />
            </Switch>
        </React.Fragment>
    )
}
export default Routes;