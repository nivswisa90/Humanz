import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./users.css";
import { getUser, getAllUsers } from "./userUtils";
import axios from "axios";
import UserList from "./UserList";
const Users = () => {
  const [userName, setUserName] = useState("");
  const [allUsers, setAllUsers] = useState();

  const searchUsers = async () => {
    await getUser(userName)
      .then((user) => {
        console.log(`Frontend got user: ${user}`);
      })
      .catch((err) => null);
  };
  const getAllClients = async () => {
    console.log("all users");
    axios
      .get("http://localhost:5001/api/users")
      .then((res) => {
        console.log(`Received users: ${res.data[0].name}`);
        // return res;
        setAllUsers(res.data);
        console.log(`all users- ${allUsers[0].name}`);
      })
      .catch((err) => {
        console.log(`Error getting all users: ${err}`);
        return null;
      });
    // await getAllUsers()
    //   .then((users) => {
    //     console.log(`Frontend got all users: ${users.data[0].name}`);
    //   })
    //   .catch((err) => null);
  };

  return (
    <div className="box">
      <TextField
        className="search_field"
        id="standard-basic"
        label="Search Client"
        variant="standard"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <Button
        className="search_button"
        variant="outlined"
        onClick={searchUsers}
      >
        Search
      </Button>
      <Button
        className="exsit_button"
        variant="outlined"
        onClick={getAllClients}
      >
        Show all clients
      </Button>
      <Button className="exsit_button" variant="outlined">
        Add client
      </Button>
      {!allUsers ? <></> : <UserList allUsers={allUsers} />}
      {/* <Button className="exsit_button" variant="outlined">
        Remove Client
      </Button>  */}
    </div>
  );
};
export default Users;
