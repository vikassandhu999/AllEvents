interface ApiErrorProps {
  message?: string;
  httpCode?: number;
  errorInfo?: Object;
  errorCode?: string;
}

export class ApiError {
  public httpCode: number;
  public message: string;
  public errorInfo: Object | undefined;
  public errorCode: string | undefined;
  constructor({ httpCode, message, errorInfo, errorCode }: ApiErrorProps) {
    this.httpCode = httpCode ?? 500;
    this.message = message ?? 'An unknown error';
    this.errorInfo = errorInfo;
    this.errorCode = errorCode;
  }

  toDTO(): any {
    return {
      httpCode: this.httpCode,
      message: this.message,
      errorInfo: this.errorInfo,
      errorCode: this.errorCode,
    };
  }
}
