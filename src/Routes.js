import React from "react";

// Router
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";

// Pages
import Chats from './js/components/Chats/Chats';
import Home from "./js/components/Home/Home";
import Profile from "./js/components/Profile/Profile";
import Gists from "./js/components/Gists/Gists";

// Header
import Breadcrumbs from '@material-ui/core/Breadcrumbs';

export default function Routes() {
    return (
        <BrowserRouter>
            <Breadcrumbs aria-label="breadcrumb">
                <Link to="/">Home</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/chats">Chats</Link>
                <Link to="/gists">Gists</Link>
            </Breadcrumbs>

            <Switch>

                <Route exact path="/">
                    <Home />
                </Route>

                <Route path="/profile">
                    <Profile />
                </Route>

                <Route path="/chats/:chatId?">
                    <Chats />
                </Route>

                <Route path="/gists">
                    <Gists />
                </Route>

            </Switch>

        </BrowserRouter>
    );
}