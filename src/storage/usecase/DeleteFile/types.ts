import { ApiError } from '@app/core/ApiError';
import { HttpErrors } from '@app/infra/http/errorCode';

export type DeleteFileDTO = {
  downloadUrl: string;
};

export class DeleteFileResponse {
  constructor(public status: string = 'success') {}
}

export class InvalidDownloadUrlError extends ApiError {
  constructor() {
    super({
      message: 'Invalid downloadUrl',
      httpCode: HttpErrors.INVALID_ARGUMENT,
    });
  }
}
