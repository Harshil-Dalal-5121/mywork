import React from "react";

import Navbar from "react-bootstrap/Navbar";

const PosNavbar = () => {
  return (
    <Navbar sticky="top" bg="dark" variant="dark">
      <Navbar.Brand href="#home" className="mx-2 py-3">
        Axelor POS
      </Navbar.Brand>
    </Navbar>
  );
};

export default PosNavbar;
