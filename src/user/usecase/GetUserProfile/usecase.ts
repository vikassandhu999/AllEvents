import _ from 'lodash';
import { AssertContext } from '@app/core/AssertContext';
import { UserContext } from 'user/domain/UserContext';
import { UseCase } from '@app/core/Usecase';
import {
  GetUserProfileResponse,
  ProfileNotFoundError,
} from 'user/usecase/GetUserProfile/types';
import { IUserRepository } from 'user/repositories/IUserRepository';
import { assert } from '@app/core/Assert';

export class GetUserProfileUseCase extends UseCase<{}, GetUserProfileResponse> {
  private readonly userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    super(false);
    this.userRepository = userRepository;
  }

  protected inputConstraints: any;

  public async runImpl(
    params: {},
    context: UserContext,
  ): Promise<GetUserProfileResponse> {
    AssertContext(context, { isAuthenticated: true });

    const userId = context.userId;

    const user = await this.userRepository.getById(userId);

    assert(!!user, new ProfileNotFoundError());

    // @ts-ignore
    const dtoUser = user.toDTO();

    return new GetUserProfileResponse(
      _.omit(dtoUser, ['authSecret', 'password']),
    );
  }
}
