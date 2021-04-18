import User from "user/domain/User";
import {AuthEmailStatusDTO, AuthEmailStatusResponse, EMAIL_STATUS} from "user/usecase/AuthEmailStatus/types";
import {UseCase} from "@app/core/Usecase";
import {IUserRepository} from "user/repositories/IUserRepository";

export default class AuthEmailStatusUseCase extends UseCase<AuthEmailStatusDTO, AuthEmailStatusResponse> {
    protected inputConstraints = {
        email: {
            presence: true,
            email: true
        }
    };

    private userRepository: IUserRepository;

    constructor(userRepository: IUserRepository) {
        super();
        this.userRepository = userRepository;
    }

    protected async runImpl(params: AuthEmailStatusDTO, context: any): Promise<AuthEmailStatusResponse> {
        const user: User | null = await this.userRepository.getByEmail(params.email);

        const emailStatus = new AuthEmailStatusResponse(params.email);

        if (!user) {
            emailStatus.setEmailStatus(EMAIL_STATUS.DOES_NOT_EXIST)
        } else if (!user.isEmailVerified) {
            emailStatus.setEmailStatus(EMAIL_STATUS.EXISTS_NOT_VERIFIED)
        } else {
            emailStatus.setEmailStatus(EMAIL_STATUS.EXISTS_VERIFIED);
        }

        return emailStatus;
    }

}