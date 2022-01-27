import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "../Components/Welcome/mainPage";
import Users from "../Components/Users/users";
import AddUser from "../Components/Users/addUser";
import WelcomePage from "../Components/Welcome/welcomePage";

const ReactRouter = () => {
  return (
    // <Router>
    <Routes>
      <Route exact path="/" element={<WelcomePage />} />
      <Route exact path="/home" element={<MainPage />} />
      <Route path="/users" element={<Users />} />
      <Route exact path="/adduser" element={<AddUser />} />
    </Routes>
    // </Router>
  );
};
export default ReactRouter;
