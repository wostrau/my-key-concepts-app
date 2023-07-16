import React from 'react';
import { ConceptType } from '../../App';

import classes from './Concept.module.css';

const Concept: React.FC<{ concept: ConceptType }> = ({ concept }) => {
  return (
    <li className={classes.concept}>
      <img src={concept.image} alt={concept.title} />
      <h2>{concept.title}</h2>
      <p>{concept.description}</p>
    </li>
  );
};

export default Concept;
