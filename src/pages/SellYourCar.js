import React from 'react';
import Header from '../components/Header';
import AddedFeatures from '../components/AddedFeatures';
import AdditionalFeatures from '../components/AdditionalFeatures';
import Total from '../components/Total';
//import cars from "../cars";

const SellYourCar = () => {
    const state = {
      additionalPrice: 0,
      car: {
        price: 26395,
        name: '2019 Ford Mustang',
        image:
          'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
        features: []
      },
      additionalFeatures: [
        { id: 1, name: 'V-6 engine', price: 1500 },
        { id: 2, name: 'Racing detail package', price: 1500 },
        { id: 3, name: 'Premium sound system', price: 500 },
        { id: 4, name: 'Rear spoiler', price: 250 },
        { id: 5, name: 'Carpeted floor mats', price: 210},
        { id: 6, name: 'Cargo Tray', price: 120},
        { id: 7, name: 'First aid kit', price: 30},
        { id: 8, name: 'Adaptive cruise control', price: 180},
        { id: 9, name: 'Automatic climat control', price: 350},
        { id: 10, name: 'WiFi Hotspot', price: 50},
        { id: 11, name: 'Navigation system', price: 450},
        { id: 12, name: 'Parktronic', price: 175},
      ]
    };

    return (
      <div className="boxes">
        <div className="box">
          <Header car={state.car} />
          <AddedFeatures car={state.car} />
        </div>
        <div className="box">
          <AdditionalFeatures additionalFeatures={state.additionalFeatures} />
          <Total car={state.car} additionalPrice={state.additionalPrice} />
        </div>
      </div>
    );
  };

  export default SellYourCar;
