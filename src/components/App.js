import React, { Component } from 'react';

import Home from './Home'
import Main from './Main'

import '../css/App.css';

class App extends Component {
  constructor() {
    super()
    this.state ={
      currentPage: 'Home'
    }
  }

  processLogin = (event, username, password) => {
    event.preventDefault()
    console.log(username, password)
  }

  processCategorySelect = (name) => {
    this.setState({
      currentPage: name
    })
  }

  render() {
    return (
      <div className="App">
        <Home processLogin={this.processLogin} />
        <Main processCategorySelect={this.processCategorySelect} />
      </div>
    );
  }
}

export default App;
