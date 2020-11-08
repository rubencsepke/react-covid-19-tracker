import React from 'react';

const Pagination = (props) => {

  let left = props.selectedPage - 2;
  let right = props.selectedPage + 2;

  if(left < 2) {
    left = 2;
    right = 6;
  }
  if(right >= props.numberOfPages) {
    left = props.numberOfPages - 5;
    if(left < 2) {
      left = 2;
    }
    right = props.numberOfPages - 1;
  }

  const range = (from, to, step) => {
    return Array.from({length: (to - from) / step + 1}, (_, i) => from + (i * step));
  }

  let indexes = range(left,right,1);

  return (
    <nav className="pagination">
      <div className="pagination-item pagination-item-prev">
        <span className="pagination-link" onClick={() => props.onClick(props.selectedPageIndex-1,props.selectedPage-1)}>Prev</span>
      </div>
      <div className={`pagination-item-first pagination-item ${props.selectedPageIndex === 0 ? "active" : ""}`}>
        <span className="pagination-link" onClick={() => props.onClick(0,1)}>1</span>
      </div>
      <div className="pagination-list">
        {indexes.map((num) => (
          <div key={num} className={`pagination-item ${props.selectedPageIndex === num-1 ? "active" : ""}`}>
            <span className="pagination-link" onClick={() => props.onClick(num-1,num)}>{num}</span>
          </div>
        ))}
      </div>
      <div className={`pagination-item-last pagination-item ${props.selectedPageIndex === props.numberOfPages-1 ? "active" : ""}`}>
        <span className="pagination-link" onClick={() => props.onClick(props.numberOfPages-1,props.numberOfPages)}>{props.numberOfPages}</span>
      </div>
      <div className="pagination-item pagination-item-next">
        <span className="pagination-link" onClick={() => props.onClick(props.selectedPageIndex+1,props.selectedPage+1)}>Next</span>
      </div>
    </nav>
  )
}

export default Pagination;