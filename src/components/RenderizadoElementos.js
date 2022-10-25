import React, { Component } from "react";
import data from "../helpers/data.json";

function ElementoLista(props) {
  return (
    <li>
      <a href={props.link}>
        {props.infoNum}. {props.infoPage}
      </a>
    </li>
  );
}

export default class RenderizadoElementos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      seasons: ["Primavera", "Invierno", "Otoño", "Verano"],
    };
  }

  render() {
    return (
      <div>
        <h3>Renderizado de Elementos:</h3>
        <ul>
          {data.frameworks.map((el, index) => {
            return (
              <ElementoLista
                key={index}
                link={el.web}
                infoNum={el.id}
                infoPage={el.name}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}
