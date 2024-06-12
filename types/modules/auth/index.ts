export interface LoginFormProps {
  signIn: (payload: any) => void;
  signInReset: () => void;
  setSession: (payload: any) => void;
  signInLoading: any;
  signInResponse: any;
  signInError: any;
}

export interface RegisterFormProps {
  signUp: (payload: any) => void;
  signUpReset: () => void;
  setSession: (payload: any) => void;
  signUpLoading: any;
  signUpResponse: any;
  signUpError: any;
}
