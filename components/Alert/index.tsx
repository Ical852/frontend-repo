import React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { AlertProps } from "@/types";

const CustomAlert = (props: AlertProps) => {
  const { message, open, onClose, type } = props;

  return (
    <Snackbar
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={open}
      autoHideDuration={2000}
      onClose={onClose}
    >
      <MuiAlert
        elevation={6}
        variant="filled"
        onClose={onClose}
        severity={type}
      >
        {message}
      </MuiAlert>
    </Snackbar>
  );
};

export default CustomAlert;
