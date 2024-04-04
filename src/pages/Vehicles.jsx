import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { url } from "../utils/url.js";
import { carLocation,makeOptions,vehicleTypes } from "../utils/carData.js";
import Pagination from '../components/pagination';
import Loading from '../components/loading';

function Vehicles() {

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCars, setFilteredCars] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(30);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [verified, setVerified] = useState('');
  const [make, setMake] = useState('');
  const [condition, setCondition] = useState('');
  const [body, setBody] = useState('');
   const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let apiUrl = `${url}/search?page=${currentPage}`;

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

    if (verified){
      apiUrl += `&verify=${verified}`;
    }

    if (make){
      apiUrl += `&make=${make}`;
    }

    if (condition){
      apiUrl += `&condition=${condition}`;
    }

    if (body){
      apiUrl += `&body=${body}`;
    }


    axios.get(apiUrl)
      .then(response => {
        const carsData = parseHTML(response.data);
        console.log(carsData)
        setFilteredCars(carsData.cars);
         setLoading(false);
      })
      .catch(error => {
        console.error('Error searching vehicles:', error);
      });
  }, [currentPage,searchQuery,verified, selectedLocation, minPrice, maxPrice]);

  const clearLocation = () => {
    setSelectedLocation('');
  };

  const clearMaxPrice = () => {
    setMaxPrice('');
     setMinPrice('');
  };


  const handlePageChange = (page) => {
    setCurrentPage(page);
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
        <div className="container p-5">
          <form className="search-form" onSubmit={handleSearch}>
            <div className="input-group p-3 shadow-lg">
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
            <div className="input-group mt-4 p-3 shadow-lg">
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
            <div className="input-group mt-4 p-3 shadow-lg">
              <div className="custom-row-input row">
              <div className="col-6">
                <input
                  className="custom-input"
                  id="min-price"
                  type="text"
                  placeholder="Min Price"
                  value={minPrice}
                  style={{ maxWidth: '100%' }}
                  onChange={(e) => setMinPrice(e.target.value)}
                />
                </div>
                <div className="col-6">
                <input
                  className="custom-input"
                  id="max-price"
                  type="text"
                  placeholder="Max Price"
                  value={maxPrice}
                  style={{ maxWidth: '100%' }}
                  onChange={(e) => setMaxPrice(e.target.value)}
                />
              </div>
              </div>
              <div className="row">
                <div className="custom-input-row">
                  <input
                    className="custom-radio"
                    type="radio"
                    name="pricerange"
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
                    vname="pricerange"
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
                    name="pricerange"
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
                    name="pricerange"
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
                    name="pricerange"
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




 <div className="input-group mt-4 p-3 shadow-lg">
  <div className="row">
    <div className="custom-input-row">
      <input
        className="custom-radio"
        type="radio"
        name="sellerType"
        onChange={(e) => setVerified('')}
        value="all"
      />
      <label className="custom-radio-label">Show all</label>
    </div>
    <div className="custom-input-row">
      <input
        className="custom-radio"
        type="radio"
        name="sellerType"
        onChange={(e) => setVerified('Verified sellers')}
        value="Verified sellers"
      />
      <label className="custom-radio-label">Verified sellers</label>
    </div>
    <div className="custom-input-row">
      <input
        className="custom-radio"
        type="radio"
        onChange={(e) => setVerified('Unverified sellers')}
        name="sellerType"
        value="Unverified sellers"
      />
      <label className="custom-radio-label">Unverified sellers</label>
    </div>
  </div>
</div>





<div className="input-group mt-4 p-3 shadow-lg" style={{ maxHeight: '200px', overflowY: 'auto' }}>
  <div className="row">
    <div className="custom-input-row">
      <input
        className="search-input"
        type="text"
        name="make"
        value={make}
        onChange={(e) => setMake(e.target.value)}
        placeholder="Find Make"
      />
      <button className="search-button" type="submit">
        <img src='/img/search.png' alt='Search' />
      </button>
    </div>
    <div className="custom-input-row">
      <input
        className="custom-radio"
        type="radio"
        name="make"
        onChange={() => setMake('')}
      />
      <label className="custom-radio-label">Show all</label>
    </div>
    {makeOptions.map((option, index) => (
      <div className="custom-input-row" key={index}>
        <input
          className="custom-radio"
          type="radio"
          name="make"
          onChange={(e) => setMake(option)}
          value={option}
        />
        <label className="custom-radio-label">{option}</label>
      </div>
    ))}
  </div>
</div>







 <div className="input-group mt-4 p-3 shadow-lg">
  <div className="row">
    <div className="custom-input-row">
      <input
        className="custom-radio"
        type="radio"
        name="condition"
        onChange={(e) => setCondition('')}
     
      />
      <label className="custom-radio-label">Show all</label>
    </div>
    <div className="custom-input-row">
      <input
        className="custom-radio"
        type="radio"
        name="condition"
        onChange={(e) => setCondition('Brand New')}
        value="Brand New"
      />
      <label className="custom-radio-label">Brand New</label>
    </div>
    <div className="custom-input-row">
      <input
        className="custom-radio"
        type="radio"
        onChange={(e) => setCondition('Foreign Used')}
        name="condition"
        value="Foreign Used"
      />
      <label className="custom-radio-label">Foreign Used</label>
    </div>

        <div className="custom-input-row">
      <input
        className="custom-radio"
        type="radio"
        onChange={(e) => setCondition('Kenyan Used')}
        name="condition"
        value="Kenyan Used"
      />
      <label className="custom-radio-label">Kenyan Used</label>
    </div>
  </div>
</div>





<div className="input-group mt-4 p-3 shadow-lg" style={{ maxHeight: '200px', overflowY: 'auto' }}>
  <div className="row">

    <div className="custom-input-row">
      <input
        className="custom-radio"
        type="radio"
        name="body"
        onChange={() => setBody('')}
      />
      <label className="custom-radio-label">Show all</label>
    </div>
    {vehicleTypes.map((option, index) => (
      <div className="custom-input-row" key={index}>
        <input
          className="custom-radio"
          type="radio"
          name="body"
          onChange={(e) => setBody(option)}
          value={option}
        />
        <label className="custom-radio-label">{option}</label>
      </div>
    ))}
  </div>
</div>








































          </form>
        </div>
      </div>
      <div className="col-md-8">
        <div className="container">
<div className="row">
  {loading ? (
    <Loading itemCount={12} itemHeight={350} />
  ) : (
    filteredCars.map(car => (
      <div className="col-md-4 mt-4" key={car.id}>
        <a href={`/vehicle${car.href}`}>
          <div className="card shadow-lg mt-4">
            <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
              <img src={car.image_url} alt={car.name} style={{ width: '100%' }} />
            </div>
            <div className="card-body">
              <p className="p-header">{car.price}</p>
              <h6>{car.name}</h6>
              <p className="p-description">{car.description}</p>
            </div>
          </div>
        </a>
      </div>
    ))
  )}
  <Pagination
    currentPage={currentPage}
    totalPages={totalPages}
    onPageChange={handlePageChange}
  />
</div>


        </div>
      </div>
    </div>
  );
}

export default Vehicles;
