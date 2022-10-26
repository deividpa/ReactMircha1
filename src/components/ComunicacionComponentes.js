import React, { Component } from "react";

export default class Padre extends Component {
  state = { contador: 0 };

  incrementarContador = (e) => {
    this.setState({
      contador: this.state.contador + 1,
    });
  };

  render() {
    return (
      <div>
        <h2>Comunicación entre Coponentes</h2>
        <Hijo
          incrementarCont={this.incrementarContador}
          mensaje="Este es un mensaje por medio del componente Hijo: 2"
        />
      </div>
    );
  }
}

function Hijo(props) {
  return (
    <>
      <button onClick={props.incrementarCont}>Incrementar:</button>
    </>
  );
}
