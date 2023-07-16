import React from 'react';
import { ConceptType } from '../../App';

import classes from './ConceptsList.module.css';
import Concept from '../Concept/Concept';

const ConceptsList: React.FC<{ concepts: ConceptType[] }> = ({ concepts }) => {
  return (
    <ul className={classes.concepts}>
      {concepts.map((concept, index) => (
        <Concept key={index} concept={concept} />
      ))}
    </ul>
  );
};

export default ConceptsList;
