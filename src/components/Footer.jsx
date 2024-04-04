import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Footer = () => {
  return (


        <footer className="footer pt-5 mt-5" style={{ backgroundImage: `url(/img/car-bg.jpg)`}}>
          <Container>
            <Row>
              <Col md={4} className="mb-4 ms-auto">
                <div>
                  <h6 className="font-weight-bolder mb-4 text-white">
                    <img src="/img/our-cars.svg" width="24" height="24" alt="" />
                    AutoHaven
                  </h6>
                  <p className="text-sm text-white">we provide maintenance and repair services from certified technicians who use only genuine parts. Our team is dedicated to ensuring that your vehicle remains in top condition, and we offer convenient scheduling options to minimize disruptions to your day.</p>
                </div>
                <div>
                  <ul className="d-flex flex-row ms-n3 nav text-white" style={{ display: 'block !important' }}>
                    <li className="nav-item text-white">
                      <a className="nav-link pe-1 text-white">
                        <i className="fas fa-map-marker-alt text-lg opacity-8"></i> Ngong road, next to Prestige Plaza
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link pe-1 text-white" href="https://twitter.com/creativetim" target="_blank">
                        <i className="fas fa-phone text-lg opacity-8"></i> +254 700 888 666
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link pe-1 text-white" href="https://dribbble.com/creativetim" target="_blank">
                        <i className="fas fa-envelope-square text-lg opacity-8"></i> info@alsmotors.co.ke
                      </a>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col md={4} className="col-sm-6 col-6 mb-4 text-white">
                <div>
                  <h6 className="text-sm text-white font-weight-bolder">Useful Links</h6>
                  <ul className="flex-column ms-n3 nav text-white">
                    <li className="nav-item">
                      <a className="nav-link text-white">
                        Change Oil and Filter
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-white">
                        Brake Pads Replacement
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-white">
                        Timing Belt Replacement
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-white">
                        Pre-purchase Car Inspection
                      </a>
                    </li>
                    <li className="nav-item text-white">
                      <a className="nav-link text-white">
                        Starter Replacement
                      </a>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col md={4} className="col-sm-6 col-6 mb-4">
                <div>
                  <h6 className="text-sm text-white font-weight-bolder">Subscribe Our Newsletter</h6>
                  <form method="post" action="{{ url_for('home_blueprint.subscription') }}">
                    <div className="row">
                      <p className="text-sm text-white">Keep up on our always evolving products features and technology. Enter your e-mail and subscribe to our newsletter.</p>
                      <div className="col-8">
                        <div className="input-group input-group-outline">
                          <label className="form-label text-white">Email Here...</label>
                          <input name="email" type="email" className="text-white form-control mb-sm-0" />
                        </div>
                      </div>
                      <div className="col-4 ps-0">
                        <button type="submit" className="btn bg-gradient-warning mb-0 h-100 text-white position-relative z-index-2">Subscribe</button>
                      </div>
                    </div>
                  </form>
                </div>
              </Col>
            </Row>
            <Row className="mb-4">
              <Col>
                <Card className="bg-gradient bg-dark card-frame bg-gradient-dark opacity-6">
                  <Card.Body style={{ display: 'flex' }}>
                    <Col xs={8}>
                      <h6 className="text-sm text-white font-weight-bolder">ARE YOU LOOKING FOR A CAR?</h6>
                      <p className="text-sm text-white">Search Our Inventory With Thousands Of Cars And More Cars Are Adding On Daily Basis</p>
                    </Col>
                    <Col xs={4} className="ps-0">
                      <a href="/collection">
                        <Button type="button" variant="warning" className="mt-4 text-white">Buy Now</Button>
                      </a>
                    </Col>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="bg-gradient bg-dark card-frame bg-gradient-dark opacity-7">
                  <Card.Body style={{ display: 'flex' }}>
                    <Col xs={8}>
                      <h6 className="text-sm text-white font-weight-bolder">ARE YOU LOOKING FOR A CAR?</h6>
                      <p className="text-sm text-white">Search Our Inventory With Thousands Of Cars And More Cars Are Adding On Daily Basis</p>
                    </Col>
                    <Col xs={4} className="ps-0">
                      <a href="/collection">
                        <Button type="button" variant="warning" className="mt-4 text-white">Buy Now</Button>
                      </a>
                    </Col>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="text-center">
                  <p className="text-dark my-4 text-sm text-white font-weight-normal">
                    &copy;AutoHaven
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </footer>
   

  );
};

export default Footer;
