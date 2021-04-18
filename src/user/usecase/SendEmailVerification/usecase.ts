import emailConfig from "config/emailConfig";
import {
    SendVerificationEmailDTO,
    SendVerificationEmailResponse,
    UserEmailDoesNotExistError
} from "user/usecase/SendEmailVerification/types";
import {Email, IEmailService} from "user/service/IEmailService";
import User from "user/domain/User";
import {JWT} from "@app/packages/jwt";
import {UseCase} from "@app/core/Usecase";
import {IUserRepository} from "user/repositories/IUserRepository";
import {assert} from "@app/core/Assert";


export class SendVerificationEmailUseCase extends UseCase<SendVerificationEmailDTO , SendVerificationEmailResponse>{
    private readonly emailService : IEmailService;
    private readonly userRepository : IUserRepository;

    constructor(userRepository : IUserRepository ,emailService: IEmailService) {
        super();
        this.emailService = emailService;
        this.userRepository = userRepository;
    }

    protected createVerificationEmail(email: string, verificationToken: string) : Email {
        const template=`
            <html lang="en">
                <head>
                <title>Email Verification</title>
                </head>
                <body>
                    <a href="/user/verify-email/${verificationToken}">Verify Email</a>
                </body>
            </html>
        `;

        return {
            to : email,
            from : emailConfig.senderEmail,
            subject : "Email Verification",
            body : template
        }
    }

    protected async runImpl(params: SendVerificationEmailDTO, context: any): Promise<SendVerificationEmailResponse> {
        const userEmail = params.email;

        const user : User | null = await this.userRepository.getByEmail(userEmail);

        assert(!!user , new UserEmailDoesNotExistError());

        const verificationToken = JWT.createToken({
            // @ts-ignore
            userId : user.userId,
        } , emailConfig.emailVerificationTokenSecret , emailConfig.emailVerificationExpiryTime);

        let verificationEmail = this.createVerificationEmail(userEmail, verificationToken);

        console.log(verificationEmail);

        await this.emailService.sendEmail(verificationEmail);

        return new SendVerificationEmailResponse();
    }

    protected inputConstraints = {
        email: {
            presence: true,
            email: true
        }
    }
}