import React from "react";

// Material ui imports
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

const UserAddedSuccessfully = () => {
  return (
    <Alert severity="success">
      <AlertTitle>Success</AlertTitle>
      The client added successfully — <strong>check it out!</strong>
    </Alert>
  );
};
export default UserAddedSuccessfully;
