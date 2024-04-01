import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import SearchComponent from '../components/SearchComponent';
import Testimonial from '../components/Testimonial';
import CarBrandsCarousel from '../components/CarBrandsCarousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { brandItems,locationOptions,brandOptions, carBrands,items,categoryOptions, testimonials, typeItems } from '../utils/carData';

import { Button, Container, Row, Col, Nav } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
const [activeTab, setActiveTab] = useState('brand');
  const handlePrev = () => {
    setActiveIndex(prevIndex => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex(prevIndex => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <>
<Carousel style={{ backgroundImage: `url(/img/road.jpg)`, height: '500px' }} 
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


<div className="card mx-3 mx-md-4 mt-n7" style={{ padding: "0 !important" }}>
  <div className="container">
    <form role="form" method="post">
      <div className="row">
        <div className="col-lg-12 mx-auto py-3">
          <div className="row">
            <div className="col-lg-6">
              <h6>I WANT TO BUY</h6>
            </div>
            <div className="col-lg-6">
              <button type="button" className="btn btn-outline-warning">AL Siddique Motors</button>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 mt-2">
              <div className="input-group">
                <select className="select-css" onChange={({ target }) => setLocation(target.value)} name="location">
                  {locationOptions.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="col-lg-3 mt-2">
              <div className="input-group">
                <select name="brand" onChange={({ target }) => setBrand(target.value)} className="select-css">
                  {brandOptions.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="col-lg-3 mt-2">
              <div className="input-group">
                <select name="category" onChange={({ target }) => setCategory(target.value)} className="select-css">
                  {categoryOptions.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="col-lg-3 mt-2">
              <div className="input-group">
                <button type="submit" className="btn bg-gradient-warning">
                  <span className="btn-inner--icon"><i className="fa fa-search"></i></span>
                  <span className="btn-inner--text">Search</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
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
              ({items.length}) Vehicle(s) Found
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>



      <SearchComponent items={carBrands} />

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

      <div className="row" style={{ backgroundImage: `url(/img/car-bg.jpg)`, height: '500px' }}>

        {testimonials.map((testimonial, index) => (
          <Testimonial
            key={index}
            image={testimonial.image}
            name={testimonial.name}
            text={testimonial.text}
            rating={testimonial.rating}
            background={testimonial.background}
          />
        ))}
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

    <Tabs defaultActiveKey="brand" transition={false} id="noanim-tab-example" className="mb-3">

      <Tab eventKey="brand" title="Brand">
        <Row className="justify-content-start">
          {brandItems.map((item, index) => (
            <Col key={index} xs={6} sm={3} lg={2} className="mb-3">
              <Card bg="dark" text="white" className="h-100 d-flex flex-column justify-content-between ">
                <Card.Img src={item.imageUrl} alt="Card image" style={{ height: '100%' }} />
                <Card.ImgOverlay>
                  <Card.Title>{item.name}</Card.Title>
                </Card.ImgOverlay>
              </Card>
            </Col>
          ))}
        </Row>
      </Tab>
      <Tab eventKey="make" title="Make">
        <Row className="justify-content-start pb-2">
          {typeItems.map((item, index) => (
            <Col key={index} xs={6} sm={3} lg={2} className="mb-3">
              <Card bg="dark" text="white" className="h-100 d-flex flex-column justify-content-between mb-3">
                <Card.Img src={item.imageUrl} alt="Card image" style={{ height: '100%' }}/>
                <Card.ImgOverlay>
                  <Card.Title>{item.name}</Card.Title>
                </Card.ImgOverlay>
              </Card>
            </Col>
          ))}
        </Row>
      </Tab>
    </Tabs>
  </Container>
 
    </>
  );
}

export default Home;
