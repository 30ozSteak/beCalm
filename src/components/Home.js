import React from 'react';

import Login from './Login'

import '../css/Home.css';

const Home = (props) => {
  return (
    <section>
      <Login processLogin={props.processLogin} />
    </section>
  )
}

export default Home;