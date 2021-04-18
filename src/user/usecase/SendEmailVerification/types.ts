import {HttpErrors} from "@app/infra/http/errorCode";
import {BaseError} from "@app/core/BaseError";

export type SendVerificationEmailDTO = {
    email : string;
}

export class SendVerificationEmailResponse {
    status: string = "success";
}

export class UserEmailDoesNotExistError extends BaseError {
    constructor() {
        super("Email doesn't exist", HttpErrors.NOT_FOUND , {email : "Email doesn't exist"});
    }
}

export class UnableToSendEmailError extends BaseError {
    constructor() {
        super("Unable to send verification email" , HttpErrors.UNKNOWN);
    }
}