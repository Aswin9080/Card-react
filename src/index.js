import React from 'react';
import ReactDOM from 'react-dom';
import dog1 from './images/dog1.jpg'
import dog2 from './images/dog2.jpg'
import dog3 from './images/dog3.jpg'
import dog4 from './images/dog4.jpg'
import dog5 from './images/dog5.jpg'
import dog6 from './images/dog6.jpg'
import dog7 from './images/dog7.jpg'
import dog8 from './images/dog8.jpg'

import './style.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

function Dogshouse(props) {
  return (
    <div className='doghouse'>
      <img src={props.image} alt={props.name} />
      <p>{props.name}</p>
    </div>
  );
}

const Dogs = [
  {
    dogimage: dog1,
    dogname: 'Cutest Dog 1'
  },
  {
    dogimage: dog2,
    dogname: 'Cutest Dog 2'
  },
  {
    dogimage: dog3,
    dogname: 'Cutest Dog 3'
  },
  {
    dogimage: dog4,
    dogname: 'Cutest Dog 4'
  },
  {
    dogimage: dog5,
    dogname: 'Cutest Dog 5'
  },
  {
    dogimage: dog6,
    dogname: 'Cutest Dog 6'
  },
  {
    dogimage: dog7,
    dogname: 'Cutest Dog 7'
  },
  {
    dogimage: dog8,
    dogname: 'Cutest Dog 8'
  },
  {
    dogimage: dog1,
    dogname: 'Cutest Dog 1'
  },
  {
    dogimage: dog2,
    dogname: 'Cutest Dog 2'
  },
  {
    dogimage: dog3,
    dogname: 'Cutest Dog 3'
  },
  {
    dogimage: dog4,
    dogname: 'Cutest Dog 4'
  },
  {
    dogimage: dog5,
    dogname: 'Cutest Dog 5'
  },
  {
    dogimage: dog6,
    dogname: 'Cutest Dog 6'
  },
  {
    dogimage: dog7,
    dogname: 'Cutest Dog 7'
  },
  {
    dogimage: dog8,
    dogname: 'Cutest Dog 8'
  }
];

root.render(
  <div className="container">
    {Dogs.map((item, index) => (
      <Dogshouse image={item.dogimage} name={item.dogname} />
    ))}
  </div>,
);
