import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import MainPage from "../Components/MainPage";
import Users from "../Components/Users/users";

const ReactRouter = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route exact path="/users" element={<Users />} />
      </Routes>
    </Router>
  );
};
export default ReactRouter;
