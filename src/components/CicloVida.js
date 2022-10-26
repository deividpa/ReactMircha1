import React, { Component } from "react";

function BotonClick(props) {
  return <button onClick={props.myOwnClick}>{props.msg}</button>;
}

class Reloj extends Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    console.log("3. El componente ha sido eliminado del DOM.");
  }

  render() {
    return <h4>{this.props.hora}</h4>;
  }
}

export default class CicloVida extends Component {
  constructor(props) {
    super(props);
    console.log("0. El componente se inciailiza, aún no está en el DOM.");

    this.state = {
      hora: new Date().toLocaleTimeString(),
      visible: false,
    };

    this.temporizador = null;
  }

  componentDidMount() {
    console.log("1. El componente ya se encuentra en el DOM");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("2. El estado o las props del componente han cambiado");
    console.log(prevState);
  }

  tictac = () => {
    this.temporizador = setInterval(() => {
      this.setState({
        hora: new Date().toLocaleTimeString(),
      });
    }, 2000);
  };

  iniciarCont = (e, data) => {
    console.log(e.target + ": " + data);
    this.tictac();
    this.setState({
      visible: true,
    });
  };

  detenerCont = (e, data) => {
    console.log(e.target + ": " + data);
    clearInterval(this.temporizador);
    this.setState({ visible: false });
  };

  render() {
    console.log(
      "4. El componente se dibuja o se redibuja si hay algún cambio en props o state."
    );
    return (
      <>
        {this.state.visible && <Reloj hora={this.state.hora} />}
        <h2>Ciclo de vida de los Componentes de Clase</h2>
        <h3>{this.state.hora}</h3>
        <BotonClick
          msg="Inicializar"
          myOwnClick={(e) => {
            this.iniciarCont(e, "Se inició el temporizador");
          }}
        />
        <BotonClick
          msg="Detener"
          myOwnClick={(e) => {
            this.detenerCont(e, "Se detuvo el temporizador.");
          }}
        />
      </>
    );
  }
}
