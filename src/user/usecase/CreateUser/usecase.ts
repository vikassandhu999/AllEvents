import User from 'user/domain/User';
import { SendVerificationEmailUseCase } from 'user/usecase/SendEmailVerification/usecase';
import {
  CreateUserDTO,
  CreateUserResponse,
  EmailAlreadyExistError,
} from 'user/usecase/CreateUser/types';
import { UseCase } from '@app/core/Usecase';
import { IUserRepository } from 'user/repositories/IUserRepository';
import Password from '@app/packages/Password';
import { assert } from '@app/core/Assert';

export class CreateUserUseCase extends UseCase<
  CreateUserDTO,
  CreateUserResponse
> {
  private readonly userRepository: IUserRepository;
  private readonly sendVerificationEmail: SendVerificationEmailUseCase;

  constructor(
    userRepository: IUserRepository,
    sendVerificationEmail: SendVerificationEmailUseCase,
  ) {
    super();
    this.userRepository = userRepository;
    this.sendVerificationEmail = sendVerificationEmail;
  }

  protected async runImpl(
    params: CreateUserDTO,
    context: any,
  ): Promise<CreateUserResponse> {
    const { email, password, firstName, lastName, about, imgAvatar } = params;

    const emailExists = await this.userRepository.emailExists(email);

    assert(!emailExists, new EmailAlreadyExistError());

    const hashedPassword = await Password.hashPassword(password);

    const user: User = new User({
      email,
      password: hashedPassword,
      firstName,
      lastName,
      about,
      imgAvatar,
    });

    await this.userRepository.save(user);

    try {
      await this.sendVerificationEmail.run({ email: user.email }, {});
    } catch (e) {
      console.log(e);
    }

    return new CreateUserResponse();
  }

  protected inputConstraints = {
    email: {
      presence: true,
      email: true,
    },
    imgAvatar: {
      url: true,
    },
    firstName: {
      presence: true,
      length: {
        minimum: 3,
        maximum: 30,
      },
    },
    lastName: {
      length: {
        minimum: 3,
        maximum: 30,
      },
    },
    password: {
      presence: true,
      length: {
        minimum: 6,
        maximum: 30,
      },
    },
    about: {
      length: {
        minimum: 6,
        maximum: 300,
      },
    },
  };
}
