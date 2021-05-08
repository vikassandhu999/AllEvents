import React, { FC, useState } from 'react';
import Form from '@pluralsight/ps-design-system-form'
import Button from '@pluralsight/ps-design-system-button'
import TextInput from '@pluralsight/ps-design-system-textinput'
import AllEventsLogo from '@app/@allevents/components/text-logo';
import { ArrowForward } from '@material-ui/icons';
import useFormStyles from '@app/auth/form.style';
import { useForm } from 'react-hook-form';
import authApi from '@app/auth/http/auth';
import hasResponseData from '@app/@allevents/utils/has-response-data';
import getErrorResponseData from '@app/@allevents/utils/get-error-response-data';
import { mapKeyValue } from '@app/@allevents/utils/mapKeyValue';
import { Heading, Label } from '@pluralsight/ps-design-system-text';
import Banner from '@pluralsight/ps-design-system-banner';
import { colors } from '@pluralsight/ps-design-system-text/dist/esm/react/label';

const SignupApiErrors = {
  EMAIL_ALREADY_EXIST: '/user/create-user/email-already-exist',
};

interface SignupFormInput {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

const SignupForm: FC = () => {
  const {
    handleSubmit,
    register,
    formState,
    errors,
    setError,
    clearErrors,
  } = useForm<SignupFormInput>();
  const [errorMessage, setErrorMessage] = useState<null | string>(null);

  const handleApiError = (error: any) => {
    if (hasResponseData(error)) {
      const { message, errorCode, errorInfo } = getErrorResponseData(error);
      if (errorCode === 'invalid-params') {
        mapKeyValue(
          errorInfo,
          (
            key: 'email' | 'password' | 'firstName' | 'lastName',
            value: string[],
          ) => {
            return setError(key, { message: value[0] });
          },
        );
      } else if (errorCode === SignupApiErrors.EMAIL_ALREADY_EXIST) {
        if (errorInfo.email) setError('email', { message: errorInfo.email[0] });
      }
      return;
    }
    setErrorMessage('An unknown error has been occurred');
  };

  const signup = async (data: SignupFormInput) => {
    setErrorMessage(null);
    clearErrors();
    const response = await authApi.signup(data);
    if (response.isError) {
      handleApiError(response.getError());
      return;
    }
    console.log(response.getValue());
  };

  return (
    <form style={{
      "minWidth": '400px',
      "backgroundColor": '#fff',
      "display": 'flex',
      "flexDirection": 'column',
      "justifyContent": "center",
      "justifyItems": "center",
      "alignContent": "center",
      "padding": "32px 48px"
    }} onSubmit={handleSubmit(signup)}>
      <Form.VerticalLayout>
        <Heading size={Heading.sizes.xSmall}>
          <h5>Create Account</h5>
        </Heading>

        {errorMessage && (
          <Banner
            color={Banner.colors.red}
          >
            <Label size={Label.sizes.xSmall} color={colors.secondary}>{errorMessage}</Label>
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
          error={!!errors.firstName}
          ref={register}
          name="firstName"
          label={<Label size={Label.sizes.medium}>First Name</Label>}
          placeholder="John"
          subLabel={errors?.firstName?.message}
        />
        <TextInput
          size={TextInput.sizes.medium}
          error={!!errors.lastName}
          ref={register}
          name="lastName"
          label={<Label size={Label.sizes.medium}>Last Name</Label>}
          placeholder="Doe"
          subLabel={errors?.lastName?.message}
        />
        <TextInput
          size={TextInput.sizes.medium}
          error={!!errors.password}
          ref={register}
          name="password"
          type={"password"}
          label={<Label size={Label.sizes.medium}>Password</Label>}
          placeholder="*********"
          subLabel={errors?.password?.message}
        />
        <Form.ButtonRow style={{ marginBottom: "8px" }} />
        <Button
          layout={Button.layouts.fullWidth}
          loading={formState.isSubmitting}
          onClick={handleSubmit(signup)}>
          Create Account
            </Button>

      </Form.VerticalLayout>
    </form>
  );
};

export default SignupForm;
