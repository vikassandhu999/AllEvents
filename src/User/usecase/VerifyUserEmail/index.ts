import {userRepository} from "User/repositories";
import {VerifyUserEmailUseCase} from "User/usecase/VerifyUserEmail/usecase";


const verifyUserEmailUseCase = new VerifyUserEmailUseCase(userRepository);

export {
    verifyUserEmailUseCase
}