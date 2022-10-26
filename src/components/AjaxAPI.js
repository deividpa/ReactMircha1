import React, { Component } from "react";

function Pokemon(props) {
  <div>
    <img src={props.avatar} alt={props.name} />
    <div>Este es un pokemon</div>
  </div>;
}

export default class AjaxAPI extends Component {
  state = {
    pokemons: [],
  };

  componentDidMount() {
    let url = "https://pokeapi.co/api/v2/pokemon";
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        json.results.forEach((el) => {
          fetch(el.url)
            .then((res) => res.json())
            .then((json) => {
              console.log(json);
              let pokemon = {
                id: json.id,
                name: json.name,
                avatar: json.sprites.back_default,
              };

              //let pokemons = [...this.state.pokemons, pokemon];
              this.setState({
                pokemons: [...this.state.pokemons, pokemon],
              });
            });
        });
      });
  }

  render() {
    return (
      <div>
        <h3>Peticiones asincrónicas mediante Componentes y React</h3>
        {this.state.pokemons.map((el) => (
          <Pokemon key={el.id} avatar={el.avatar} name={el.name} />
        ))}
      </div>
    );
  }
}
