import * as React from "react";
import { connect } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { signIn, signInReset, setSession } from "@/redux/auth/actions";
import { Header, CustomAlert } from "@/components";
import { LoginFormProps } from "@/types";
import { useLogin } from "./useLogin";

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

const LoginForm: React.FC<LoginFormProps> = (props) => {
  const login = useLogin(props);

  const _renderAlert = React.useMemo(() => {
    const open = login.signInSuccess || login.signInError;
    const type = login.signInSuccess
      ? "success"
      : login.signInError
      ? "error"
      : "success";
    const message = login.signInSuccess
      ? "Login Success"
      : login.signInError
      ? "Login Failed"
      : "success";

    return (
      open && (
        <CustomAlert
          open={open}
          onClose={login.onCloseAlert}
          type={type}
          message={message}
        />
      )
    );
  }, [login.signInError, login.signInSuccess]);

  const _renderForm = React.useMemo(() => {
    return (
      <Box component="form" onSubmit={() => {}} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          label="Email Address"
          autoFocus
          value={login.email}
          onChange={(e) => login.setEmail(e.target.value)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          label="Password"
          type="password"
          value={login.password}
          onChange={(e) => login.setPassword(e.target.value)}
        />
        <Button
          disabled={login.signInLoading}
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={login.login}
        >
          {login.signInLoading ? <CircularProgress size={30} /> : "Sign In"}
        </Button>
        <Grid container justifyContent="flex-end">
          <Grid item>
            <Link href="/register" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </Box>
    );
  }, [login.email, login.password, login.login, login.signInLoading]);

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
          <Header title="Sign In" />
          {_renderForm}
        </Box>
      </Container>
    </ThemeProvider>
  );
};

const mapStateToProps = (state: RootState) => ({
  signInResponse: state.auth.signInResponse,
  signInLoading: state.auth.signInLoading,
  signInError: state.auth.signInError,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  signIn: (payload: any) => dispatch(signIn(payload)),
  setSession: (payload: any) => dispatch(setSession(payload)),
  signInReset: () => dispatch(signInReset()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
