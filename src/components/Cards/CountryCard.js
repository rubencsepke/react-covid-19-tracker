import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookMedical, faSkullCrossbones, faHeart, faVial, faArrowUp } from '@fortawesome/free-solid-svg-icons';

const CountryCard = (props) => {
  return (
    <div className="country-card">
      <div className="country-card-flag"><img src={props.data.countryInfo.flag} alt=""/></div>
      <div className="country-card-name">{props.data.country}</div>
      <ul className="country-card-info-list">
        <li className="country-card-info-item">
          <FontAwesomeIcon className="icon" icon={faBookMedical} />
          <div className="info-name">Cases</div>
          <div className="info-value">{props.data.cases}</div>
        </li>
        <li className="country-card-info-item">
          <FontAwesomeIcon className="icon" icon={faSkullCrossbones} />
          <div className="info-name">Deaths</div>
          <div className="info-value">{props.data.deaths}</div>
        </li>
        <li className="country-card-info-item">
          <FontAwesomeIcon className="icon" icon={faHeart} />
          <div className="info-name">Recovered</div>
          <div className="info-value">{props.data.recovered}</div>
        </li>
        <li className="country-card-info-item">
          <FontAwesomeIcon className="icon" icon={faVial} />
          <div className="info-name">Tests</div>
          <div className="info-value">{props.data.tests}</div>
        </li>
      </ul>
    </div>
  )
}

export default CountryCard;
