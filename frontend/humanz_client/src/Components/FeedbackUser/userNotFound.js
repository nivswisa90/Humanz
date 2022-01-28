import React from "react";

// Material ui imports
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

const UserNotFound = () => {
  return (
    <Alert severity="error">
      <AlertTitle>Error</AlertTitle>
      The client not found — <strong>Make sure there is not mistakes in the name!</strong>
    </Alert>
  );
};
export default UserNotFound;
