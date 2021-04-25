import { BaseError } from '@app/@allevents/core/BaseError';

export const handleSubmitError = (error: BaseError) => {
  if (error.httpCode === 400) {
  }
};
