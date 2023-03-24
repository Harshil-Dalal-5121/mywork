import React from "react";
import { Button } from "react-bootstrap";
import { House } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const nav = useNavigate();
  const goTo = (key) => {
    nav(`/${key}`);
  };

  return (
    <div>
      <h1>
        HomePage <House className="icon" />
      </h1>
      <Button variant="primary" onClick={() => goTo("about")}>
        Go to About
      </Button>
      <br />
      <Button variant="primary" onClick={() => goTo("contact")}>
        Go to Contact
      </Button>
      <br />
      <Button variant="primary" onClick={() => goTo("blogs")}>
        Go To Blogs
      </Button>
    </div>
  );
};

export default HomePage;
