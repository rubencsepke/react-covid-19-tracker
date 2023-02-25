import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import {IconProp} from "@fortawesome/fontawesome-svg-core";

const formatNumber = (num: number) => {
  return Number(num).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const calcPercentage = (oldValue: number, newValue: number): string => {
  const decreaseValue = newValue - oldValue;
  return ((decreaseValue / oldValue) * 100).toFixed(2);
}

const cardBadgeClass = (oldValue: number, newValue: number) => {
  const percentage = calcPercentage(oldValue, newValue);
  return Number(percentage) > 0 ? 'badge-wrong' : 'badge-success';
}

const cardBadgeText = (oldValue: number, newValue: number) => {
  const percentage = calcPercentage(oldValue, newValue);
  return Number(percentage) > 0 ?
    <div><FontAwesomeIcon icon={faArrowUp} /> <span className="badge-text">{percentage}%</span></div> : 
    <div><FontAwesomeIcon icon={faArrowDown} /> <span className="badge-text">{percentage}%</span></div>
}

interface CardProps {
    icon: IconProp
    value: number
    title: string,
    data1: number[],
    data2: number[]
}

const Card = ({icon, value, title, data1, data2}: CardProps) => {

  return (
    <div className="card">
      <div className="card-icon"><FontAwesomeIcon icon={icon} /></div>
      <div className="card-value">{formatNumber(value)}</div>
      <h2 className="card-title">{title}</h2>
      <div className={`badge ${cardBadgeClass(data1[0],data1[1])}`}>{cardBadgeText(data2[0],data2[1])}</div>
    </div>
  )
}

export default Card;
