import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  render() {
    let relatives = ["abc", "sdcd", "jkf"];
    return (
      <>
        <ol key="relativeList">
          {relatives.map((relative, index) => {
            <li key={"relativeListItem" + (index + 1)}>{relative}</li>;
          })}
        </ol>
        //write your code here
      </>
    );
  }
}

export default App;
