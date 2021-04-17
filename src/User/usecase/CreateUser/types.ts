import {HttpErrors} from "XShared/infra/http/errorCode";
import {IUser} from "User/domain/User";
import {BaseError} from "XShared/core/BaseError";

export type CreateUserDTO = Pick<IUser,
    "email" |
    "firstName" |
    "lastName" |
    "password" |
    "imgAvatar" |
    "about">;

export class CreateUserResponse {
    status : string = "success";
}

export class EmailAlreadyExistError extends BaseError {
    constructor() {
        super("Email already exists" ,HttpErrors.ALREADY_EXISTS ,{email : "Email already exists"});
    }
}