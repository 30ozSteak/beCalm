import React, { Component } from 'react';

import '../css/Water.css';

class Water extends Component {
  constructor() {
    super()

    this.state = {
      message: ''
    }
  }

  handleWaterInput = (e) => {
    e.preventDefault()
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  cancelWaterInput = () => {

  }

  render() {
    return(
      <article className={`water-page ${this.props.activeState}`}
      >
        <h1>Water</h1>
        <form 
          className='water-form'
          onSubmit={(e) => {
            this.props.waterSubmit(e);
          }}
        >
          <textarea 
            className='water-message'  
            name='message'
            value={this.state.message}
            onChange={(e) => {
              this.handleWaterInput(e);
            }}
          />
          <button 
            className='water-message-cancel'
            onClick={() => {
              this.cancelWaterInput();
            }}
          >Cancel
          </button>
          <button className='water-submit'>Submit</button>
        </form>
      </article>
    )
  }
}

export default Water;