import React, { useState } from "react";
import axios from "axios";

// Material ui imports
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@material-ui/core/Container";
import UserDeletedSuccessfully from "../FeedbackUser/userDeletedSuccesfully";

const DeleteUser = () => {
  const [userName, setUserName] = useState("");
  // Flag to feedback user
  const [deleted, setDeleted] = useState(false);

  // Delete user by name
  const deleteUser = async () => {
    axios({
      url: `http://localhost:5001/api/users/${userName}`,
      method: "delete",
    })
      .then((res) => {
        if (res.data.name !== null) setDeleted(true);
      })
      .catch((err) => {
        console.log(`Error deleting user: ${err}`);
        return null;
      });
  };
  return (
    <Container>
      {!deleted ? (
        <>
          <TextField
            id="standard-basic"
            label="Delete Client"
            variant="standard"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <Button
            className="search_button"
            variant="outlined"
            onClick={deleteUser}
          >
            Delete
          </Button>
        </>
      ) : (
        <UserDeletedSuccessfully />
      )}
    </Container>
  );
};
export default DeleteUser;
