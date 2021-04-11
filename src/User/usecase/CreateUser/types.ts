import {BaseError} from "../../../XShared/core/BaseError";
import { HttpErrors } from "../../../XShared/infra/http/errorCode";

export type CreateUserDTO = {
    fullName: string;
    imgAvatar : string;
    email: string;
    password: string;
}

export class CreateUserResponse {
    status : string = "success";
}

export class EmailAlreadyExistError extends BaseError {
    constructor() {
        super("Email already exists" ,HttpErrors.ALREADY_EXISTS ,{email : "Email already exists"});
    }
}