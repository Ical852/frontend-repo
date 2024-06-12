export interface ProfilePageProps {
  userFetch: (payload: any) => void;
  userFetchLoading: any;
  userFetchError: any;
  userFetchResponse: any;

  userUpdate: (payload: any) => void;
  userUpdateLoading: any;
  userUpdateError: any;
  userUpdateResponse: any;
  userUpdateReset: () => void;

  signOut: (payload: any) => void;
  signOutLoading: any;
  signOutError: any;
  signOutResponse: any;
  signOutReset: () => void;

  resetSession: () => void;
  session: any;
}
