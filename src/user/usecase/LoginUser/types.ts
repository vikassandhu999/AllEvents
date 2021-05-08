import { HttpErrors } from '@app/infra/http/errorCode';
import { BaseError } from '@app/core/BaseError';
import { ApiError } from '@app/core/ApiError';

export type LoginUserDTO = {
  email: string;
  password: string;
};

export class LoginUserResponse {
  constructor(public accessToken: string, public refreshToken: string) {}
}

const LoginUserErrors = {
  EMAIL_OR_PASSWORD_MISMATCH: '/user/login-user/email-or-password-mismatch',
  EMAIL_NOT_VERIFIED: '/user/login-user/email-not-verified',
};

export class EmailOrPasswordDidNotMatchError extends ApiError {
  constructor() {
    super({
      message: "Email or Password didn't match",
      httpCode: HttpErrors.UNAUTHENTICATED,
      errorCode: LoginUserErrors.EMAIL_OR_PASSWORD_MISMATCH,
    });
  }
}

export class EmailNotVerifiedError extends ApiError {
  constructor() {
    super({
      message: 'Email is not verified',
      httpCode: HttpErrors.PERMISSION_DENIED,
      errorCode: LoginUserErrors.EMAIL_NOT_VERIFIED,
      errorInfo: {
        email: ['Email address is not verified'],
      },
    });
  }
}
