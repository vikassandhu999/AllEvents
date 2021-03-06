export type AuthEmailStatusDTO = {
  email: string;
};

export enum EMAIL_STATUS {
  EXISTS_NOT_VERIFIED = 'exists_not_verified',
  DOES_NOT_EXIST = 'does_not_exist',
  EXISTS_VERIFIED = 'exists_verified',
}

export class AuthEmailStatusResponse {
  emailStatus: EMAIL_STATUS;
  email: string;
  constructor(email: string) {
    this.email = email;
    this.emailStatus = EMAIL_STATUS.DOES_NOT_EXIST;
  }

  setEmailStatus(emailStatus: EMAIL_STATUS) {
    this.emailStatus = emailStatus;
  }
}
