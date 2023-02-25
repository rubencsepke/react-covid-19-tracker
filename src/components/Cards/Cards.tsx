import React, { Component } from 'react'

import Card from './Card.js';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faHospital, faSkullCrossbones, faHeart, faVirus } from '@fortawesome/free-solid-svg-icons'

library.add(faHospital, faSkullCrossbones, faHeart, faVirus)

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      today: [],
      yesterday: []
    }
  }

  async getDataAsync() {
    this.setState({isLoading: true})

    const todayResp = await fetch(import.meta.env.VITE_API_URL+'all');
    const todayData = await todayResp.json();

    const yesterdayResp = await fetch(import.meta.env.VITE_API_URL+'all?yesterday=true');
    const yesterdayData = await yesterdayResp.json();

    this.setState({today: todayData, yesterday: yesterdayData, isLoading: false});
  }

  componentDidMount() {
    this.getDataAsync()
  }

  render() {
    return (
      <section id="cards-wrapper" className="cards">
        {this.state.isLoading ?
          <div className="loading">Loading...</div> :
          <div className="card-list">
            <Card icon="hospital" title="Total Cases" value={this.state.today.cases} data1={[this.state.yesterday.cases, this.state.today.cases]} data2={[this.state.yesterday.cases, this.state.today.cases]} />
            <Card icon="skull-crossbones" title="Total Deaths" value={this.state.today.deaths} data1={[this.state.yesterday.deaths, this.state.today.deaths]} data2={[this.state.yesterday.deaths, this.state.today.deaths]} />
            <Card icon="heart" title="Total Recoveries" value={this.state.today.recovered} data1={[this.state.today.recovered, this.state.yesterday.recovered]} data2={[this.state.yesterday.recovered, this.state.today.recovered]} />
            <Card icon="virus" title="Active Cases" value={this.state.today.active} data1={[this.state.yesterday.active, this.state.today.active]} data2={[this.state.yesterday.active, this.state.today.active]} />
          </div>
        }
      </section>
    );
  }
}

export default Cards
