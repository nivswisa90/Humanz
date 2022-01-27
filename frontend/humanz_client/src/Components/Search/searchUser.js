import React, { useState } from "react";
import axios from "axios";

// Material ui imports
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import ShowSearch from "./showSearch";

const SearchUser = () => {
  const [userName, setUserName] = useState("");
  const [userByName, setUserByName] = useState();

  // Search user by name
  const searchUsers = async () => {
    axios({
      url: `http://localhost:5001/api/users/${userName}`,
      method: "get",
    })
      .then((res) => {
        setUserByName(res.data);
      })
      .catch((err) => {
        console.log(`Error getting all users: ${err}`);
      });
  };

  return (
    <div>
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
      {!userByName ? <></> : <ShowSearch userByName={userByName} />}
    </div>
  );
};
export default SearchUser;
