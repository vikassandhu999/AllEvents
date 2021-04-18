import {HttpErrors} from "@app/infra/http/errorCode";
import {BaseError} from "@app/core/BaseError";


export type VerifyUserEmailDTO = {
    verificationToken : string;
}

export class VerifyUserEmailResponse {
    status : string = "success";
}

export class InvalidVerificationTokenError extends BaseError {
    constructor() {
        super("Invalid verificationToken", HttpErrors.INVALID_ARGUMENT , {verificationToken : "Verification token is invalid"});
    }
}