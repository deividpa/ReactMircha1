import "./App.css";

// Componentes propios

import HtmlHeader from "./components/HtmlHeader";
import HtmlFooter from "./components/HtmlFooter";
import Propiedades from "./components/Propiedades";
import Estado from "./components/Estado";
import Estado2 from "./components/Estado2";
import RenderizadoCondicional from "./components/RenderizadoCondicional";
import RenderizadoElementos from "./components/RenderizadoElementos";
import { EventosES6, EventosES7, MasSobreEventos } from "./components/Eventos";
import Padre from "./components/ComunicacionComponentes";
import CicloVida from "./components/CicloVida";
import AjaxAPI from "./components/AjaxAPI";

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
      <EventosES6 />
      <hr />
      <EventosES7 />
      <hr />
      <MasSobreEventos />
      <hr />
      <Padre />
      <hr />
      <CicloVida />
      <hr />
      <AjaxAPI />
      <HtmlFooter msg="Todos los derechos reservados 2022 / 2024"></HtmlFooter>
    </div>
  );
}

export default App;
