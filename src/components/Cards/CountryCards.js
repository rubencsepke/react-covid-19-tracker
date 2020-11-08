import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import CountryCard from './CountryCard.js';
import Pagination from '../Pagination/Pagination.js';

class CountryCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPageIndex: 0,
      selectedPage: 1,
      isLoading: false,
      countries: [],
      slicedCountries: [],
      searchResults: [],
      itemsPerPage: 9,
      numberOfPages: 0
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.handleNavigation = this.handleNavigation.bind(this);
  }

  async getCountriesAsync() {
    this.setState({isLoading: true});

    const countriesResp = await fetch(process.env.REACT_APP_API_URL+'countries');
    const countriesData = await countriesResp.json();

    const numberOfPages = Math.ceil(countriesData.length / this.state.itemsPerPage);

    this.setState({countries: countriesData,  slicedCountries: countriesData.slice(0, this.state.itemsPerPage), numberOfPages: numberOfPages, isLoading: false});
  }

  handleSearch(e) {
    e.preventDefault();
    this.setState({isLoading: true, selectedPageIndex: 0, selectedPage: 1});
    let results = [];
    results = this.state.countries.filter(data => {
      return data.country.toLowerCase().includes(e.target.value.toLowerCase())
    });
    const numberOfPages = Math.ceil(results.length / this.state.itemsPerPage);
    this.setState({searchResults: results, slicedCountries: results.slice(0, this.state.itemsPerPage), numberOfPages: numberOfPages, isLoading: false});
  }

  handleNavigation(selectedPageIndex,selectedPage) {
    if(selectedPageIndex >= 0 && selectedPageIndex !== this.state.numberOfPages) { 
      this.setState({isLoading: true, selectedPageIndex: selectedPageIndex, selectedPage: selectedPage});
      const start = this.state.itemsPerPage * selectedPageIndex;
      const end = start + this.state.itemsPerPage;
      if(this.state.searchResults.length > 0) {
        this.setState({slicedCountries: this.state.searchResults.slice(start,end), isLoading: false});  
      } else {
        this.setState({slicedCountries: this.state.countries.slice(start,end), isLoading: false});
      }
    }
  }

  componentDidMount() {
    this.getCountriesAsync();
  }

  render() {
    return (
      this.state.isLoading ? <div className="loading">Loading...</div> :
      <section id="countries-wrapper" className="countries">
        <div className="filter-wrap">
          <div className="search-input">
            <input type="text" placeholder="Search by country" onChange={this.handleSearch} />
            <FontAwesomeIcon icon={faSearch} />
          </div>
          <Pagination 
            numberOfPages={this.state.numberOfPages} 
            selectedPage={this.state.selectedPage} 
            selectedPageIndex={this.state.selectedPageIndex} 
            onClick={this.handleNavigation} 
          />
        </div>
          <div className="country-list"> 
            {this.state.slicedCountries.map((data,index) => <CountryCard key={index} data={data} />)}
          </div>
      </section>
    )
  }
}

export default CountryCards
