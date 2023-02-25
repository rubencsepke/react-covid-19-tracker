import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookMedical, faSkullCrossbones, faHeart, faVial } from '@fortawesome/free-solid-svg-icons';
import { Country } from '../../models/country.model';


type PickCountry = Pick<Country, 'cases' | 'deaths' | 'recovered' | 'tests' | 'countryInfo' | 'country'>

interface CountryCardProps {
    data: PickCountry
}


const CountryCard = ({ data }: CountryCardProps) => {
  return (
    <div className="country-card">
      <div className="country-card-flag"><img src={data.countryInfo.flag} alt=""/></div>
      <div className="country-card-name">{data.country}</div>
      <ul className="country-card-info-list">
        <li className="country-card-info-item">
          <FontAwesomeIcon className="icon" icon={faBookMedical} />
          <div className="info-name">Cases</div>
          <div className="info-value">{data.cases}</div>
        </li>
        <li className="country-card-info-item">
          <FontAwesomeIcon className="icon" icon={faSkullCrossbones} />
          <div className="info-name">Deaths</div>
          <div className="info-value">{data.deaths}</div>
        </li>
        <li className="country-card-info-item">
          <FontAwesomeIcon className="icon" icon={faHeart} />
          <div className="info-name">Recovered</div>
          <div className="info-value">{data.recovered}</div>
        </li>
        <li className="country-card-info-item">
          <FontAwesomeIcon className="icon" icon={faVial} />
          <div className="info-name">Tests</div>
          <div className="info-value">{data.tests}</div>
        </li>
      </ul>
    </div>
  )
}

export default CountryCard;
