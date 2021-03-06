import AboutPage from "../presentation/pages/about/about.page";
import HomePage from "../presentation/pages/home/home.page";
import NotFoundPage from "../presentation/pages/not-found/not-found.page";
import React from "react";
import { Route, Switch } from "react-router-dom";


const AppRoutingContent: React.FC<any>   = () => (
    <main className="ContentComponent">
        <Switch>
            <Route exact path="/">
                <HomePage />
            </Route>
            <Route path="/about">
                <AboutPage />
            </Route>
            <Route path="/*">
                <NotFoundPage />
            </Route>
        </Switch>
    </main>
);

export default AppRoutingContent;