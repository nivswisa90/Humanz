import "./App.css";
import React from "react";
import AllRoutes from "./Router/allRoutes";

// Material UI imports
import "@fontsource/roboto/400.css";

const App = () => {
  return (
    <div className="backgroundImage">
      <AllRoutes />
    </div>
  );
};

export default App;
