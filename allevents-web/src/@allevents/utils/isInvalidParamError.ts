import { BaseError } from '@app/@allevents/core/BaseError';

export const isInvalidParamError = (error: BaseError) => {
  return error.httpCode === 400;
};
