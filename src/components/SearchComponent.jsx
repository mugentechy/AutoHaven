import React, { useState } from 'react';

const SearchComponent = ({ items }) => {
  const [location, setLocation] = useState('');
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');
  const [ready, setReady] = useState(false);

  const searchVeh = (event) => {
    // Implement your search logic here
    event.preventDefault();
    console.log('Searching...');
  };

  return (
    <>
      
      

  <div className="container">
          <div className="row pt-3 pb-4">
      {items.map(item => (
        <div className="col-md-3 mt-4" key={item.id}>
          <a href={`/vehicle/${item.id}`}>
            <div className="card shadow-lg mt-4">
              <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                <a className="d-block blur-shadow-image">
                <img src={item.image} style={{ width: "100%", height: "200px" }} />
        </a>
              </div>
              <div className="card-body">
                <h6>{item.name}</h6>
              </div>
            </div>
          </a>
        </div>
      ))}
      </div>
      </div>
    </>
  );
};

export default SearchComponent;
