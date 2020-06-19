import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Card = (props) => {
  return (
    <div className="card">
      <div className="card-icon"><FontAwesomeIcon icon={props.icon} /></div>
      <div className="card-value">{props.value}</div>
      <h2 className="card-title">{props.title}</h2>
      {/* <div class="badge ${badgeClass}">${badgeText}</div> */}
    </div>
  );
}

export default Card
