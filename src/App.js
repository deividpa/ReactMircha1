import logo from "./logo.svg";
import "./App.css";

// Componentes propios

import HtmlHeader from "./components/HtmlHeader";
import HtmlFooter from "./components/HtmlFooter";

function App() {
  const estaciones = ["verano", "otoño", "primavera", "invierno"];
  let nombre = "David";
  let auth = 1;
  return (
    <div className="App">
      <section id="cabecera">
        <HtmlHeader></HtmlHeader>
      </section>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Editar <code>src/App.js</code> and save to reload.
        </p>
        <label htmlFor="nombre">Ingrese un nombre:</label>
        <input type="text" name="nombre" id="nombre" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>
          {auth ? "Está logueado con usuario " + nombre : "No está logueado"}
        </p>
        <ul>
          {estaciones.map((key, index) => {
            return <li key={index + key}>La temporada es: {key}</li>;
          })}
        </ul>
      </header>
      <HtmlFooter msg="Todos los derechos reservados 2022 / 2024"></HtmlFooter>
    </div>
  );
}

export default App;
