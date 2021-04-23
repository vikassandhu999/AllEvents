import React from "react";
import Typography from "@material-ui/core/Typography";
import AETextField from "@allevents/components/text-field";
import SubmitButton from "@allevents/components/submit-button";
import AllEventsLogo from "@allevents/components/text-logo";
import {ArrowForward} from "@material-ui/icons";
import useFormStyles from "auth/form.style";
import authApi from "auth/http/auth";
import {useForm} from "react-hook-form";
import {useHistory} from "react-router";
import {EMAIL_STATUS} from "auth/http/auth/types";
import {isInvalidParamError} from "@allevents/utils/isInvalidParamError";

interface SignupLoginFormInput {
    email : string;
}


const useSignupLoginController = () => {

    const { 
            handleSubmit, 
            control, 
            formState,
            errors, 
            setError 
        } = useForm<SignupLoginFormInput>();

    const history = useHistory();

    const getAuthStatus = async (data : SignupLoginFormInput) => {
            const response = await authApi.getAuthStatus(data);
            if(response.isError) {
               console.log(response.getError());
                return;
               //this might internal server error or network error
                //TODO : handle this error
            }
            const {email,emailStatus} = response.getValue();
            switch (emailStatus) {
                case EMAIL_STATUS.DOES_NOT_EXIST:
                    history.push("/auth/sign-up");
                    break;
                case EMAIL_STATUS.EXISTS_VERIFIED:
                     history.push("/auth/login");
                    break;
                case EMAIL_STATUS.EXISTS_NOT_VERIFIED:
                     history.push("/auth/");
            }
    }

    return {
         onSubmit : handleSubmit(getAuthStatus), 
         errors,
         control,
         formState
    }
}


const SignupLoginForm = () => {

    const {
        onSubmit,
        errors,
        control,
        formState
    } = useSignupLoginController();

    const classes = useFormStyles();
    return (
            <form
                onSubmit={onSubmit}
                className={classes.formCard}
                noValidate autoComplete="off">
                <AllEventsLogo/>
                <div className={classes.box0}/>
                <Typography
                    className={classes.formTitle}
                    variant="h6">
                    Sign up or log in
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
                {
                    errors.email && <p>{errors.email}</p>
                }
                <div className={classes.box0}/>
                <SubmitButton
                    variant={"contained"}
                    endIcon={<ArrowForward/>}
                    type={"submit"}
                    disabled={formState.isSubmitting}
                >
                    Get started
                </SubmitButton>
            </form>
    )
}

export default SignupLoginForm;