import React, { Component } from 'react';
import axios from 'axios';


class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      gatos: []
    }
  }

  async componentDidMount() {
    const resp = await axios.get('/api/gatos')
    this.setState ({
      gatos: resp.data
    })
  }

  desplegarGatos = () => (
    this.state.gatos.map( (gato) => (
      <li>
        { gato.nombre } 
      </li>

    ))
  );

  render () {
    return (
      <div>
        Lista de Gatos:
        <ul>
        { this.desplegarGatos() }
        </ul>
      </div>
    );
  }
}

export default App;
