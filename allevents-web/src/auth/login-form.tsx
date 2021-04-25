import React, { FC } from 'react';
import Typography from '@material-ui/core/Typography';
import AETextField from '@app/@allevents/components/text-field';
import SubmitButton from '@app/@allevents/components/submit-button';
import AllEventsLogo from '@app/@allevents/components/text-logo';
import { ArrowForward } from '@material-ui/icons';
import useFormStyles from '@app/auth/form.style';
import { useForm } from 'react-hook-form';
import authApi from '@app/auth/http/auth';
import useAuth from '@app/auth/store/use-auth';

interface LoginFormInput {
  email: string;
  password: string;
}

const LoginForm : FC = () => {
  const { handleSubmit, control, formState } = useForm<LoginFormInput>();
  const { isAuthenticated, setAuth } = useAuth();

  const login = async (data: LoginFormInput) => {
    const response = await authApi.login(data);
    if (response.isError) {
      console.log(response.getError());
    }
    console.log({ isAuthenticated });
    setAuth(true);
    console.log({ isAuthenticated });
  };

  const classes = useFormStyles();
  return (
    <form
      onSubmit={handleSubmit(login)}
      className={classes.formCard}
      noValidate
      autoComplete="off"
    >
      <AllEventsLogo />
      <div className={classes.box0} />
      <Typography className={classes.formTitle} variant="h6">
        Login
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
        Login
      </SubmitButton>
    </form>
  );
};

export default LoginForm;
