import React from 'react';
import { useState, useEffect } from 'react';
import { Carousel, Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

const car = {
  id: 1,
  name: "Tesla Model S",
  brand: "Tesla",
  category: "Electric Sedan",
  transmission: "Automatic",
  year: 2022,
  model: "Model S",
  drive_type: "AWD",
  engine: "Electric",
  fuel_type: "Electric",
  image_url: "/img/tmit.jpeg", // URL to the image of the car
};

const images = [
  { id: 1, image_url: "/img/tmit.jpeg" },
  { id: 2, image_url: "/img/tmit.jpeg" },
  { id: 3, image_url: "/img/tmit.jpeg" },
  // Add more image URLs as needed
];

function Vehicle() {
  return (
 <Container className="mt-4">
      <Row>
        <Col md={6}>
          <Carousel style={{ width: "100%", maxWidth: "500px" }}>
            {images.map((image) => (
              <Carousel.Item key={image.id}>
                <img
                  className="d-block w-100"
                  src={image.image_url}
                  alt={`Slide ${image.id}`}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>{car.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{car.brand} - {car.model}</Card.Subtitle>
              <Card.Text>
                <strong>Category:</strong> {car.category}<br />
                <strong>Transmission:</strong> {car.transmission}<br />
                <strong>Year:</strong> {car.year}<br />
                <strong>Drive Type:</strong> {car.drive_type}<br />
                <strong>Engine:</strong> {car.engine}<br />
                <strong>Fuel Type:</strong> {car.fuel_type}<br />
              </Card.Text>
            </Card.Body>
          </Card>
          <div className="mt-4">
            <h4>Contact Seller</h4>
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
        </Col>
      </Row>
    </Container>
  );
}

export default Vehicle;
