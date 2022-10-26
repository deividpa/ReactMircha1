import React, { Component } from "react";

export class EventosES6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contadorClick: 0,
    };

    this.sumar = this.sumar.bind(this);
    this.restar = this.restar.bind(this);
  }

  sumar(e) {
    console.log(this);
    this.setState({
      contadorClick: this.state.contadorClick + 1,
    });
  }

  restar(e) {
    console.log(this);
    this.setState({
      contadorClick: this.state.contadorClick - 1,
    });
  }

  render() {
    return (
      <div>
        <h2>Eventos en elementos de Clases ES6</h2>
        <div>
          <button onClick={this.sumar}>Aumentar</button>
          <button onClick={this.restar}>Restar</button>
        </div>
        <h2>{this.state.contadorClick}</h2>
      </div>
    );
  }
}

export class EventosES7 extends Component {
  state = {
    contadorClick2: 0,
  };

  sumar2 = (e) => {
    console.log(this);
    this.setState({
      contadorClick2: this.state.contadorClick2 + 1,
    });
  };

  restar2 = (e) => {
    this.setState({
      contadorClick2: this.state.contadorClick2 - 1,
    });
  };

  render() {
    return (
      <div>
        <h2>Eventos en elementos de Clases ES7</h2>
        <div>
          <button onClick={this.sumar2}>Aumentar</button>
          <button onClick={this.restar2}>Restar</button>
        </div>
        <h2>{this.state.contadorClick2}</h2>
      </div>
    );
  }
}

// Componente de Botón para prueva de evento Personalizado

function Boton(props) {
  return (
    <button onClick={props.myOnClick}>Esto es un boton personalizado</button>
  );
}

export class MasSobreEventos extends Component {
  handleClick = (e, secParam) => {
    console.log(e.target);
    console.log(secParam);
  };

  render() {
    return (
      <div>
        <h2>Más inforación de Eventos:</h2>
        <button
          onClick={(e) => {
            this.handleClick(
              e,
              "Esto es un segundo parámetro, aparte del event"
            );
          }}
        >
          Saludar
        </button>
        <hr />
        <Boton
          myOnClick={(e) => {
            this.handleClick(
              e,
              "Este es un mensaje desde un evento personalizado"
            );
          }}
        />
      </div>
    );
  }
}
