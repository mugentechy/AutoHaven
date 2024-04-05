import React from 'react';
import { StarFill } from 'react-bootstrap-icons';

const Testimonial = ({ testimonials }) => (
   <div className="container">
  <div className="row">
    {testimonials.map((testimonial, index) => (
      <div className="col-md-3 mt-5 mb-5" key={index}>
        <div className="card">
          <div
            className="card-header d-flex align-items-center justify-content-center position-relative"
            style={{ 
              backgroundImage: `url(${testimonial.background})`,
              backgroundSize: 'cover',
              height: '120px',
            }}
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="rounded-circle shadow-sm position-absolute"
              style={{ width: '100px', zIndex: 2, top:'50%',left: '50%', transform: 'translateX(-50%)' }}
              loading="lazy"
            />
          </div>

          <div className="card-body text-center d-flex flex-column justify-content-center row mt-4">
            <h6 className="text-black mb-0 font-weight-bolder">{testimonial.name}</h6>
            <p>{testimonial.text}</p>
          </div>
          <div className="card-footer text-center">
            {[1, 2, 3, 4, 5].map((star) => (
              <StarFill key={star} style={{ color: 'gold' }} />
            ))}
          </div>
        </div>
      </div>
    ))}
  </div>
   </div>
);

export default Testimonial;
