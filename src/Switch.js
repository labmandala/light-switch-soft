import React, { Component } from "react";

const Switch = (props) => (
  <div className="switch-plate">
    <div className="screw" />
    // Add onClick event listener in Switch component to call eventHandler passed down from App component
    <div className="switch" onClick={props.toggle}>
      <div className="switch-handle" />
    </div>
    <div className="screw" />
  </div>
);

export default Switch;
