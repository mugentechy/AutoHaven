import React from 'react';
import { useState, useEffect } from 'react';
import { Carousel, Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { url } from "../utils/url.js";
import { useParams } from 'react-router-dom';


function Vehicle() {
  const { location, vehicleId } = useParams();

    const [cars, setCars] = useState([]);
      const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

    console.log(location)

  
  useEffect(() => {
    axios.get(`${url}/single/sedan/${location}/cars/${vehicleId}`)
      .then(response => {
        const carsData = parseHTML(response.data);
        setCars(carsData.car_details);
      })
      .catch(error => {
        console.error('Error fetching data from jiji.com:', error);
      });
  }, []);

  const parseHTML = (data) => {
    return data;
  };

console.log(cars)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send form data to backend server
    axios.post(`${url}/message`, { formData, cars })
      .then(response => {
        console.log('Form submitted successfully');
        toast.success('Request submitted successfully!');
      })
      .catch(error => {
        console.error('Error submitting form:', error);
      });
    
    // Clear form fields after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };



  return (
 <Container className="mt-4">
 <ToastContainer />
      <Row>
        <Col md={6}>
          <Carousel style={{ width: "100%", maxWidth: "500px" }}>
            {cars?.images?.map((image,index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100"
                  src={image}
                
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>{cars.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Ksh {parseInt(cars.price).toLocaleString()}</Card.Subtitle>
              <Card.Text>
              {cars.description}
      
              </Card.Text>
            </Card.Body>
          </Card>
          <div className="mt-4">
            <h4>Request call back</h4>
 <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" name="name" value={formData.name} onChange={handleChange} />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" name="email" value={formData.email} onChange={handleChange} />
              </Form.Group>
              <Form.Group controlId="formBasicMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter your message" name="message" value={formData.message} onChange={handleChange} />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Vehicle;
