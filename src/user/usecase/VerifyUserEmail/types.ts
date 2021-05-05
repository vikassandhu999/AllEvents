import { HttpErrors } from '@app/infra/http/errorCode';
import { BaseError } from '@app/core/BaseError';
import { ApiError } from '@app/core/ApiError';

export type VerifyUserEmailDTO = {
  verificationToken: string;
};

export class VerifyUserEmailResponse {
  status: string = 'success';
}

const VerifyUserEmailErrors = {
  INVALID_VERIFICATION_TOKEN: '/user/verify-user/invalid-verification-user',
};

export class InvalidVerificationTokenError extends ApiError {
  constructor() {
    super({
      message: 'Invalid verificationToken',
      httpCode: HttpErrors.INVALID_ARGUMENT,
      errorCode: VerifyUserEmailErrors.INVALID_VERIFICATION_TOKEN,
      errorInfo: {
        verificationToken: 'Verification token is invalid',
      },
    });
  }
}
