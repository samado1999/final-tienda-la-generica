import React, { Component } from "react";
import "./test-styles.css";

export default class Test extends Component {
  render() {
    return (
      <div className="container">
        <p className="container-p">container</p>
        <div className="child-1">
          child-1
          <div className="child-2">child-2</div>
        </div>
      </div>
    );
  }
}
