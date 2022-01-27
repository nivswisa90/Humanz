import React, { useState } from "react";

import "./users.css";


import SearchUser from "../Search/searchUser";
import DeleteUser from "./deleteUser";
import AllUsers from "../Search/allUsers";

//Material UI imports
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import AddUser from "./addUser";

const useStyles = makeStyles(() => ({
  subTitels: {
    fontSize: "20px",
  },
  playIcon: {
    marginLeft: "15rem",
  },
}));

const Users = () => {
  const classes = useStyles();
  const [testKind, setTestKind] = useState([
    { id: 1, label: "Search Client", isChecked: false },
    { id: 2, label: "Add Client", isChecked: false },
    { id: 3, label: "Delete Client", isChecked: false },
    { id: 4, label: "Existing Client", isChecked: false },
  ]);

    const handleChange = (checkBox) => {
      setTestKind(
        testKind.map((kind) =>
          kind.id == checkBox.target.value
            ? { ...kind, isChecked: !kind.isChecked }
            : { ...kind, isChecked: false }
        )
      );
    };


  return (
    <Container maxWidth="sm">
      <div>
     <Typography
          className={classes.subTitels}
          variant="overline"
          gutterBottom
        >
          Choose operation:
        </Typography>

        <div>
          {testKind.map((item) => (
            <p key={item.id}>
              <FormControlLabel
                label={item.label}
                control={
                  <Checkbox checked={item.isChecked} onChange={handleChange} />
                }
                value={item.id}
              />
            </p>
          ))}
        </div>
      </div>
      {testKind[0].isChecked && <div> <SearchUser /> </div>}
      {testKind[1].isChecked && <div> <AddUser  /> </div>}
      {testKind[2].isChecked && <div> <DeleteUser /> </div>}
       {testKind[3].isChecked && <div> <AllUsers /> </div>} 


    </Container>
  );
};

export default Users;
