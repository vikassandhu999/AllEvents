import {LoginUserUseCase} from "User/usecase/LoginUser/usecase";
import {userRepository} from "User/repositories";


const loginUserUseCase = new LoginUserUseCase(userRepository);

export default loginUserUseCase;