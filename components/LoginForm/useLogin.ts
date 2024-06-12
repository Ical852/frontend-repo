import { useCallback, useEffect, useState } from "react";
import { LoginFormProps } from "@/types";
import { useRouter } from 'next/router';

export const useLogin = (props: LoginFormProps) => {
  const {
    signIn,
    signInLoading,
    signInResponse,
    signInError,
    signInReset,
    setSession,
  } = props;

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = useCallback(async () => {
    signIn({
      email,
      password,
    });
    setEmail("");
    setPassword("");
  }, [email, password]);

  useEffect(() => {
    if (signInResponse?.status === 200) {
      setSession(signInResponse?.data);
      console.log(signInResponse?.data)
      setTimeout(() => {
        signInReset();
      }, 1000);
      setTimeout(() => {
        router.push('/profile')
      }, 2000);
    }
    if (signInError) {
      setTimeout(() => {
        signInReset();
      }, 2000);
    }
    return;
  }, [signInResponse]);

  return {
    email,
    setEmail,
    password,
    setPassword,
    login,
    signInLoading,
    signInError,
    signInSuccess: signInResponse?.status === 200,
    onCloseAlert: () => signInReset(),
  };
};
