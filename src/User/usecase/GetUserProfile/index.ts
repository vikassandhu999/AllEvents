import {GetUserProfileUseCase} from "User/usecase/GetUserProfile/usecase";
import {userRepository} from "User/repositories";

const getUserProfileUseCase = new GetUserProfileUseCase(userRepository);

export default getUserProfileUseCase;