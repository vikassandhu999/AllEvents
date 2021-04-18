import React from "react";
import Typography from "@material-ui/core/Typography";
import AETextField from "@allevents/components/text-field";
import SubmitButton from "@allevents/components/submit-button";
import AllEventsLogo from "@allevents/components/text-logo";
import {ArrowForward} from "@material-ui/icons";
import useFormStyles from "auth/form.style";
import {useForm} from "react-hook-form";
import authApi from "auth/http/auth";

interface LoginFormInput {
    email : string;
    password : string;
}

const LoginForm = () => {
    const { handleSubmit, control, formState } = useForm<LoginFormInput>();

    const login = async (data : LoginFormInput) => {
        const response = await authApi.login(data);
        if(response.isError) {
            console.log(response.getError());
        }
        console.log(response.getValue());
    }
    const classes = useFormStyles();
    return (
        <form
            onSubmit={handleSubmit(login)}
            className={classes.formCard}
            noValidate autoComplete="off">
            <AllEventsLogo/>
            <div className={classes.box0}/>
            <Typography
                className={classes.formTitle}
                variant="h6">
                Login
            </Typography>
            <div className={classes.box}/>
            <AETextField
                textFieldProps={{
                    size : "small",
                    label:"Email address",
                    variant:"outlined"
                }}
                name={"email"}
                control={control}
            />
            <AETextField
                textFieldProps={{
                    size : "small",
                    label:"Password",
                    variant:"outlined"
                }}
                name={"password"}
                control={control}
            />

            <div className={classes.box0}/>
            <SubmitButton
                variant={"contained"}
                endIcon={<ArrowForward/>}
                type={"submit"}
                disabled={formState.isSubmitting}
            >
                Login
            </SubmitButton>
        </form>
    )
}

export default LoginForm;