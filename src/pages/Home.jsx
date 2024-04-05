import React, { useState,useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import axios from 'axios';
import { url } from "../utils/url.js";
import SearchComponent from '../components/SearchComponent';
import Testimonial from '../components/Testimonial';
import CarBrandsCarousel from '../components/CarBrandsCarousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { carLocation,makeOptions,vehicleTypes,brandOptions, carBrands,items, testimonials, typeItems } from '../utils/carData';
import Loading from '../components/loading';

import { Button, Container, Row, Col, Nav } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';


function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

const [body, setBody] = useState('');
const [filteredCars, setFilteredCars] = useState([]);
const [selectedLocation, setSelectedLocation] = useState('');
  const [make, setMake] = useState('');
  const [loading, setLoading] = useState(true);


    useEffect(() => {
    setLoading(true);
    let apiUrl = `${url}/search?page=1`;

    if (selectedLocation) {
      apiUrl += `&location=${selectedLocation}`;
    }

    if (make){
      apiUrl += `&make=${make}`;
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
  }, [body,make, selectedLocation]);



  const clearSearch = () => {
         setMake('');
         setBody('');
         setSelectedLocation('');
  };

  const parseHTML = (data) => {
    return data;
  };

  const handlePrev = () => {
    setActiveIndex(prevIndex => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex(prevIndex => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <>
<Carousel className='bg-gradient bg-dark card-frame bg-gradient-dark opacity-6' style={{ height: '500px' }} 
activeIndex={activeIndex} onSelect={setActiveIndex}>
  {items.map(item => (
    <Carousel.Item key={item.id}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <img className="img-fluid" src={item.image} alt={item.title} />
          </div>
          <div className="col-lg-6 d-flex align-items-center">
            <div>
              <h3 className="text-white mb-3">{item.title}</h3>
              <h1 className="text-white" id="state1" countTo={item.countTo}>0</h1>
              <h6 className="lead text-white opacity-8 mb-0">{item.description}</h6>
            </div>
          </div>
        </div>
      </div>
    </Carousel.Item>
  ))}
</Carousel>
<div onClick={handlePrev}>
  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
  <span className="visually-hidden">Previous</span>
</div>
<div onClick={handleNext}>
  <span className="carousel-control-next-icon" aria-hidden="true"></span>
  <span className="visually-hidden">Next</span>
</div>



  <div className="container">
  
    <form  role="form" method="post">
      <div className="card p-4 row">
        <div className="col-lg-8 mx-auto">
          <div className="row">
            <div className="col-lg-6">
              <h6>I WANT TO BUY</h6>
            </div>
            <div className="col-lg-6">
            <button type="button" onClick={clearSearch} className="btn btn-outline-warning">
  Clear Search
</button>
             
          
            </div> 
          </div>
          <div className="row">
            <div className="col-lg-4 mt-2">
              <div className="input-group">
                <select
                  className="search-input"
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                >
                  {carLocation.map(option => (
                    <option key={option} value={option.toLowerCase()}>{option}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="col-lg-4 mt-2">
              <div className="input-group">
                <select
                  className="search-input"
                  value={make}
                  onChange={(e) => setMake(e.target.value)}
                >
                  {makeOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="col-lg-4 mt-2">
              <div className="input-group">
                <select
                  className="search-input"
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                >
                  {vehicleTypes.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>




<div className="container">
  <div className="row pt-3 pb-4">
    <div className="col-lg-8 mx-auto">
      <h3>New Arrivals</h3>
    </div>
    <div className="col-lg-4 mx-auto">
      <div className="nav-wrapper position-relative end-0">
        <ul className="nav nav-pills nav-fill p-1" id="pills-tab" role="tablist">
          <li className="nav-item" role="presentation">
            <a className="nav-link mb-0 px-0 py-1" type="button">
              (20) Vehicle(s) Found
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>

<div className="container">
<div className="row">
  {loading ? (
    <Loading itemCount={6} itemHeight={300} />
  ) : (
    filteredCars.slice(0, 6).map(car => (
      <div className="col-md-4 mt-4" key={car.id}>
        <a href={`/vehicle${car.href}`}>
          <div className="card shadow-lg mt-4">
            <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
              <div className="image-container" style={{ height: '200px' }}>
                <img src={car.image_url} alt={car.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
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
</div>


</div>


      <div className="row align-items-center">
        <div className="col-4">
          <img className="left-image" src="/img/left.webp" alt="Product Image"/>
        </div>
        <div className="col-md-4 text-center">
          <img className="avatar avatar-md shadow-xl" src="/img/customer-service.png" alt="bruce" loading="lazy"/>
          <p>Have any questions?</p>
          <h1 className="text-gradient text-warning">(+254) 700 888 666</h1>
        </div>
        <div className="col-md-4">
          <img className="right-image" src="/img/right.webp" alt="Product Image"/>
        </div>
      </div>

<div  style={{ backgroundImage: `url(/img/road.jpg)` }}>
  <Testimonial testimonials={testimonials} />
</div>

      <div className="container">
        <div className="row mt-5">
          <div className="col-md-8">
            <h3 className="text-gradient text-warning mb-0">Quality Vehicles at</h3>
            <h3>Our Dealership</h3>
            <p className="pe-md-5 mb-4">
              We take pride in offering a comprehensive range of services to our customers. Whether you're in the market for a new or used vehicle, we have a wide selection of models from reputable brands to choose from. Our knowledgeable staff are always on hand to assist with financing options and can help you secure a loan that suits your needs and budget.
            </p>
            <p className="pe-md-5 mb-4">
              If you're looking to trade in your existing vehicle, we can assist with that too. Our team will evaluate your vehicle and provide a competitive trade-in offer.
            </p>
            <p className="pe-md-5 mb-4">
              At our dealership, we place a strong emphasis on customer satisfaction and strive to provide a seamless buying experience. We believe in building lasting relationships with our customers and are committed to delivering high-quality service at every stage of the process.
            </p>
            <a href="/about" className="bg-gradient-warning mb-5 mb-sm-0">
              <Button variant="warning" className="bg-gradient-warning mb-5 mb-sm-0">
   Learn More
  </Button>
  </a>
          </div>
          <div className="col-md-4">
      
              <img className="w-100" src="/img/ban.jpg" alt="Product Image" />
            
          </div>
        </div>
      </div>
  <Container className="my-5">
    <Row className="mb-3">
      <Col lg={8}>
        <h3>I WANT TO SEARCH FOR</h3>
      </Col>
    </Row>


        <Row>
          {typeItems.map((item, index) => (
            <Col key={index} xs={6} md={3} className="mb-3">
              <Card bg="white" text="black" className="shadow-lg">
                <Card.Img src={item.imageUrl} alt="Card image" className="p-4"/>
                <Card.ImgOverlay>
                  <Card.Title>{item.name}</Card.Title>
                </Card.ImgOverlay>
              </Card>
            </Col>
          ))}
        </Row>
   
  </Container>
 
    </>
  );
}

export default Home;
