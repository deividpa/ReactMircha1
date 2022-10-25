import React, { Component } from "react";

export default class Estado2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador2: 0,
    };

    // setInterval(() => {
    //   this.setState({
    //     contador2: this.state.contador2 + 1,
    //   });
    // }, 2000);
  }

  render() {
    return (
      <div>
        Este es el estado #2 y se actualizará en la mitad del tiempo:{" "}
        {this.state.contador2}
      </div>
    );
  }
}
