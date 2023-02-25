import React from 'react'
import {Country} from "../../models/country.model";

type PickCountry = Pick<Country, 'countryInfo' | 'country' | 'cases' | 'todayCases' | 'deaths' | 'todayDeaths' | 'recovered' | 'todayRecovered' | 'tests'>

interface TableBodyProps {
    data: PickCountry
}

const TableBody = ({ data }: TableBodyProps) => {
    return (
      <div className="country-list-body">
        <div className="country-name">
          <div className="country-flag"><img src={data.countryInfo.flag} alt=""/></div>
          <strong>{data.country}</strong>
        </div>
        <div className="country-info">
          <span className="country-info-title">Total Cases</span>
          <span className="country-info-value">{data.cases}</span>
        </div>
        <div className="country-info">
          <span className="country-info-title">Today Cases</span>
          <span className="country-info-value red">{data.todayCases > 0 && `+`+data.todayCases}</span>
        </div>
        <div className="country-info">
          <span className="country-info-title">Total Deaths</span>
          <span className="country-info-value">{data.deaths}</span>
        </div>
        <div className="country-info">
          <span className="country-info-title">Today Deaths</span>
          <span className="country-info-value red">{data.todayDeaths > 0 && `+`+data.todayDeaths}</span>
        </div>
        <div className="country-info">
          <span className="country-info-title">Total Recovered</span>
          <span className="country-info-value">{data.recovered}</span>
        </div>
        <div className="country-info">
          <span className="country-info-title">Today Recovered</span>
          <span className="country-info-value green">{data.todayRecovered > 0 && `+`+data.todayRecovered}</span>
        </div>
        <div className="country-info">
          <span className="country-info-title">Tests</span>
          <span className="country-info-value">{data.tests}</span>
        </div>
      </div>
    )
}

export default TableBody;