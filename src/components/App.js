import React, { Component } from 'react';

import Home from './Home';
import Main from './Main';
import Water from './Water';

import data from '../mockDataSet';
import login from '../login';

import '../css/App.css';

class App extends Component {
  constructor() {
    super()
    this.state ={
      data: {},
      username: 'Ingrid Morale Jones',
      currentPage: 'Home',
      login: 'out',
      loginError: false
    }
  }

  componentDidMount() {
    this.setState({
      data
    })
  }

  processLogin = (event, username, password) => {
    event.preventDefault()
    const user = login.accounts.find(username);
    if (password === user.pw) {
      this.setState({
        username,
        login: 'in',
        loginError: false
      }) 
    } else {
      this.setState({
        loginError: true
      })
    }

  }

  processCategorySelect = (name) => {
    this.setState({
      currentPage: name
    })
  }

  waterSubmit = () => {

  }

  render() {
    return (
      <div className="App">
        <Home processLogin={this.processLogin} />
        <Main processCategorySelect={this.processCategorySelect} />
        <Water waterSubmit={this.waterSubmit}/>
      </div>
    );
  }
}

export default App;
