import React from 'react';

export default ({celebrities, countryFilter, nameFilter, sortBy}) => {
  return (
    <div className="list-group">
      { celebrities
        .filter((celebrity) =>
          celebrity.country.indexOf(countryFilter) > -1
        )
        .filter((celebrity) =>
          celebrity.name.toLowerCase().indexOf(nameFilter) > -1
        )
        .sort((a, b) => {
          if (sortBy === 'name') {
            const nameA = a[sortBy].toUpperCase();
            const nameB = b[sortBy].toUpperCase();
            return (nameA < nameB) ? -1
              : (nameA > nameB) ? 1
                : 0;
          } else {
            return a[sortBy] - b[sortBy];
          }
        })
        .map((celebrity, i) =>
          <div key={i} className="list-group-item">
            <div className="row">
              <div className="col-xs-1">
                <h4 className="list-group-item-heading">
                  {celebrity.rank}
                </h4>
              </div>
              <div className="col-xs-10">
                <h4 className="list-group-item-heading">
                  {celebrity.name}
                </h4>
                <p className="list-group-item-text">Networth: {celebrity.netWorth.toLocaleString()}</p>
                <p className="list-group-item-text">Age: {celebrity.age}</p>
                <p className="list-group-item-text">Birthplace: {celebrity.country}</p>
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}