import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVirus } from '@fortawesome/free-solid-svg-icons';
import './sass/styles.scss';

import Cards from './components/Cards/Cards.js';
import CountryCards from './components/Cards/CountryCards.js';


const App = () => {
  return (
    <div className="App">
      <header id="header" className="centered">
        <h1><span className="header-icon"><FontAwesomeIcon icon={faVirus} /></span> COVID-19 Tracker</h1>
      </header>
      <main className="centered">
        <Cards />
        <CountryCards />
      </main>
    </div>
  );
}

export default App;
