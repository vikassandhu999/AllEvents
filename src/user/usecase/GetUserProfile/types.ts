import { HttpErrors } from '@app/infra/http/errorCode';
import { ApiError } from '@app/core/ApiError';

export class GetUserProfileResponse {
  status: string = 'success';
  data: any;
  constructor(data: any) {
    this.data = data;
  }
}

const GetUserProfileErrors = {
  PROFILE_NOT_FOUND: '/user/get-user-profile/profile-not-found',
};

export class ProfileNotFoundError extends ApiError {
  constructor() {
    super({
      message: 'Profile not found',
      httpCode: HttpErrors.NOT_FOUND,
      errorCode: GetUserProfileErrors.PROFILE_NOT_FOUND,
    });
  }
}
