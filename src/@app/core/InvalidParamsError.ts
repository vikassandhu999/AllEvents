import { HttpErrors } from '../infra/http/errorCode';
import { ApiError } from '@app/core/ApiError';

export class InvalidParamsError extends ApiError {
  constructor(validation: any, errorCode: string) {
    super({
      message: 'Invalid parameters',
      httpCode: HttpErrors.INVALID_ARGUMENT,
      errorCode: errorCode,
      errorInfo: validation,
    });
  }
}
