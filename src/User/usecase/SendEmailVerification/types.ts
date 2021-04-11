import {HttpErrors} from "XShared/infra/http/errorCode";
import {BaseError} from "XShared/core/BaseError";


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