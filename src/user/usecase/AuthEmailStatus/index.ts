import AuthEmailStatusUseCase from 'user/usecase/AuthEmailStatus/usecase';
import { userRepository } from 'user/repositories';

const authEmailStatusUseCase = new AuthEmailStatusUseCase(userRepository);

export default authEmailStatusUseCase;
