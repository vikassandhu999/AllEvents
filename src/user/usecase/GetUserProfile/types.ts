import { HttpErrors } from '@app/infra/http/errorCode';
import { BaseError } from '@app/core/BaseError';

export class GetUserProfileResponse {
  status: string = 'success';
  data: any;
  constructor(data: any) {
    this.data = data;
  }
}

export class ProfileNotFoundError extends BaseError {
  constructor() {
    super('Profile not found', HttpErrors.NOT_FOUND);
  }
}
