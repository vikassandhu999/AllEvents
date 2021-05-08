import { HttpErrors } from '../infra/http/errorCode';
import { ApiError } from '@app/core/ApiError';

export class UnauthorizedAccessError extends ApiError {
  constructor() {
    super({
      message: 'You are not allowed to perform this action',
      httpCode: HttpErrors.UNAUTHENTICATED,
      errorCode: 'unauthorized-access',
    });
  }
}
