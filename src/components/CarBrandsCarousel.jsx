import React from 'react';

const CarBrandsCarousel = ({ carBrands }) => {
  return (
    <section className="vehicles my-5" id="vehicles">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mx-auto text-center">
            <h3 className="mb-0">Overview of Car Brands and</h3>
            <h2 className="text-gradient text-warning mb-3">Their Features</h2>
          </div>
        </div>

        <div id="carouselExampleControlss" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner mb-4">
            {carBrands.map((brand, index) => (
              <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                <div className="page-header min-vh-85">
                  <div className="container">
                    <div className="row">
                      <div className="slider-item">
                        <div className="slider-item-image">
                          <img className="fadeIn2 fadeOut" src={brand.image} alt={`Image of ${brand.name}`} />
                        </div>
                        <div className="slider-item-description">
                          <h3 className="fadeIn1 fadeInBottom">{brand.name}</h3>
                          <p className="fadeIn3 fadeInBottom">{brand.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="min-vh-75 position-absolute w-100 top-0">
            <a className="carousel-control-prev" href="#carouselExampleControlss" role="button" data-bs-slide="prev">
              <span className="carousel-control-prev-icon position-absolute bottom-50 bg-gradient-warning" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControlss" role="button" data-bs-slide="next">
              <span className="carousel-control-next-icon position-absolute bottom-50 bg-gradient-warning" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarBrandsCarousel;
