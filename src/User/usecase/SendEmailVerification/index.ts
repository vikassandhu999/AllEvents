import {SendVerificationEmailUseCase} from "./usecase";
import {userRepository} from "User/repositories";
import {emailService} from "User/service";

const sendEmailVerificationUseCase = new SendVerificationEmailUseCase(userRepository,emailService);

export default sendEmailVerificationUseCase;