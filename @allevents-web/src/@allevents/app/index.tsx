import React from "react";
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router";
import { MuiThemeProvider } from '@material-ui/core/styles';
import muiTheme from "@allevents/mui-theme";
import LandingPage from "landing-page";
import BookEvent from "book-event";
import ScrollToTop from "@allevents/utils/scrollToTop";
import AuthPage from "auth";

const AllEvents = () => {
    return (
        <MuiThemeProvider theme={muiTheme}>
            <BrowserRouter>
                <ScrollToTop/>
                <Switch>
                    <Route path={"/auth"} component={AuthPage}/>
                    <Route path={"/event/book"} component={BookEvent}/>
                    <Route path={"/"} component={LandingPage}/>
                </Switch>
            </BrowserRouter>
        </MuiThemeProvider>
    )
}

export default AllEvents;