import { v4 as uuid } from 'uuid';
import {
  EmailNotVerifiedError,
  EmailOrPasswordDidNotMatchError,
  LoginUserDTO,
  LoginUserResponse,
} from 'user/usecase/LoginUser/types';
import User from 'user/domain/User';
import authConfig from 'config/authConfig';
import { JWT } from '@app/packages/jwt';
import { UseCase } from '@app/core/Usecase';
import { IUserRepository } from 'user/repositories/IUserRepository';
import Password from '@app/packages/Password';
import { assert } from '@app/core/Assert';

type GetLoginTokensResponse = { accessToken: string; refreshToken: string };

export class LoginUserUseCase extends UseCase<LoginUserDTO, LoginUserResponse> {
  private readonly userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    super();
    this.userRepository = userRepository;
  }

  private async getLoginTokens(user: User): Promise<GetLoginTokensResponse> {
    const accessToken = JWT.createToken(
      {
        userId: user.userId,
      },
      authConfig.accessSecret,
      authConfig.accessTokenExpiryToken,
    );

    const authSecret = uuid();

    const refreshToken = JWT.createToken(
      {
        userId: user.userId,
      },
      authSecret,
      authConfig.refreshExpiryTime,
    );

    await this.userRepository.setAuthSecret(user.userId, authSecret);

    return { accessToken, refreshToken };
  }

  protected async runImpl(
    params: LoginUserDTO,
    context: any,
  ): Promise<LoginUserResponse> {
    const { email, password } = params;

    const user: User | null = await this.userRepository.getByEmail(email);

    assert(!!user, new EmailOrPasswordDidNotMatchError());

    assert(user.isEmailVerified, new EmailNotVerifiedError());

    const passwordMatched = await Password.compare(password, user.password);

    assert(passwordMatched, new EmailOrPasswordDidNotMatchError());

    const loginTokens = await this.getLoginTokens(user);

    return new LoginUserResponse(
      loginTokens.accessToken,
      loginTokens.refreshToken,
    );
  }

  protected inputConstraints = {
    email: {
      presence: true,
      email: true,
    },
    password: {
      presence: true,
      length: {
        minimum: 6,
        maximum: 30,
      },
    },
  };
}
