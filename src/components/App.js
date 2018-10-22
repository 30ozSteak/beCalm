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
      username: '',
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

  handleLogin = (event, email, password) => {
    event.preventDefault();

    const user = login.accounts.find((account) => {
      return account.email === email;
    });

    let userAccount;

    if (password === user.pw) {
      userAccount = data.users.find((account) => {
        return account.email === email;
      })
      this.setState({
        username: userAccount.name,
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
        <Home handleLogin={this.handleLogin} />
        <Main processCategorySelect={this.processCategorySelect} />
        <Water waterSubmit={this.waterSubmit}/>
      </div>
    );
  }
}

export default App;
