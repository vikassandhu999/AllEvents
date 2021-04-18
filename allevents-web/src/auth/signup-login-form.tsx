import React from "react";
import Typography from "@material-ui/core/Typography";
import AETextField from "@allevents/components/text-field";
import SubmitButton from "@allevents/components/submit-button";
import AllEventsLogo from "@allevents/components/text-logo";
import {ArrowForward} from "@material-ui/icons";
import useFormStyles from "auth/form.style";
import authApi from "auth/http/auth";
import {useForm} from "react-hook-form";

interface SignupLoginFormInput {
    email : string;
}

const SignupLoginForm = () => {

    const { handleSubmit, control, formState } = useForm<SignupLoginFormInput>();

    const authStatus = async (data : SignupLoginFormInput) => {
            const response = await authApi.getAuthStatus(data);
            if(response.isError) {
                console.log(response.getError().response.data);
            }
            console.log(response.getValue());
    }

    const classes = useFormStyles();
    return (
            <form
                onSubmit={handleSubmit(authStatus)}
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