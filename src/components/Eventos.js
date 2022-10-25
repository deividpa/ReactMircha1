import React, { Component } from "react";

export default class Eventos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contadorClick: 0,
    };

    this.sumar = this.sumar.bind(this);
    //this.restar = this.restar.bind(this);
  }

  sumar(e) {
    console.log(this);
    this.setState = {
      contadorClick: this.state.contadorClick + 1,
    };
  }

  restar(e) {
    console.log("Restando");
    this.setState = {
      contadorClick: this.state.contadorClick - 1,
    };
  }

  render() {
    return (
      <div>
        <h2>Eventos en elementos de Clases</h2>
        <h2>{this.state.contadorClick}</h2>
        <div>
          <button onClick={this.sumar}>Aumentar</button>
          <button onClick={this.restar}>Restar</button>
        </div>
      </div>
    );
  }
}
