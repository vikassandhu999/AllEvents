import React, { FC, useEffect, useState } from 'react';
import Form from '@pluralsight/ps-design-system-form';
import Button from '@pluralsight/ps-design-system-button';
import TextInput from '@pluralsight/ps-design-system-textinput';
import { useForm } from 'react-hook-form';
import authApi from '@app/auth/http/auth';
import { Heading, Label } from '@pluralsight/ps-design-system-text';
import hasResponseData from '@app/@allevents/utils/has-response-data';
import getErrorResponseData from '@app/@allevents/utils/get-error-response-data';
import { mapKeyValue } from '@app/@allevents/utils/mapKeyValue';
import Banner from '@pluralsight/ps-design-system-banner';
import { colors } from '@pluralsight/ps-design-system-text/dist/esm/react/heading';
import { useAuth } from '@app/auth/provider/auth-provider';

const LoginUserErrors = {
  EMAIL_OR_PASSWORD_MISMATCH: '/user/login-user/email-or-password-mismatch',
  EMAIL_NOT_VERIFIED: '/user/login-user/email-not-verified',
};

interface LoginFormInput {
  email: string;
  password: string;
}

const LoginForm: FC = () => {
  const {
    handleSubmit,
    register,
    formState,
    errors,
    setError,
    clearErrors,
  } = useForm<LoginFormInput>();
  const [errorMessage, setErrorMessage] = useState<null | string>(null);

  const { verifyAuth } = useAuth();

  const handleApiError = (error: any) => {
    if (hasResponseData(error)) {
      const { message, errorCode, errorInfo } = getErrorResponseData(error);
      if (errorCode === 'invalid-params') {
        mapKeyValue(errorInfo, (key: 'email' | 'password', value: string[]) => {
          return setError(key, { message: value[0] });
        });
      } else if (errorCode === LoginUserErrors.EMAIL_NOT_VERIFIED) {
        if (errorInfo.email) setError('email', { message: errorInfo.email[0] });
        return;
      } else if (errorCode === LoginUserErrors.EMAIL_OR_PASSWORD_MISMATCH) {
        setErrorMessage(message);
        return;
      }
    } else {
      setErrorMessage('An unknown error has been occurred');
    }
  };

  const login = async (data: LoginFormInput) => {
    setErrorMessage(null);
    clearErrors();
    const response = await authApi.login(data);
    if (response.isError) {
      handleApiError(response.getError());
      return;
    }
    await verifyAuth();
  };

  return (
    <form
      style={{
        minWidth: '400px',
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        justifyItems: 'center',
        alignContent: 'center',
        padding: '32px 48px',
      }}
      onSubmit={handleSubmit(login)}
    >
      <Form.VerticalLayout>
        <Heading size={Heading.sizes.xSmall}>
          <h5>Login</h5>
        </Heading>

        {errorMessage && (
          <Banner color={Banner.colors.red}>
            <Label size={Label.sizes.xSmall} color={colors.secondary}>
              {errorMessage}
            </Label>
          </Banner>
        )}

        <TextInput
          size={TextInput.sizes.medium}
          error={!!errors.email}
          ref={register}
          name="email"
          label={<Label size={Label.sizes.medium}>Email Address</Label>}
          placeholder="johndoe@gmail.com"
          subLabel={errors?.email?.message}
        />
        <TextInput
          size={TextInput.sizes.medium}
          error={!!errors.password}
          ref={register}
          name="password"
          type={'password'}
          label={<Label size={Label.sizes.medium}>Password</Label>}
          placeholder="*****kf***"
          subLabel={errors?.password?.message}
        />
        <Form.ButtonRow style={{ marginBottom: '8px' }} />
        <Button
          layout={Button.layouts.fullWidth}
          loading={formState.isSubmitting}
          onClick={handleSubmit(login)}
        >
          Login
        </Button>
      </Form.VerticalLayout>
    </form>
  );
};

export default LoginForm;
