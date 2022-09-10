import React, { Component, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "../styles/App.css";
import Form from "./Form";
import List from "./List";

const App = () => {
  const { items } = useSelector((store) => store.bicycle);

  return (
    <div id="main">
      <h1>Bicycle Repair App</h1>
      <Form />
      {items.map((e, i) => (
        <List key={i} {...e} id={i} />
      ))}
    </div>
  );
};

export default App;
