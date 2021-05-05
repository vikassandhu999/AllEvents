import { HttpErrors } from '../infra/http/errorCode';
import { ApiError } from '@app/core/ApiError';

export class NotEnoughInformationProvidedError extends ApiError {
  constructor() {
    super({
      message: 'Missing auth tokens or user information',
      httpCode: HttpErrors.UNAUTHENTICATED,
      errorCode: 'missing-auth-token-or-user-info',
    });
  }
}
