import React, { useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import UserList from "../Users/UserList";

const AllUsers = () => {
  const [allUsers, setAllUsers] = useState();

  const getAllClients = async () => {
    console.log("all users");
    axios
      .get("http://localhost:5001/api/users")
      .then((res) => {
        console.log(`Received users: ${res.data[0].name}`);
        setAllUsers(res.data);
        console.log(`all users - ${allUsers}`);
      })
      .catch((err) => {
        console.log(`Error getting all users: ${err}`);
      });
  };
  return (
    <div>
      <Button
        className="exsit_button"
        variant="outlined"
        onClick={getAllClients}
      >
        Show all clients
      </Button>
      {!allUsers ? <></> : <UserList allUsers={allUsers} />}
    </div>
  );
};
export default AllUsers;
