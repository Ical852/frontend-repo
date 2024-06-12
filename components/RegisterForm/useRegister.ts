import { useCallback, useEffect, useState } from "react";
import { RegisterFormProps } from "@/types";
import { useRouter } from "next/router";

export const userRegister = (props: RegisterFormProps) => {
  const {
    signUp,
    signUpLoading,
    signUpResponse,
    signUpError,
    signUpReset,
    setSession,
  } = props;

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const register = useCallback(async () => {
    signUp({
      email,
      password,
      fullName,
      phoneNumber,
    });
    setEmail("");
    setPassword("");
    setFullName("");
    setPhoneNumber("");
  }, [email, password]);

  useEffect(() => {
    if (signUpResponse?.status === 201) {
      setSession(signUpResponse?.data);
      setTimeout(() => {
        signUpReset();
      }, 1000);
      setTimeout(() => {
        router.push("/profile");
      }, 2000);
    }
    if (signUpError) {
      setTimeout(() => {
        signUpReset();
      }, 2000);
    }
    return;
  }, [signUpResponse]);

  return {
    email,
    setEmail,
    password,
    setPassword,
    fullName,
    setFullName,
    phoneNumber,
    setPhoneNumber,
    register,
    signUpLoading,
    signUpError,
    signUpSuccess: signUpResponse?.status === 201,
    onCloseAlert: () => signUpReset(),
  };
};
