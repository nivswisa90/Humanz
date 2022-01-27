import React from "react";
import {NavLink} from 'react-router-dom';

import { Container } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles(() => ({
  title: {
    fontSize: 70,
    fontWeight: 90,
    position: "relative",
    left: "30vh",
    top: "10vh",
  },
  goHome: {
    position: "relative",
    top: "20vh",
    left: "60vh",
    width:"5px",
  },
}));
const WelcomePage = () => {
  const classes = useStyles();

  return (
    <Container>
      <h3 className={classes.title}>Welcome To Humanz.ai</h3>
      <NavLink to="/home" className={classes.goHome}>Go To Options</NavLink>
    </Container>
  );
};
export default WelcomePage;
