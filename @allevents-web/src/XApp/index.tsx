import React from "react";
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router";
import { MuiThemeProvider } from '@material-ui/core/styles';
import muiTheme from "../XShared/MaterialTheme";
import LandingPage from "../landing-page";

export const MainApp = () => {
    return (
        <MuiThemeProvider theme={muiTheme}>
            <BrowserRouter>
                <Switch>
                    {/*<Route path={"/auth"} component={AuthRouter}/>*/}
                    <Route path={"/"} component={LandingPage}/>
                </Switch>
            </BrowserRouter>
        </MuiThemeProvider>
    )
}