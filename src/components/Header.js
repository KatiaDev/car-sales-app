import React from 'react';

const Header = props => {
  return (
    <div className="content">
      <figure className="image is-228x228">
        <img src={props.car.image} alt={props.car.name} />
      </figure>
      <h4>{props.car.name}</h4>
      <p>Sale Price: ${props.car.price}</p>
    </div>
  );
};

export default Header;