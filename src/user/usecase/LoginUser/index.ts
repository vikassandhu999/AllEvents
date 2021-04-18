import {LoginUserUseCase} from "user/usecase/LoginUser/usecase";
import {userRepository} from "user/repositories";

const loginUserUseCase = new LoginUserUseCase(userRepository);

export default loginUserUseCase;