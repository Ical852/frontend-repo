import * as React from "react";
import { connect } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { userFetch, userUpdate, userUpdateReset } from "@/redux/user/actions";
import { signOut, resetSession, signOutReset } from "@/redux/auth/actions";
import { Header, CustomAlert } from "@/components";
import { ProfilePageProps } from "@/types";
import { useProfile } from "./useProfile";

import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CircularProgress from "@mui/material/CircularProgress";

const defaultTheme = createTheme();

const Profile: React.FC<ProfilePageProps> = (props) => {
  const profile = useProfile(props);

  const _renderAlert = React.useMemo(() => {
    const open = profile.signOutSuccess || profile.signOutError || profile.userUpdateSuccess || profile.userUpdateError;
    const message = profile.userUpdateSuccess ? "Profile Updated" : profile.userUpdateError ? "Failed to Update Profile" : "";
    const type = profile.userUpdateSuccess ? "success" : profile.userUpdateError ? "error" : "success"

    return (
      open && (
        <CustomAlert
          open={open}
          onClose={() => {}}
          type={type}
          message={message}
        />
      )
    );
  }, [profile.signOutSuccess, profile.signOutError, profile.userUpdateSuccess, profile.userUpdateError]);

  return (
    profile.session?.uid && (
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          {_renderAlert}
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Header title="Profile" />
            <Box component="form" onSubmit={() => {}} noValidate sx={{ mt: 1 }}>
              <TextField
                disabled
                margin="normal"
                required
                fullWidth
                label="Email Address"
                autoFocus
                value={profile.email}
                onChange={(e) => {}}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                label="Full Name"
                autoFocus
                value={profile.fullName}
                onChange={(e) => profile.setFullName(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                label="Phone Number"
                autoFocus
                value={profile.phoneNumber}
                onChange={(e) => profile.setPhoneNumber(e.target.value)}
              />
              <Button
                disabled={profile.userUpdateLoading}
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={profile.onUpdate}
              >
                {profile.userUpdateLoading ? <CircularProgress size={30} /> : "Update"}
              </Button>
              <Button
                disabled={profile.signOutLoading}
                fullWidth
                variant="contained"
                sx={{ mb: 2 }}
                onClick={profile.onLogout}
              >
                {profile.signOutLoading ? <CircularProgress size={30} /> : "Logout"}
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    )
  );
};

const mapStateToProps = (state: RootState) => ({
  userUpdateResponse: state.user.userUpdateResponse,
  userUpdateLoading: state.user.userUpdateLoading,
  userUpdateError: state.user.userUpdateError,

  userFetchResponse: state.user.userFetchResponse,
  userFetchLoading: state.user.userFetchLoading,
  userFetchError: state.user.userFetchError,

  signOutResponse: state.auth.signOutResponse,
  signOutLoading: state.auth.signOutLoading,
  signOutError: state.auth.signOutError,

  session: state.auth.session,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  userFetch: (payload: any) => dispatch(userFetch(payload)),
  userUpdate: (payload: any) => dispatch(userUpdate(payload)),
  signOut: (payload: any) => dispatch(signOut(payload)),
  userUpdateReset: () => dispatch(userUpdateReset()),
  resetSession: () => dispatch(resetSession()),
  signOutReset: () => dispatch(signOutReset()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
