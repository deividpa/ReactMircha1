import logo from "./logo.svg";
import "./App.css";

// Componentes propios

import HtmlHeader from "./components/HtmlHeader";
import HtmlFooter from "./components/HtmlFooter";
import Propiedades from "./components/Propiedades";
import Estado from "./components/Estado";
import Estado2 from "./components/Estado2";
import RenderizadoCondicional from "./components/RenderizadoCondicional";
import RenderizadoElementos from "./components/RenderizadoElementos";
import Eventos from "./components/Eventos";

function App() {
  const estaciones = ["verano", "otoño", "primavera", "invierno"];
  let nombre = "David";
  let auth = 1;
  return (
    <div className="App">
      <section id="cabecera">
        <HtmlHeader></HtmlHeader>
      </section>
      <section className="App-body">
        <Propiedades cadena={23} numero="Soy una cadena" booleano={true} />
        <Estado />
        <Estado2 />
        <p>
          {auth ? "Está logueado con usuario " + nombre : "No está logueado"}
        </p>
        <ul>
          {estaciones.map((key, index) => {
            return <li key={index + key}>La temporada es: {key}</li>;
          })}
        </ul>
      </section>
      <RenderizadoCondicional />
      <RenderizadoElementos />
      <Eventos />
      <HtmlFooter msg="Todos los derechos reservados 2022 / 2024"></HtmlFooter>
    </div>
  );
}

export default App;
