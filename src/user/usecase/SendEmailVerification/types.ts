import { HttpErrors } from '@app/infra/http/errorCode';
import { BaseError } from '@app/core/BaseError';
import { ApiError } from '@app/core/ApiError';

export type SendVerificationEmailDTO = {
  email: string;
};

export class SendVerificationEmailResponse {
  status: string = 'success';
}

const SendEmailVerificationErrors = {
  EMAIL_DOES_NOT_EXIST: '/user/send-email-verification/email-does-not-exist',
  UNABLE_TO_SEND_EMAIL: '/user/login-user/unable-to-send-email',
};

export class UserEmailDoesNotExistError extends ApiError {
  constructor() {
    super({
      message: "Email doesn't exist",
      httpCode: HttpErrors.NOT_FOUND,
      errorCode: SendEmailVerificationErrors.EMAIL_DOES_NOT_EXIST,
      errorInfo: {
        email: "Email doesn't exist",
      },
    });
  }
}

export class UnableToSendEmailError extends ApiError {
  constructor() {
    super({
      message: 'Unable to send verification email',
      httpCode: HttpErrors.UNKNOWN,
      errorCode: SendEmailVerificationErrors.EMAIL_DOES_NOT_EXIST,
    });
  }
}
