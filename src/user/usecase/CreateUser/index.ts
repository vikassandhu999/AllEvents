import sendEmailVerificationUseCase from 'user/usecase/SendEmailVerification';
import { CreateUserUseCase } from 'user/usecase/CreateUser/usecase';
import { userRepository } from 'user/repositories';

const createUserUseCase = new CreateUserUseCase(
  userRepository,
  sendEmailVerificationUseCase,
);

export default createUserUseCase;
