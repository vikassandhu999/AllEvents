import AuthEmailStatusUseCase from "User/usecase/AuthEmailStatus/usecase";
import {userRepository} from "User/repositories";

const authEmailStatusUseCase = new AuthEmailStatusUseCase(userRepository);

export default authEmailStatusUseCase;