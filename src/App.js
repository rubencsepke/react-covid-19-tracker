import React, { useState, useEffect } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import './sass/styles.scss';

import Card from './components/Cards.js';

import { fetchDatas } from './api/fetchDatas.js';
import { faHospital, faSkullCrossbones, faHeart, faVirus } from '@fortawesome/free-solid-svg-icons';

library.add(faHospital, faSkullCrossbones, faHeart, faVirus)

const App = () => {
  const [today, setTodayData] = useState('');
  const [yesterday, setYesterdayData] = useState('');

  async function getData() {
    const today = await fetchDatas('all');
    const yesterday = await fetchDatas('all?yesterday=true');
    setTodayData(today);
    setYesterdayData(yesterday);
  }

  useEffect(() => {
    getData();
  },[])

  return (
    <div className="App">
      <section className="centered">
        <div className="cards">
          <Card icon="hospital" title="Total Cases" value={today.cases} />
          <Card icon="skull-crossbones" title="Total Deaths" value={today.deaths} />
          <Card icon="heart" title="Total Recoveries" value={today.recovered} />
          <Card icon="virus" title="Active Cases" value={today.active} />
        </div>
      </section>
    </div>
  );
}

export default App;
