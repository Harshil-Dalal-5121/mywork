import React from "react";

import Navbar from "react-bootstrap/Navbar";

const AxelorNavbar = () => {
  return (
    <Navbar sticky="top" bg="light" variant="light">
      <Navbar.Brand href="#home" className="mx-2 py-3">
        Axelor POS
      </Navbar.Brand>
    </Navbar>
  );
};

export default AxelorNavbar;
