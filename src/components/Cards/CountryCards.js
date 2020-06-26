import React, { Component } from 'react'

import CountryCard from './CountryCard.js';

class CountryCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      countries: []
    }
  }

  async getCountriesAsync() {
    this.setState({isLoading: true});

    const countriesResp = await fetch(process.env.REACT_APP_API_URL+'countries');
    const countriesData = await countriesResp.json();

    this.setState({countries: countriesData, isLoading: false});
  }

  componentDidMount() {
    this.getCountriesAsync();
  }

  render() {
    return (
      <section id="countries-wrapper" className="countries">
        {this.state.isLoading ? 
          <div className="loading">Loading...</div> :
          this.state.countries.map((data,index) => <CountryCard key={index} data={data} />)
        }
      </section>
    )
  }
}

export default CountryCards
