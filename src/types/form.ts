export interface SignupForm {
  email: string;
  password: string;
  passwordCheck: string;
}

export type SignupData = Omit<SignupForm, "passwordCheck">;

export type EmailData = Pick<SignupForm, "email">;