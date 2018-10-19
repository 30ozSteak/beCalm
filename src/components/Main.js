import React from 'react';

import CategoryButton from './CategoryButton'

import '../css/Main.css';

const Main = () => {
  return(
    <main>
      <CategoryButton category='water' />
      <CategoryButton category='sleep' />
      <CategoryButton category='mood' />
      <CategoryButton category='breathing' />
      <CategoryButton category='activities' />
      <CategoryButton category='meals' />
      <CategoryButton category='milestones' />
    </main>
  )
}

export default Main;