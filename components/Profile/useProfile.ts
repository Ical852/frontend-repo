import { useCallback, useEffect, useState } from "react";
import { ProfilePageProps } from "@/types";
import { useRouter } from "next/router";

export const useProfile = (props: ProfilePageProps) => {
  const {
    session,
    resetSession,

    userFetch,
    userFetchLoading,
    userFetchError,
    userFetchResponse,

    userUpdate,
    userUpdateReset,
    userUpdateLoading,
    userUpdateError,
    userUpdateResponse,

    signOut,
    signOutReset,
    signOutLoading,
    signOutError,
    signOutResponse,
  } = props;

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const onUpdate = useCallback(async () => {
    userUpdate({ token: session?.token, phoneNumber, fullName })
  }, [fullName, phoneNumber, session]);

  const onLogout = useCallback(async () => {
    signOut({ token: session?.token })
  }, [session]);

  const getUserData = useCallback(() => {
    userFetch({ token: session?.token });
  }, [session]);

  useEffect(() => {
    if (!session?.token) {
      console.log(session);
      setTimeout(() => {
        router.push("/login");
        
      }, 1000);
    } else {
      getUserData();
    }
    return;
  }, [session]);

  useEffect(() => {
    if (userFetchResponse?.status === 200) {
      setEmail(userFetchResponse?.data?.email);
      setFullName(userFetchResponse?.data?.fullName);
      setPhoneNumber(userFetchResponse?.data?.phoneNumber);
    }
    if (userFetchResponse?.status === 401) {
      resetSession();
      setTimeout(() => {
        router.push("/login");
      }, 500);
    }
  }, [userFetchResponse]);

  useEffect(() => {
    if (signOutResponse?.status === 200) {
      resetSession();
      signOutReset();
    }
    return;
  }, [signOutResponse]);

  useEffect(() => {
    if (userUpdateResponse?.status === 200) {
      setTimeout(() => {
        userUpdateReset();
      }, 1000);
    }
    if (userUpdateError) {
      setTimeout(() => {
        userUpdateReset();
      }, 2000);
    }
  }, [userUpdateResponse]);

  return {
    email,
    setEmail,
    fullName,
    setFullName,
    phoneNumber,
    setPhoneNumber,
    session,
    onLogout,
    signOutLoading,
    signOutSuccess: signOutResponse?.status === 200,
    signOutError,
    onUpdate,
    userUpdateSuccess: userUpdateResponse?.status === 200,
    userUpdateError,
    userUpdateLoading,
  };
};
