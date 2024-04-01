import React from 'react';
import { Navbar, Container, NavDropdown } from 'react-bootstrap';
import { HouseFill, InfoCircleFill, Shop, TelephoneFill } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
  const navigate = useNavigate();

  const officeHours = [
    { day: 'Mon-Fri', time: '9:00 AM - 6:00 PM' },
    { day: 'Sat-Sun', time: '9:00 AM - 2:00 PM' }
  ];

  const officeContacts = [
    { type: 'Office', contact: '+(254) 700888666' },
    { type: 'Email', contact: 'info@alsmotors.co.ke' }
  ];

  return (
    <Navbar expand="lg" bg="white" sticky="top" style={{ minHeight: '80px' }}>
      <Container>
        <Navbar.Brand href="/" rel="tooltip" title="Alsmotors" data-placement="bottom">
          <img src="./img/favicon.png" width="100%" height="100vh" alt="" />
          Motors
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <ul className="navbar-nav navbar-nav-hover ms-auto">
            <NavDropdown title={<><HouseFill className="opacity-6 me-2 text-md" />Our Office</>}>
              {officeHours.map((item, index) => (
                <NavDropdown.Item key={index}>
                  <span className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">{item.day}</span>
                  <span className="text-xs">{item.time}</span>
                </NavDropdown.Item>
              ))}
              <NavDropdown.Item>
                <p className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Ngong road, next to Prestige Plaza - Nairobi, Kenya</p>
                <div className="arrow ms-auto ms-md-2"></div>
              </NavDropdown.Item>
              {officeContacts.map((item, index) => (
                <NavDropdown.Item key={index}>
                  <span className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">{item.type}</span>
                  <span className="text-sm">{item.contact}</span>
                </NavDropdown.Item>
              ))}
            </NavDropdown>
            <li className="nav-item mx-2">
              <a href="/about" className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center">
                <InfoCircleFill className="opacity-6 me-2 text-md" />
                About Us
                <div className="arrow ms-auto ms-md-2"></div>
              </a>
            </li>
            <NavDropdown title={<><Shop className="opacity-6 me-2 text-md" />Shop</>}>
              <NavDropdown.Item href="/collection?location=nairobi">
                <h6 className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">Nairobi</h6>
                <span className="text-sm">Explore our collection</span>
              </NavDropdown.Item>
              <NavDropdown.Item href="/collection?location=mombasa">
                <h6 className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">Mombasa</h6>
                <span className="text-sm">Explore our collection</span>
              </NavDropdown.Item>
            </NavDropdown>
            <li className="nav-item ms-lg-auto cursor-pointer">
              <a href="/contact" className="nav-link nav-link-icon me-2">
                <TelephoneFill className="text-lg  me-1 text-md" />
                <p className="d-inline text-sm z-index-1" data-bs-toggle="tooltip" data-bs-placement="bottom">Contact Us</p>
              </a>
            </li>
          </ul>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Nav;
