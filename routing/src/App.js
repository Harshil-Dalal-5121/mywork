import React from "react";
import { Outlet } from "react-router";
import "./App.css";

import Header from "./Header";

const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default App;
