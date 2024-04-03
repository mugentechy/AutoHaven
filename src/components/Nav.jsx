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
    { type: 'Office', contact: '+(254) 700577453' },
    { type: 'Email', contact: 'mugentechy@gmail.com' }
  ];

  return (
    <Navbar expand="lg" bg="white" sticky="top" style={{ maxHeight: '90px',boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
      <Container>
        <Navbar.Brand href="/" rel="tooltip" title="Alsmotors" data-placement="bottom">
          <img src="./img/our-cars.svg" alt="" />
          AutoHaven
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

                <li className="nav-item mx-2">
              <a href="/vehicles" className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center">
                <Shop className="opacity-6 me-2 text-md" />
                Vehicles
                <div className="arrow ms-auto ms-md-2"></div>
              </a>
            </li>


          
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
