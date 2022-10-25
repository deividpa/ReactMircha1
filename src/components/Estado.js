import React, { Component } from "react";

export default class Estado extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };

    // setInterval(() => {
    //   this.setState({
    //     contador: this.state.contador + 1,
    //   });
    // }, 4000);
  }

  render() {
    return (
      <div>
        <p>
          Este es el componente Estado y tiene un contador con valor:{" "}
          {this.state.contador}
        </p>
      </div>
    );
  }
}
