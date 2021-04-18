import {HttpErrors} from "@app/infra/http/errorCode";
import {BaseError} from "@app/core/BaseError";

export type LoginUserDTO = {
    email : string;
    password : string;
}

export class LoginUserResponse {
    constructor(public accessToken : string, public refreshToken : string) {
    }
}

export class EmailOrPasswordDidNotMatchError extends BaseError {
    constructor() {
        super("Email or Password didn't match", HttpErrors.UNAUTHENTICATED);
    }
}

export class EmailNotVerifiedError extends BaseError {
    constructor() {
        super("Email is not verified", HttpErrors.PERMISSION_DENIED , {email : "Email address is not verified"});
    }
}