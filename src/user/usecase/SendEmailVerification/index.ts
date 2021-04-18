import {SendVerificationEmailUseCase} from "./usecase";
import {userRepository} from "user/repositories";
import {emailService} from "user/service";

const sendEmailVerificationUseCase = new SendVerificationEmailUseCase(userRepository,emailService);

export default sendEmailVerificationUseCase;