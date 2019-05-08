import React from 'react'

const PortfolioItem = (props) => (
  <div>
    Portfolio Item Page
    <p>Displaying portfolio with id of {props.match.params.id}</p>
  </div>
)

export default PortfolioItem