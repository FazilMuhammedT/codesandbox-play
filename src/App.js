import "./styles.css";
import React, { Component } from "react";

class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonValue: "Click Here",
      sub: "Button"
    };
  }
  ChangeResult = () => {
    this.setState({
      sub: "Clicked"
    });
  };
  render() {
    return (
      <div>
        {" "}
        Hello Workd
        <button onClick={this.ChangeResult}>{this.state.sub}</button>
      </div>
    );
  }
}

export default function App() {
  return (
    <div className="App">
      <Hello />
    </div>
  );
}
