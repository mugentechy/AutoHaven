import React from 'react';
import { Carousel, Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
const ContactPage = () => {
  return (
    <>
    <div className="page-header min-vh-50" style={{ backgroundImage: 'url(/img/about-bg.jpg)' }}>
      <span className="mask bg-gradient-dark opacity-4"></span>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 text-center mx-auto">
            <h1 className="text-white mt-4 mb-1">Got a question?</h1>
            <p className="lead text-white mb-6">We'd like to talk more about what you need</p>
          </div>
        </div>
      </div>
    </div>

    <div className="card card-body shadow-xl">
      <section className="py-2">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="card-body shadow-xl">
                <div className="card-header">
                  <h6 className="">AutoHaven</h6>
                  <p className="opacity-8 mb-4">Head Office — Showroom # 1 <br />
                    Nairobi, Kenya
                  </p>
                  <div className="d-flex p-2">
                    <div><i className="fas fa-phone text-sm"></i></div>
                    <div className="ps-3"><span className="text-sm opacity-8">+254 700 577 453</span></div>
                  </div>
                  {/* More contact info */}
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <iframe src="https://www.google.com/maps/embed?pb=" width="800" height="270" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
          {/* More sections */}
        </div>
      </section>
      {/* More content */}
    </div>

    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-4">
          <div className="card-body shadow-xl">
            <div className="card-header">
              <h3 className="">Contact Information</h3>
              <p className="mb-4">AutoHaven the most trusted provider of vehicle export solutions in the region, with over 120,000 vehicles sold we have deservedly earned the reputation for integrity, transparency and putting you the customer at the heart of our business.</p>
              <p className="mb-4">Please contact us directly for all of your vehicle requirements with complete confidence</p>
            </div>
          </div>
        </div>
        <div className="col-lg-8">
          <form className="card-body shadow-xl" method="post" action="{{ url_for('home_blueprint.index') }}">
            <input type="hidden" name="contact" />
            {/* Form fields */}
            <div className="row">
              <div className="col-md-6 text-end ms-auto">
                <button type="submit" className="btn bg-gradient-warning mb-0">SCHEDULE A TEST DRIVE</button>
                            <Form>
              <Form.Group controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>
              <Form.Group controlId="formBasicMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default ContactPage;
