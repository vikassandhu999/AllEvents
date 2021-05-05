import { HttpErrors } from '@app/infra/http/errorCode';
import { IUser } from 'user/domain/User';
import { ApiError } from '@app/core/ApiError';

export type CreateUserDTO = Pick<
  IUser,
  'email' | 'firstName' | 'lastName' | 'password' | 'imgAvatar' | 'about'
>;

export class CreateUserResponse {
  status: string = 'success';
}

const CreateUserErrors = {
  EMAIL_ALREADY_EXIST: '/user/create-user/email-already-exist',
};

export class EmailAlreadyExistError extends ApiError {
  constructor() {
    super({
      message: 'Email already exists',
      httpCode: HttpErrors.ALREADY_EXISTS,
      errorCode: CreateUserErrors.EMAIL_ALREADY_EXIST,
      errorInfo: {
        email: ['Email already exists'],
      },
    });
  }
}
