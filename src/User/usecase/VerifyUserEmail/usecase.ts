import emailConfig from "config/emailConfig";
import {JWT} from "XShared/packages/jwt";
import {
    InvalidVerificationTokenError,
    VerifyUserEmailDTO,
    VerifyUserEmailResponse
} from "User/usecase/VerifyUserEmail/types";
import {UseCase} from "XShared/core/Usecase";
import {IUserRepository} from "User/repositories/IUserRepository";
import {assert} from "XShared/core/Assert";


export class VerifyUserEmailUseCase extends UseCase<VerifyUserEmailDTO, VerifyUserEmailResponse>{
    private readonly userRepository : IUserRepository;

    constructor(userRepository : IUserRepository) {
        super();
        this.userRepository = userRepository;
    }

    protected async runImpl(params: VerifyUserEmailDTO , context: any): Promise<VerifyUserEmailResponse> {
        const { verificationToken } = params;

        const decoded = await JWT.verify(verificationToken , emailConfig.emailVerificationTokenSecret);

        assert(!!decoded , new InvalidVerificationTokenError());

        await this.userRepository.setIsEmailVerified(decoded.userId , true);

        return new VerifyUserEmailResponse();
    }

    protected inputConstraints = {
        verificationToken: {
            presence: true
        }
    }
}