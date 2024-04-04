import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function About() {
  return (
    <>
      <Container>
        <h2 className="text-center text-warning mb-3">Services Offered</h2>
        <Row className="align-items-center">
          <Col lg={4} className="mt-2">
            <div className="avatar avatar-xxl shadow-xl">
              <img src="/img/feat/3.jpg" className="w-100 h-auto" style={{ width: '200px', height: '200px' }} alt="Vehicle inspections" />
            </div>
            <h5>Vehicle inspections</h5>
            <p>All of our vehicles undergo a thorough inspection to ensure they meet our high standards for safety and quality.</p>
          </Col>
          <Col lg={4} className="mt-2">
            <div className="avatar avatar-xxl shadow-xl">
              <img src="/img/feat/1.jpg" className="w-100 h-auto" style={{ width: '200px', height: '200px' }} alt="Trade-in appraisals" />
            </div>
            <h5>Trade-in appraisals</h5>
            <p>We'll give you a fair and accurate appraisal for your trade-in vehicle.</p>
          </Col>
          <Col lg={4} className="mt-2">
            <div className="avatar avatar-xxl shadow-xl">
              <img src="/img/feat/7.jpg" className="w-100 h-auto" style={{ width: '200px', height: '200px' }} alt="Warranty options" />
            </div>
            <h5>Warranty options</h5>
            <p>We offer a variety of extended warranty options to give you peace of mind.</p>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col md={8} className="d-flex justify-content-center flex-column text-lg-start text-center">
            <h2 className="mb-4">About</h2>
            <p className="mb-2">Discover the difference – where your needs always come first. Our team of automotive experts is dedicated to providing great customer service and building lasting relationships. With a wide range of cars, strong relationships with suppliers, and a commitment to customer confidence and support, we're the dealership that delivers.</p>
            <h6 className="mt-4">Why You Should Buy From Us</h6>
            <ul className="m-lg-2 m-auto">
              <li className="mb-2">Quality and certified pre-owned vehicles</li>
              <li className="mb-2">Financing and leasing options</li>
              <li className="mb-2">Trade-in and appraisal services</li>
              <li className="mb-2">Experienced and knowledgeable sales staff</li>
              <li className="mb-2">Competitive pricing and specials</li>
              <li className="mb-2">Convenient location and hours of operation</li>
              <li className="mb-2">Test drive opportunities and vehicle demonstrations</li>
            </ul>
            <p>Whether you're a seasoned car enthusiast or a first-time buyer, AutoHaven is your trusted partner on the road to automotive excellence. Start your journey with us today!</p><p className="blockquote my-3 ps-2">
              <span className="text-bold">“We purchased a vehicle and had a great experience! The staff is very friendly and answered all our questions. Hassle-free test drive and all information clearly presented.”</span>
              <br />
              <small className="blockquote-footer">
                Shailesh Kushwaha
              </small>
            </p>
          </Col>
          <Col md={3} className="mx-lg-0 mx-auto px-lg-0 px-md-0 my-auto">
            <div className="card card-blog card-background cursor-pointer">
              <div className="full-background" style={{ backgroundImage: "url('/img/road1.jpg')" }} 
              loading="lazy"></div>
              <div className="card-body">
                <div className="content-left text-start my-auto py-4">
                  <h3 className="card-title text-white"> Opening Hours </h3>
                  <div className="table-responsive">
                    <table className="table align-items-center mb-0 text-white">
                      <tbody>
                        <tr>
                          <th className="text-uppercase text-secondary text-xs font-weight-bolder opacity-7">Monday</th>
                          <td className="text-capitalize text-sm">8:30am - 6:45pm</td>
                        </tr>
                        <tr>
                          <th className="text-uppercase text-secondary text-xs font-weight-bolder opacity-7">Tuesday</th>
                          <td className="text-capitalize text-sm">8:30am - 6:45pm</td>
                        </tr>
                        <tr>
                          <th className="text-uppercase text-secondary text-xs font-weight-bolder opacity-7">Wednesday</th>
                          <td className="text-capitalize text-sm">8:30am - 6:45pm</td>
                        </tr>
                        <tr>
                          <th className="text-uppercase text-secondary text-xs font-weight-bolder opacity-7">Thursday</th>
                          <td className="text-capitalize text-sm">8:30am - 6:45pm</td>
                        </tr>
                        <tr>
                          <th className="text-uppercase text-secondary text-xs font-weight-bolder opacity-7">Friday</th>
                          <td className="text-capitalize text-sm">8:30am - 6:45pm</td>
                        </tr>
                        <tr>
                          <th className="text-uppercase text-secondary text-xs font-weight-bolder opacity-7">Saturday</th>
                          <td className="text-capitalize text-sm">8:30am - 2:30pm</td>
                        </tr>
                        <tr>
                          <th className="text-uppercase text-secondary text-xs font-weight-bolder opacity-7">Sunday</th>
                          <td className="text-capitalize text-sm">Closed</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default About;
