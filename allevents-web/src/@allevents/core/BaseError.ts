export type BaseError = {
    httpCode: number;
    message: string;
    errorInfo: Object | undefined;
}