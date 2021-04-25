export enum EMAIL_STATUS {
  EXISTS_NOT_VERIFIED = 'exists_not_verified',
  DOES_NOT_EXIST = 'does_not_exist',
  EXISTS_VERIFIED = 'exists_verified',
}

export type GetAuthStatusProps = {
  email: string;
};

export type AuthEmailStatusResponse = {
  emailStatus: EMAIL_STATUS;
  email: string;
};

export type LoginProps = {
  email: string;
  password: string;
};

export type SignupProps = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};
