import React, { Component } from 'react';

import Home from './Home'
import Main from './Main'

import '../css/App.css';

class App extends Component {
  constructor() {
    super()
    this.state ={

    }
  }

  processLogin = (event, username, password) => {
    event.preventDefault()
    console.log(username, password)
  }

  render() {
    return (
      <div className="App">
        <Home processLogin={this.processLogin} />
        <Main />
      </div>
    );
  }
}

export default App;
