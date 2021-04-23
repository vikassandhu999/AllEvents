export class BaseError {
    httpCode: number;
    message: string;
    errorInfo: Object | undefined;
    constructor(message: string, httpCode: number, errorInfo?: Object) {
        this.httpCode = httpCode ?? 500;
        this.message = message;
        this.errorInfo = errorInfo;
    }
}