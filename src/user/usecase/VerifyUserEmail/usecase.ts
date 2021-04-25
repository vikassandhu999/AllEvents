import emailConfig from 'config/emailConfig';
import { JWT } from '@app/packages/jwt';
import {
  InvalidVerificationTokenError,
  VerifyUserEmailDTO,
  VerifyUserEmailResponse,
} from 'user/usecase/VerifyUserEmail/types';
import { UseCase } from '@app/core/Usecase';
import { IUserRepository } from 'user/repositories/IUserRepository';
import { assert } from '@app/core/Assert';

export class VerifyUserEmailUseCase extends UseCase<
  VerifyUserEmailDTO,
  VerifyUserEmailResponse
> {
  private readonly userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    super();
    this.userRepository = userRepository;
  }

  protected async runImpl(
    params: VerifyUserEmailDTO,
    context: any,
  ): Promise<VerifyUserEmailResponse> {
    const { verificationToken } = params;

    const decoded = await JWT.verify(
      verificationToken,
      emailConfig.emailVerificationTokenSecret,
    );

    assert(!!decoded, new InvalidVerificationTokenError());

    await this.userRepository.setIsEmailVerified(decoded.userId, true);

    return new VerifyUserEmailResponse();
  }

  protected inputConstraints = {
    verificationToken: {
      presence: true,
    },
  };
}
