import React, { FC, useEffect, useState } from 'react';
import Form from '@pluralsight/ps-design-system-form';
import Button from '@pluralsight/ps-design-system-button';
import TextInput from '@pluralsight/ps-design-system-textinput';
import { useForm } from 'react-hook-form';
import authApi from '@app/auth/http/auth';
import { Heading, Label, textColors } from '@pluralsight/ps-design-system-text';
import hasResponseData from '@app/@allevents/utils/has-response-data';
import getErrorResponseData from '@app/@allevents/utils/get-error-response-data';
import { mapKeyValue } from '@app/@allevents/utils/mapKeyValue';
import Banner from '@pluralsight/ps-design-system-banner';
import TextArea from '@pluralsight/ps-design-system-textarea';
import Steps from '@pluralsight/ps-design-system-steps';
import { colors } from '@pluralsight/ps-design-system-text/dist/esm/react/heading';
import { useAuth } from '@app/auth/provider/auth-provider';
import { css } from 'glamor';
import { GContainer } from '@app/@allevents/infra/glamor';
import Header from '@app/x-shared/header';
import {
  colorsGradient,
  colorsTextIcon,
} from '@pluralsight/ps-design-system-core';

const LoginUserErrors = {
  EMAIL_OR_PASSWORD_MISMATCH: '/user/login-user/email-or-password-mismatch',
  EMAIL_NOT_VERIFIED: '/user/login-user/email-not-verified',
};

interface CreateEventInput {
  eventName: string;
  poster: string;
  venueId: string;
  ticketPrice: number;
  ticketPriceCurrency: string;
  maxAllowedTickets: number;
  description: string;
  language: string;
  category: string;
  eventTime: Date;
  duration: number;
}

const CreateEvent: FC = () => {
  const {
    handleSubmit,
    register,
    formState,
    errors,
    setError,
    clearErrors,
  } = useForm<CreateEventInput>();
  const [errorMessage, setErrorMessage] = useState<null | string>(null);

  const { verifyAuth } = useAuth();

  const handleApiError = (error: any) => {
    if (hasResponseData(error)) {
      const { message, errorCode, errorInfo } = getErrorResponseData(error);
      // if (errorCode === 'invalid-params') {
      //   mapKeyValue(errorInfo, (key: 'email' | 'password', value: string[]) => {
      //     return setError(key, { message: value[0] });
      //   });
      // } else if (errorCode === LoginUserErrors.EMAIL_NOT_VERIFIED) {
      //   if (errorInfo.email) setError('email', { message: errorInfo.email[0] });
      //   return;
      // } else if (errorCode === LoginUserErrors.EMAIL_OR_PASSWORD_MISMATCH) {
      //   setErrorMessage(message);
      //   return;
      // }
    } else {
      setErrorMessage('An unknown error has been occurred');
    }
  };

  const login = async (data: CreateEventInput) => {
    setErrorMessage(null);
    clearErrors();
    const response = await authApi.login(data);
    if (response.isError) {
      handleApiError(response.getError());
      return;
    }
    await verifyAuth();
  };

  const renderForm = () => {
    return (
      <form
        style={{
          maxWidth: '600px',
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
          {errorMessage && (
            <Banner color={Banner.colors.red}>
              <Label size={Label.sizes.xSmall} color={colors.secondary}>
                {errorMessage}
              </Label>
            </Banner>
          )}

          <TextInput
            size={TextInput.sizes.medium}
            error={!!errors.eventName}
            ref={register}
            name="eventName"
            label={<Label size={Label.sizes.medium}>Event name</Label>}
            placeholder="The Vikas Sandhu Show ft. Vikas Sandhu"
            subLabel={errors?.eventName?.message}
          />

          <TextInput
            size={TextInput.sizes.medium}
            error={!!errors.poster}
            ref={register}
            name="poster"
            label={<Label size={Label.sizes.medium}>Event poster</Label>}
            placeholder="Cool Image"
            subLabel={errors?.poster?.message}
          />

          <TextArea
            error={!!errors.description}
            ref={register}
            name="description"
            label={<Label size={Label.sizes.medium}>Event description</Label>}
            placeholder="Description"
            subLabel={errors?.description?.message}
          />

          <Form.Divider />

          <TextInput
            size={TextInput.sizes.medium}
            error={!!errors.poster}
            ref={register}
            name="venueId"
            label={<Label size={Label.sizes.medium}>Select Venue</Label>}
            placeholder="Dr. Harsha Baghat Stadium"
            subLabel={errors?.venueId?.message}
          />

          <Form.Divider />

          <TextInput
            size={TextInput.sizes.medium}
            error={!!errors.poster}
            ref={register}
            name="ticketPrice"
            type={'number'}
            label={<Label size={Label.sizes.medium}>Ticker price</Label>}
            placeholder="199"
            subLabel={errors?.ticketPrice?.message}
          />

          <TextInput
            size={TextInput.sizes.medium}
            error={!!errors.poster}
            ref={register}
            name="ticketPriceCurrency"
            label={<Label size={Label.sizes.medium}>Currency</Label>}
            placeholder="USD"
            subLabel={errors?.ticketPriceCurrency?.message}
          />

          <TextInput
            size={TextInput.sizes.medium}
            error={!!errors.poster}
            ref={register}
            name="maxAllowedTickets"
            type={'number'}
            label={
              <Label size={Label.sizes.medium}>Maximum tickets allowed</Label>
            }
            placeholder="200"
            subLabel={errors?.maxAllowedTickets?.message}
          />

          <Form.ButtonRow style={{ marginBottom: '8px' }} />
          <div
            className={`${css({
              width: '100%',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gridGap: '1rem',
            })}`}
          >
            <Button
              layout={Button.layouts.fullWidth}
              loading={formState.isSubmitting}
              onClick={handleSubmit(login)}
            >
              Publish
            </Button>
            <Button
              appearance={Button.appearances.stroke}
              layout={Button.layouts.fullWidth}
              loading={formState.isSubmitting}
              onClick={handleSubmit(login)}
            >
              Draft
            </Button>
          </div>
        </Form.VerticalLayout>
      </form>
    );
  };

  return (
    <>
      <Header />
      <div
        className={`${css({
          width: '100%',
          minHeight: '100vh',
          display: 'block',
          background: colorsGradient.skillsBackground,
        })}`}
      >
        <div className={`${GContainer} ${css({ padding: '2rem' })}`}>
          <div
            className={`${css({
              width: '100%',
              display: 'flex',
              padding: '4rem 2rem',
              background: colorsGradient.skillsBackground,
              flexDirection: 'column',
            })}`}
          >
            <Heading
              size={Heading.sizes.xLarge}
              className={`${css({
                color: colorsTextIcon.highOnDark,
                marginBottom: 0,
                paddingBottom: 0,
                fontWeight: 800,
              })}`}
            >
              <h1>Create event</h1>
            </Heading>
            <Heading
              size={Heading.sizes.small}
              className={`${css({
                color: colorsTextIcon.lowOnDark,
                marginBottom: 0,
                paddingBottom: 0,
                fontWeight: 600,
              })}`}
            >
              <h3>Let the world have you</h3>
            </Heading>
          </div>
          {renderForm()}
        </div>
      </div>
    </>
  );
};

export default CreateEvent;
