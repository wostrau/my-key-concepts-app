import React from 'react';

import keyConceptsImage from '../../assets/images/key-concepts.png';
import classes from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={classes.header}>
      <img src={keyConceptsImage} alt='Medal badge with a star' />
      <h1>Key React Concepts</h1>
      <p>Selected key React concepts you should know about</p>
    </header>
  );
};

export default Header;
