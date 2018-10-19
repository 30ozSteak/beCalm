import React from 'react';

import CategoryButton from './CategoryButton'

import '../css/Main.css';

const Main = ( {processCategorySelect} ) => {
  return(
    <main>
      <CategoryButton processCategorySelect={processCategorySelect} category='water' />
      <CategoryButton processCategorySelect={processCategorySelect} category='sleep' />
      <CategoryButton processCategorySelect={processCategorySelect} category='mood' />
      <CategoryButton processCategorySelect={processCategorySelect} category='breathing' />
      <CategoryButton processCategorySelect={processCategorySelect} category='activities' />
      <CategoryButton processCategorySelect={processCategorySelect} category='meals' />
      <CategoryButton processCategorySelect={processCategorySelect} category='milestones' />
    </main>
  )
}

export default Main;