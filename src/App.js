import React from 'react';
import './sass/styles.scss';

import Cards from './components/Cards/Cards.js';

const App = () => {
  return (
    <div className="App">
      <main className="centered">
        <Cards />
      </main>
    </div>
  );
}

export default App;
