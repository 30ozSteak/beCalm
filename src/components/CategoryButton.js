import React from 'react';

import '../css/CategoryButton.css';

const CategoryButton = ({ category }) => {
  return (
    <section>
      <h3>{category}</h3>
    </section>
  );
}

export default CategoryButton;