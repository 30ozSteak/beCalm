import React, { Component } from 'react';

class Login extends Component {
  constructor() {
    super()

    this.state = {
      username: '',
      password: ''
    }
  }

  loginInput = (event) => {
    const key = event.target.name;
    const input = event.target.value;

    this.setState({
      [key]: input
    })
  }

  render() {
    return(
      <form 
        className='login-form'
        onSubmit={(event) => {
          this.props.processLogin(event, this.state.username, this.state.password);
        }}
      >
        <input 
          name='username' 
          value={this.state.username}
          onChange={(event) => {
            this.loginInput(event)}
          }
        />
        <input 
          name='password' 
          type='password'
          value={this.state.password}
          onChange={(event) => {
            this.loginInput(event)}
          }
        />
        <input 
          name='login'
          type='submit'
          value='login'
        >
        </input>
      </form>
    )
  }
}

export default Login;