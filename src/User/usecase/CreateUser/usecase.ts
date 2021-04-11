import { CreateUserDTO, CreateUserResponse, EmailAlreadyExistError } from "./types";
import { IUserRepository } from "../../repositories/IUserRepository";
import { User } from "../../domain/User";
import Password from "../../../XShared/packages/Password";
import { SendVerificationEmailUseCase } from "../SendEmailVerification/usecase";
import { assert } from "../../../XShared/core/Assert";
import {UseCase} from "../../../XShared/core/Usecase";

export class CreateUserUseCase extends UseCase<CreateUserDTO , CreateUserResponse>{
    private readonly userRepository: IUserRepository;
    private readonly sendVerificationEmail: SendVerificationEmailUseCase;

    constructor(userRepository: IUserRepository, sendVerificationEmail: SendVerificationEmailUseCase) {
        super();
        this.userRepository = userRepository;
        this.sendVerificationEmail = sendVerificationEmail;
    }

    protected async runImpl(params: CreateUserDTO, context: any): Promise<CreateUserResponse> {

        const { email, password } = params;

        const emailExists = await this.userRepository.emailExists(email);

        assert(!emailExists, new EmailAlreadyExistError());

        const hashedPassword = await Password.hashPassword(password);

        const user: User = new User({
            ...params,
            password: hashedPassword,
            authSecret: undefined,
            isEmailVerified: false,
            isDeleted: false
        });

        await this.userRepository.save(user);

        try {
            await this.sendVerificationEmail.run({ email: user.email }, {});
        } catch (e) {
            console.log(e);
        }

        return new CreateUserResponse();
    }

    protected inputConstraints = {
        email: {
            presence: true,
            email: true
        },
        imgAvatar : {
          presence:true,
          url : true
        },
        fullName: {
            presence: true,
            length: {
                minimum: 3,
                maximum: 30
            }
        },
        password: {
            presence: true,
            length: {
                minimum: 6,
                maximum: 30
            }
        }
    }
}