import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { url } from "../utils/url.js";
import { carLocation } from "../utils/carData.js";

function Vehicles() {

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCars, setFilteredCars] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  useEffect(() => {
    let apiUrl = `${url}/search?`;

    if (searchQuery) {
      apiUrl += `&q=${searchQuery}`;
    }
    if (selectedLocation) {
      apiUrl += `&location=${selectedLocation}`;
    }
    if (minPrice) {
      apiUrl += `&price_min=${minPrice}`;
    }
    if (maxPrice) {
      apiUrl += `&price_max=${maxPrice}`;
    }

    axios.get(apiUrl)
      .then(response => {
        const carsData = parseHTML(response.data);
        console.log(carsData)
        setFilteredCars(carsData.cars);
      })
      .catch(error => {
        console.error('Error searching vehicles:', error);
      });
  }, [searchQuery, selectedLocation, minPrice, maxPrice]);

  const clearLocation = () => {
    setSelectedLocation('');
  };

  const clearMaxPrice = () => {
    setMaxPrice('');
     setMinPrice('');
  };

  const handleSearch = (event) => {
    event.preventDefault();
    // Trigger useEffect when searchQuery changes
  };

  const parseHTML = (data) => {
    return data;
  };

  return (
    <div className="row">
      <div className="col-md-4 mt-4">
        <div className="container">
          <form className="search-form" onSubmit={handleSearch}>
            <div className="input-group">
              <input
                className="search-input"
                type="text"
                name="searchQuery"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search"
              />
              <button className="search-button" type="submit">
                <img src='/img/search.png' alt='Search' />
              </button>
            </div>
            <div className="input-group mt-4">
              <select
                className="search-input"
                name="location"
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
              >
                {carLocation.map(option => (
                  <option key={option} value={option.toLowerCase()}>{option}</option>
                ))}
              </select>
              <button style={{ background: 'red' }} onClick={clearLocation} className="search-button" >
                <img src='/img/close.png' alt='Search' />
              </button>
            </div>
            <div className="input-group mt-4">
              <div className="custom-row-input">
                <input
                  className="custom-input"
                  id="min-price"
                  type="text"
                  placeholder="Min Price"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                />
                <input
                  className="custom-input"
                  id="max-price"
                  type="text"
                  placeholder="Max Price"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                />
              </div>
              <div className="row">
                <div className="custom-input-row">
                  <input
                    className="custom-radio"
                    type="radio"
                    onChange={() => {
                      setMinPrice(''); // Clear minimum price
                      setMaxPrice('300000'); // Set maximum price to 300k
                    }}
                  />
                  <label className="custom-radio-label" htmlFor="max-price">Under 300 K</label>
                </div>
                <div className="custom-input-row">
                  <input
                    className="custom-radio"
                    type="radio"
                    onChange={() => {
                      setMinPrice('300000'); // Set minimum price to 300k
                      setMaxPrice('1100000'); // Set maximum price to 1.1M
                    }}
                  />
                  <label className="custom-radio-label">300K - 1.1 M </label>
                </div>
                <div className="custom-input-row">
                  <input
                    className="custom-radio"
                    type="radio"
                    onChange={() => {
                      setMinPrice('1300000'); // Set minimum price to 1.3M
                      setMaxPrice('2900000'); // Set maximum price to 2.9M
                    }}
                  />
                  <label className="custom-radio-label">1.3 - 2.9 M </label>
                </div>
                <div className="custom-input-row">
                  <input
                    className="custom-radio"
                    type="radio"
                    onChange={() => {
                      setMinPrice('2900000'); // Set minimum price to 2.9M
                      setMaxPrice('7600000'); // Set maximum price to 7.6M
                    }}
                  />
                  <label className="custom-radio-label">2.9 - 7.6 M </label>
                </div>
                <div className="custom-input-row">
                  <input
                    className="custom-radio"
                    type="radio"
                    onChange={() => {
                      setMinPrice('7600000'); // Set minimum price to 7.6M
                      setMaxPrice(''); // Clear maximum price
                    }}
                  />
                  <label className="custom-radio-label" htmlFor="price-range-0">More than 7.6 M</label>
                </div>
                <div className="custom-input-row">
                  <button className="custom-button" type="button" onClick={clearMaxPrice} >Clear</button>
                  <button className="custom-button" type="submit">Save</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="col-md-8">
        <div className="container">
          <div className="row">
            {filteredCars.map(car => (
              <div className="col-md-4 mt-4" key={car.id}>
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
    </div>
  );
}

export default Vehicles;
