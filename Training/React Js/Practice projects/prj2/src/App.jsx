import React from "react";
import DATA from "./Data";
import CardList from "./CardList";

export default function App() {
  return (
    <>
      <h1 className="heading-style">List of my fav series</h1>
      <CardList data={DATA} />
    </>
  );
}
