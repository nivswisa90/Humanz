import React from "react";

// Material ui imports
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

const UserDeletedSuccessfully = () => {
  return (
    <Alert severity="success">
      <AlertTitle>Success</AlertTitle>
      The client Deleted successfully — <strong>check it out!</strong>
    </Alert>
  );
};
export default UserDeletedSuccessfully;
