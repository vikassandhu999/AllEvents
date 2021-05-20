import React, { FC, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Form from '@pluralsight/ps-design-system-form';
import Button from '@pluralsight/ps-design-system-button';
import Banner from '@pluralsight/ps-design-system-banner';
import { Heading, Label } from '@pluralsight/ps-design-system-text';
import TextInput from '@pluralsight/ps-design-system-textinput';
import authApi from '@app/auth/http/auth';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { EMAIL_STATUS } from '@app/auth/http/auth/types';
import hasResponseData from '@app/@allevents/utils/has-response-data';
import getErrorResponseData from '@app/@allevents/utils/get-error-response-data';
import { colors } from '@pluralsight/ps-design-system-text/dist/esm/react/heading';

interface SignupLoginFormInput {
  email: string;
}

const SignupLoginForm: FC = () => {
  const {
    handleSubmit,
    register,
    formState,
    errors,
    setError,
    clearErrors,
  } = useForm<SignupLoginFormInput>();
  const [errorMessage, setErrorMessage] = useState<null | string>(null);

  const history = useHistory();

  const handleApiError = (error: any) => {
    if (hasResponseData(error)) {
      const { message, errorCode, errorInfo } = getErrorResponseData(error);
      if (errorCode === 'invalid-params') {
        setError('email', { message: errorInfo.email[0] });
        return;
      }
      setErrorMessage(message ?? 'An unknown error has been occurred');
      return;
    }
    console.log('error');

    setErrorMessage('An unknown error has been occurred');
  };

  const getAuthStatus = async (data: SignupLoginFormInput) => {
    clearErrors();
    setErrorMessage(null);
    const response = await authApi.getAuthStatus(data);
    if (response.isError) {
      handleApiError(response.getError());
      return;
    }
    const { emailStatus } = response.getValue();
    switch (emailStatus) {
      case EMAIL_STATUS.DOES_NOT_EXIST:
        history.push('/auth/sign-up');
        break;
      case EMAIL_STATUS.EXISTS_VERIFIED:
        history.push('/auth/login');
        break;
      case EMAIL_STATUS.EXISTS_NOT_VERIFIED:
        history.push('/auth/');
    }
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
      onSubmit={handleSubmit(getAuthStatus)}
    >
      <Form.VerticalLayout>
        <Heading size={Heading.sizes.xSmall}>
          <h5>Signup or Login</h5>
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
        <Button
          layout={Button.layouts.fullWidth}
          loading={formState.isSubmitting}
          onClick={handleSubmit(getAuthStatus)}
        >
          Continue
        </Button>
      </Form.VerticalLayout>
    </form>
  );
};

export default SignupLoginForm;
