import sendEmailVerificationUseCase from "User/usecase/SendEmailVerification";
import {CreateUserUseCase} from "User/usecase/CreateUser/usecase";
import {userRepository} from "User/repositories";


const createUserUseCase = new CreateUserUseCase(userRepository,sendEmailVerificationUseCase);

export default createUserUseCase;