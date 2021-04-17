import React, {useState} from "react";
import Typography from "@material-ui/core/Typography";
import AETextField from "@allevents/components/text-field";
import SubmitButton from "@allevents/components/submit-button";
import AllEventsLogo from "@allevents/components/text-logo";
import {ArrowForward} from "@material-ui/icons";
import useFormStyles from "auth/form.style";
import useAuthStatus from "auth/mutations/useAuthStatus";
import authApi from "auth/http/auth";

const SignupLoginForm = () => {

    const [email,setEmail]=useState<string>("");

    const authStatus = async () => {
        try {
            const response = await authApi.getAuthStatus({email});
            if(response.isError) {
                console.log(response.getError().response.data);
            }
            console.log(response.getValue());
        }catch (e) {

        }
    }

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
                <AETextField
                    size={"small"}
                    value={email}
                    onChange={(e)=>setEmail(e.currentTarget.value)}
                    id="outlined-basic"
                    label="Email address"
                    variant="outlined" />
                <div className={classes.box0}/>
                <SubmitButton
                    variant={"contained"}
                    endIcon={<ArrowForward/>}
                    onClick={()=>{
                        authStatus()
                    }}
                >
                    Get started
                </SubmitButton>
            </form>
    )
}

export default SignupLoginForm;