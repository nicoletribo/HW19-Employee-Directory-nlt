import React from "react";
import "./style.css";

function Jumbotron() {
  return (
  <div>
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">Employee Directory</h1>
        <p className="lead">Search employees by name or select the name columns to sort alphabetically.</p>
      </div>
    </div>
  </div>
  );
}

export default Jumbotron;
