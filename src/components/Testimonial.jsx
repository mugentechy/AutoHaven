import React from 'react';
import { StarFill } from 'react-bootstrap-icons';

const Testimonial = ({ image, name, text, rating, background }) => (
  <div className="col-md-3 mt-4">
    <div className="card">
      <div
        className="card-header d-flex align-items-center justify-content-center position-relative"
        style={{ 
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          height: '120px',
        }}
      >
        <img
          src={image}
          alt={name}
          className="rounded-circle shadow-sm position-absolute"
          style={{ width: '100px', zIndex: 2, top:'50%',left: '50%', transform: 'translateX(-50%)' }}
          loading="lazy"
        />
      </div>

        
        <div className="card-body text-center d-flex flex-column justify-content-center row mt-4">
        <h6 className="text-black mb-0 font-weight-bolder">{name}</h6>
          <p>{text}</p>
        </div>
   <div className="card-footer text-center">
  {[1, 2, 3, 4, 5].map((star) => (
   <StarFill style={{ color: 'gold' }} />
  ))}
</div>
  
    </div>
  </div>
);

export default Testimonial;
