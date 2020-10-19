import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  relatives = ["4wall", "roof", "me"];
  render() {
    return (
      <>
        <ol key="realativeList">
          {this.relatives.map((relatives, index) => (
            <li key={`realativeListItem${index + 1}`}>{relatives}</li>
          ))}
        </ol>
      </>
    );
  }
}
export default App;
