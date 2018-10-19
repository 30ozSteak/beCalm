import React from 'react';

import '../css/CategoryButton.css';

const CategoryButton = ({ category, processCategorySelect }) => {
  return (
    <section className='category-button' onClick={() => {
      processCategorySelect(category);
    }}>
      <h3>{category}</h3>
    </section>
  );
}

export default CategoryButton;