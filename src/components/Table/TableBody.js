import React from 'react'

const TableBody = (props) => {
    return (
      <div className="country-list-body">
        <div className="country-name">
          <div className="country-flag"><img src={props.data.countryInfo.flag} alt=""/></div>
          <strong>{props.data.country}</strong>
        </div>
        <div className="country-info">
          <span className="country-info-value">{props.data.cases}</span>
        </div>
        <div className="country-info">
          <span className="country-info-value">{props.data.deaths}</span>
        </div>
        <div className="country-info">
          <span className="country-info-value">{props.data.recovered}</span>
        </div>
        <div className="country-info">
          <span className="country-info-value">{props.data.tests}</span>
        </div>
      </div>
    )
}

export default TableBody;