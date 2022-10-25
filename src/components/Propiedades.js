import React from "react";
import PropTypes from "prop-types";

export default function Propiedades(props) {
  return (
    <div>
      <ul>
        <li>{props.cadena ? props.cadena : "not defined by user"}</li>
        <li>{props.numero ? props.numero : "not defined by user"}</li>
        <li>
          {props.booleano
            ? props.booleano
              ? "true"
              : false
            : "not defined by user"}
        </li>
        <li>{props.inexistente}</li>
        <li>{props.porDefecto}</li>
      </ul>
    </div>
  );
}

Propiedades.defaultProps = {
  porDefecto: "Tengo cabeza",
};

// Propiedades.propTypes = {
//   numero: PropTypes.number.isRequired,
// };
