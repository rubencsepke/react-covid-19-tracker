import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

const formatNumber = (num) => {
  return Number(num).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const calcPercentage = (oldValue, newValue) => {
  const decreaseValue = newValue - oldValue;
  return ((decreaseValue / oldValue) * 100).toFixed(2);
}

const cardBadgeClass = (oldValue, newValue) => {
  const percentage = calcPercentage(oldValue, newValue);
  return percentage > 0 ? 'badge-wrong' : 'badge-success';
}

const cardBadgeText = (oldValue, newValue) => {
  const percentage = calcPercentage(oldValue, newValue);
  return percentage > 0 ? 
    <div><FontAwesomeIcon icon={faArrowUp} /> <span className="badge-text">{percentage}%</span></div> : 
    <div><FontAwesomeIcon icon={faArrowDown} /> <span className="badge-text">{percentage}%</span></div>
}

const Card = (props) => {

  return (
    <div className="card">
      <div className="card-icon"><FontAwesomeIcon icon={props.icon} /></div>
      <div className="card-value">{formatNumber(props.value)}</div>
      <h2 className="card-title">{props.title}</h2>
      <div className={`badge ${cardBadgeClass(props.data1[0],props.data1[1])}`}>{cardBadgeText(props.data2[0],props.data2[1])}</div>
    </div>
  )
}

export default Card;
