import React, { FC } from 'react';
import Typography from '@material-ui/core/Typography';
import AETextField from '@app/@allevents/components/text-field';
import SubmitButton from '@app/@allevents/components/submit-button';
import AllEventsLogo from '@app/@allevents/components/text-logo';
import { ArrowForward } from '@material-ui/icons';
import useFormStyles from '@app/auth/form.style';
import { useForm } from 'react-hook-form';
import authApi from '@app/auth/http/auth';

interface SignupFormInput {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

const SignupForm : FC = () => {
  const { handleSubmit, control, formState } = useForm<SignupFormInput>();

  const signup = async (data: SignupFormInput) => {
    const response = await authApi.signup(data);
    if (response.isError) {
      console.log(response.getError());
    }
    console.log(response.getValue());
  };
  const classes = useFormStyles();
  return (
    <form
      onSubmit={handleSubmit(signup)}
      className={classes.formCard}
      noValidate
      autoComplete="off"
    >
      <AllEventsLogo />
      <div className={classes.box0} />
      <Typography className={classes.formTitle} variant="h6">
        Create Account
      </Typography>
      <div className={classes.box} />

      <AETextField
        textFieldProps={{
          size: 'small',
          label: 'Email address',
          variant: 'outlined',
        }}
        name={'email'}
        control={control}
      />
      <AETextField
        textFieldProps={{
          size: 'small',
          label: 'First name',
          variant: 'outlined',
        }}
        name={'firstName'}
        control={control}
      />
      <AETextField
        textFieldProps={{
          size: 'small',
          label: 'Last name',
          variant: 'outlined',
        }}
        name={'lastName'}
        control={control}
      />
      <AETextField
        textFieldProps={{
          size: 'small',
          label: 'Password',
          variant: 'outlined',
        }}
        name={'password'}
        control={control}
      />

      <div className={classes.box0} />
      <SubmitButton
        variant={'contained'}
        endIcon={<ArrowForward />}
        type={'submit'}
        disabled={formState.isSubmitting}
      >
        Create account
      </SubmitButton>
    </form>
  );
};

export default SignupForm;
