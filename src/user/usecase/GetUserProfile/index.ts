import { GetUserProfileUseCase } from 'user/usecase/GetUserProfile/usecase';
import { userRepository } from 'user/repositories';

const getUserProfileUseCase = new GetUserProfileUseCase(userRepository);

export default getUserProfileUseCase;
