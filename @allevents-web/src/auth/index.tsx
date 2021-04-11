import React from "react";
import Header from "x-shared/header";
import {Container} from "@material-ui/core";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import SignupLoginForm from "auth/signup-login-form";
import SignupForm from "auth/signup-form";
import LoginForm from "auth/login-form";
import {Route} from "react-router";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root : {
          width:"100%",
          minHeight:"100vh",
          display:"flex",
          justifyContent:"center",
            alignItems:"center",
            alignContent:"center"
        },
        formCard : {
            minWidth:"300px",
            backgroundColor:"#fff",
            display:"flex",
            flexDirection:"column",
            padding:theme.spacing(3),
        }
    }));

const AuthPage = () => {
    const classes = useStyles();
    return (
        <>
        <Header/>
            <Container>
                    <div className={classes.root}>
                        <Route exact path={"/auth"} component={SignupLoginForm}/>
                        <Route exact path={"/auth/sign-up"} component={SignupForm}/>
                        <Route exact path={"/auth/login"} component={LoginForm}/>
                    </div>
            </Container>
        </>
    )
}

export default AuthPage;