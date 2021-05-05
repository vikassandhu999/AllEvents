import { BaseError } from './BaseError';
import { HttpErrors } from '../infra/http/errorCode';
import { ApiError } from '@app/core/ApiError';

export class AppError extends ApiError {
  constructor() {
    super({
      message: 'Internal error',
      httpCode: HttpErrors.UNKNOWN,
      errorCode: 'internal-server-error',
    });
  }
}
