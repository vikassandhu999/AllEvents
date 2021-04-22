import {BaseError} from "@allevents/core/BaseError";

export const isInvalidParamError = (error : BaseError) => {
    return error.httpCode===400;
}