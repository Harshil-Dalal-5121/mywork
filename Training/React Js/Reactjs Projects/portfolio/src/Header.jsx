import React from "react";
import NavLinks from "./NavLinks";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="name" title="Harshil">
          Harshil
        </div>
        <div className="nav-links">
          <NavLinks />
        </div>
      </div>
    </>
  );
};
export default Header;
