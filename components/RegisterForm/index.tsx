import * as React from "react";
import { connect } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { signUp, signUpReset, setSession } from "@/redux/auth/actions";
import { Header, CustomAlert } from "@/components";
import { RegisterFormProps } from "@/types";
import { userRegister } from "./useRegister";

import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CircularProgress from "@mui/material/CircularProgress";

const defaultTheme = createTheme();

const RegisterForm: React.FC<RegisterFormProps> = (props) => {
  const register = userRegister(props);

  const _renderAlert = React.useMemo(() => {
    const open = register.signUpSuccess || register.signUpError;
    const type = register.signUpSuccess
      ? "success"
      : register.signUpError
      ? "error"
      : "success";
    const message = register.signUpSuccess
      ? "Register Success"
      : register.signUpError
      ? "Register Failed"
      : "success";

    return (
      open && (
        <CustomAlert
          open={open}
          onClose={register.onCloseAlert}
          type={type}
          message={message}
        />
      )
    );
  }, [register.signUpError, register.signUpSuccess]);

  const _renderForm = React.useMemo(() => {
    return (
      <Box component="form" onSubmit={() => {}} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          label="Full Name"
          autoFocus
          value={register.fullName}
          onChange={(e) => register.setFullName(e.target.value)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          label="Phone Number"
          autoFocus
          value={register.phoneNumber}
          onChange={(e) => register.setPhoneNumber(e.target.value)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          label="Email Address"
          autoFocus
          value={register.email}
          onChange={(e) => register.setEmail(e.target.value)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          label="Password"
          type="password"
          value={register.password}
          onChange={(e) => register.setPassword(e.target.value)}
        />
        <Button
          disabled={register.signUpLoading}
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={register.register}
        >
          {register.signUpLoading ? <CircularProgress size={30} /> : "Sign Up"}
        </Button>
        <Grid container justifyContent="flex-end">
          <Grid item>
            <Link href="/login" variant="body2">
              {"Already Have an Account? Sign In"}
            </Link>
          </Grid>
        </Grid>
      </Box>
    );
  }, [
    register.email,
    register.password,
    register.fullName,
    register.phoneNumber,
    register.register,
    register.signUpLoading,
  ]);

  return (
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
          <Header title="Sign Up" />
          {_renderForm}
        </Box>
      </Container>
    </ThemeProvider>
  );
};

const mapStateToProps = (state: RootState) => ({
  signUpResponse: state.auth.signUpResponse,
  signUpLoading: state.auth.signUpLoading,
  signUpError: state.auth.signUpError,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  signUp: (payload: any) => dispatch(signUp(payload)),
  setSession: (payload: any) => dispatch(setSession(payload)),
  signUpReset: () => dispatch(signUpReset()),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
