import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  render() {
    let relatives = ["4wall", "roof", "me", "Pranay"];
    return (
      <>
        <ol key="realativeList">
          {relatives.map((relatives, index) => (
            <li key={`realativeListItem${index + 1}`}>{relatives}</li>
          ))}
        </ol>
      </>
    );
  }
}
export default App;
