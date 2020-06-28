import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import CountryCard from './CountryCard.js';

class CountryCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      countries: [],
      searchResults: []
    }
    this.handleSearch = this.handleSearch.bind(this);
  }

  async getCountriesAsync() {
    this.setState({isLoading: true});

    const countriesResp = await fetch(process.env.REACT_APP_API_URL+'countries');
    const countriesData = await countriesResp.json();

    this.setState({countries: countriesData, isLoading: false});
  }

  handleSearch(e) {
    e.preventDefault();
    this.setState({isLoading: true});
    let results = [];
    results = this.state.countries.filter(data => {
      return data.country.toLowerCase().includes(e.target.value.toLowerCase())
    });
    this.setState({searchResults: results, isLoading: false});
  }

  componentDidMount() {
    this.getCountriesAsync();
  }

  render() {
    return (
      <section id="countries-wrapper" className="countries">
        <div className="filter-wrap">
          <div className="search-input">
            <input type="text" placeholder="Search by country" onChange={this.handleSearch} />
            <FontAwesomeIcon icon={faSearch} />
          </div>
        </div>
        {this.state.isLoading ? 
          <div className="loading">Loading...</div> :
          <div className="country-list"> 
            {this.state.searchResults.length > 0 ? 
              this.state.searchResults.map((data,index) => <CountryCard key={index} data={data} />) :
              this.state.countries.map((data,index) => <CountryCard key={index} data={data} />)
            }
          </div>
        }
      </section>
    )
  }
}

export default CountryCards
