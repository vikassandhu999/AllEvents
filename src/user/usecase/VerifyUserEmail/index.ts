import { userRepository } from 'user/repositories';
import { VerifyUserEmailUseCase } from 'user/usecase/VerifyUserEmail/usecase';

const verifyUserEmailUseCase = new VerifyUserEmailUseCase(userRepository);

export default verifyUserEmailUseCase;
