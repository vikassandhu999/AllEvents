import User from "User/domain/User";
import {AuthEmailStatusDTO, AuthEmailStatusResponse, EMAIL_STATUS} from "User/usecase/AuthEmailStatus/types";
import {UseCase} from "XShared/core/Usecase";
import {IUserRepository} from "User/repositories/IUserRepository";

export default class AuthEmailStatusUseCase extends UseCase<AuthEmailStatusDTO, AuthEmailStatusResponse> {
    protected inputConstraints = {
        email : {
            presence:true,
            email:true
        }
    };

    private userRepository : IUserRepository;

    constructor(userRepository : IUserRepository) {
        super();
        this.userRepository=userRepository;
    }

    protected async runImpl(params: AuthEmailStatusDTO, context: any): Promise<AuthEmailStatusResponse> {
        const user: User | null = await this.userRepository.getByEmail(params.email);

        if(!user) {
           return new AuthEmailStatusResponse(EMAIL_STATUS.DOES_NOT_EXIST);
        }

        if(!user.isEmailVerified) {
            return new AuthEmailStatusResponse(EMAIL_STATUS.EXISTS_NOT_VERIFIED);
        }

        return new AuthEmailStatusResponse(EMAIL_STATUS.EXISTS_VERIFIED);
    }

}