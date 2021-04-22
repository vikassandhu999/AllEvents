import React from "react";
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router";
import { MuiThemeProvider } from '@material-ui/core/styles';
import muiTheme from "@allevents/infra/mui-theme";
import LandingPage from "landing-page";
import BookEvent from "book-event";
import ScrollToTop from "@allevents/utils/scrollToTop";
import AuthPage from "auth";
import ExploreEventsPage from "explore-events";

const AllEvents = () => {
    return (
        <MuiThemeProvider theme={muiTheme}>
            <BrowserRouter>
                <ScrollToTop/>
                <Switch>
                    <Route path={"/auth"} component={AuthPage}/>
                    <Route exact path={"/event/book"} component={BookEvent}/>
                    <Route exact path={"/event/explore"} component={ExploreEventsPage}/>
                    <Route exact path={"/"} component={LandingPage}/>
                </Switch>
            </BrowserRouter>
        </MuiThemeProvider>
    )
}

export default AllEvents;