import { HttpErrors } from '@app/infra/http/errorCode';
import { IUser } from 'user/domain/User';
import { BaseError } from '@app/core/BaseError';

export type CreateUserDTO = Pick<
  IUser,
  'email' | 'firstName' | 'lastName' | 'password' | 'imgAvatar' | 'about'
>;

export class CreateUserResponse {
  status: string = 'success';
}

export class EmailAlreadyExistError extends BaseError {
  constructor() {
    super('Email already exists', HttpErrors.ALREADY_EXISTS, {
      email: 'Email already exists',
    });
  }
}
