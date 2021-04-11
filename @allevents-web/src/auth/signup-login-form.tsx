import React from "react";
import Typography from "@material-ui/core/Typography";
import AETextField from "@allevents/components/text-field";
import SubmitButton from "@allevents/components/submit-button";
import AllEventsLogo from "@allevents/components/text-logo";
import {ArrowForward} from "@material-ui/icons";
import useFormStyles from "auth/form.style";

const SignupLoginForm = () => {
    const classes = useFormStyles();
    return (
            <form className={classes.formCard} noValidate autoComplete="off">
                <AllEventsLogo/>
                <div className={classes.box0}/>
                <Typography
                    className={classes.formTitle}
                    variant="h6">
                    Sign up or log in
                </Typography>
                <div className={classes.box}/>
                <AETextField id="outlined-basic" label="Email address" variant="outlined" />
                <div className={classes.box0}/>
                <SubmitButton
                    variant={"contained"}
                    endIcon={<ArrowForward/>}
                >
                    Get started
                </SubmitButton>
            </form>
    )
}

export default SignupLoginForm;