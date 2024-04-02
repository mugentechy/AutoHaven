import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { url } from "../utils/url.js";

function Vehicles() {
  const [cars, setCars] = useState([]);


  useEffect(() => {
    // Fetch data from jiji.com
    axios.get(`${url}/sedan`)
      .then(response => {
        // Assuming parseHTML function is defined and correctly parses the response data
        const carsData = parseHTML(response.data);
        setCars(carsData.cars);
      })
      .catch(error => {
        console.error('Error fetching data from jiji.com:', error);
      });
  }, []);

  // Define parseHTML function to extract data from HTML response
  const parseHTML = (data) => {
    // Implement your parsing logic here
    // For example, if data is in the format of an array of objects containing car information,
    // you may not need to parse HTML, and instead directly return the response data
    return data;
  };


console.log(cars)
  return (
    <div className="cover">
      <div className="container">
        <div className="row">
          {cars.map(car => (
             
            <div className="col-md-3 mt-4" key={car.id}>
            <a href={`/vehicle${car.href}`}>
              <div className="card shadow-lg mt-4">
                <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
             
                    <img src={car.image_url} alt={car.name} style={{ width: '100%' }} />
                 
                </div>
               
                  <div className="card-body">
                    <h6>{car.name}</h6>
                  </div>
               
              </div>
               </a>
            </div>
           
          ))}
        </div>
      </div>
    </div>
  );
}

export default Vehicles;
