import React, { useState } from "react";
import axios from "axios";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { makeStyles } from "@material-ui/core/styles";

import UserAddedSuccesfully from "../FeedbackUser/userAddedSuccesfully";
import "./users.css";

const useStyles = makeStyles(() => ({
  title: {
    fontWeight: 30,
    position: "relative",
    marginLeft: "18vh",
    marginTop: "3vh",
  },
}));
const AddUser = () => {
  // Flag to feedback user
  const [added, setAdded] = useState(false);
  const classes = useStyles();
  let newUser = {
    name: "",
    id: "",
    ip: "",
    phone: "",
  };
  // Create client object
  const handleSubmit = (event) => {
    event.preventDefault();
    newUser.name = event.target[0].value;
    newUser.id = event.target[1].value;
    newUser.ip = event.target[2].value;
    newUser.phone = event.target[3].value;
    addClient();
  };
  // Add client to database
  const addClient = () => {
    axios
      .post(`http://localhost:5001/api/users`, newUser)
      .then((res) => {
        if (res.status === 200) setAdded(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {!added ? (
        <>
          <Form className="add_user_form" onSubmit={handleSubmit}>
            <div>
              <h5 className={classes.title}>Add client to HUMANZ</h5>
            </div>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                className="samller_input"
                type="name"
                placeholder="Enter name"
              />
              <Form.Text className="text-muted">
                We'll never share your name with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>ID</Form.Label>
              <Form.Control
                className="samller_input"
                type="id"
                placeholder="id"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>IP</Form.Label>
              <Form.Control
                className="samller_input"
                type="ip"
                placeholder="IP"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                className="samller_input"
                type="phone"
                placeholder="Phone Number"
              />
            </Form.Group>
            <div className="d-grid gap-2">
              <Button variant="outline-secondary" type="submit" size="lg">
                Submit
              </Button>
            </div>
          </Form>{" "}
        </>
      ) : (
        <UserAddedSuccesfully />
      )}
    </div>
  );
};
export default AddUser;
