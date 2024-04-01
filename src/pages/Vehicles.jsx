import React,{useState} from 'react';

// Dummy data for cars
const cars = [
  {
    id: 1,
    name: 'Toyota Corolla',
    image_url: '/img/tmit.jpeg',
  },
  {
    id: 2,
    name: 'Honda Civic',
    image_url: '/img/tmit.jpeg',
  },
  {
    id: 3,
    name: 'BMW X5',
    image_url: '/img/tmit.jpeg',
  },
    {
    id: 1,
    name: 'Toyota Corolla',
    image_url: '/img/tmit.jpeg',
  },
  {
    id: 2,
    name: 'Honda Civic',
    image_url: '/img/tmit.jpeg',
  },
  {
    id: 3,
    name: 'BMW X5',
    image_url: '/img/tmit.jpeg',
  },
    {
    id: 1,
    name: 'Toyota Corolla',
    image_url: '/img/tmit.jpeg',
  },
  {
    id: 2,
    name: 'Honda Civic',
    image_url: '/img/tmit.jpeg',
  },
  {
    id: 3,
    name: 'BMW X5',
    image_url: '/img/tmit.jpeg',
  },
    {
    id: 1,
    name: 'Toyota Corolla',
    image_url: '/img/tmit.jpeg',
  },
  {
    id: 2,
    name: 'Honda Civic',
    image_url: '/img/tmit.jpeg',
  },
  {
    id: 3,
    name: 'BMW X5',
    image_url: '/img/tmit.jpeg',
  },
    {
    id: 1,
    name: 'Toyota Corolla',
    image_url: '/img/for.jpg',
  },
  {
    id: 2,
    name: 'Honda Civic',
    image_url: '/img/tmit.jpeg',
  },
  {
    id: 3,
    name: 'BMW X5',
    image_url: '/img/tmit.jpeg',
  },

  // Add more cars as needed
];

function Vehicles() {

    const [make, setMake] = useState('');

  const [model, setModel] = useState('');

  const [price, setPrice] = useState('');


  const handleSubmit = (event) => {

    event.preventDefault();

    onSubmit({ make, model, price });

  };
  return (
    <div className="cover">
      {/* Include navigation */}
      <div>
        {/* Section with four info areas left & one card right with image and waves */}
        <section className="py-5">
          <div className="container">
            <div className="row">
 
              <div className="col-md-3">
                            <form role="form" method="post" className="text-start">
      <div className="input-group input-group-outline mb-4">
        <label className="form-label">Search by keyword</label>
        <input className="form-control" type="text" />
      </div>

      <div className="input-group input-group-outline mb-3">
        <select name="category" className="select-css">
          <option value="">Select Category</option>
          <option value="sedan">SEDAN & HATCHBACK</option>
          <option value="suv">SUV</option>
          <option value="pickups">PICK UPS</option>
          <option value="buses">BUSES VANS & MPVS</option>
        </select>
      </div>

      <div className="input-group input-group-outline mb-3">
        <select name="brand" className="select-css">
          <option value="">Select Brand</option>
          <option value="toyota">TOYOTA</option>
          <option value="nissan">NISSAN</option>
          <option value="mazda">MAZDA</option>
          <option value="subaru">SUBARU</option>
          <option value="isuzu">ISUZU</option>
          <option value="mistubishi">MISTUBISHI</option>
          <option value="honda">HONDA</option>
          <option value="bmw">BMW</option>
          <option value="benz">BENZ</option>
          <option value="other">OTHER</option>
        </select>
      </div>

      <div className="input-group input-group-outline mb-3">
        <select className="select-css" name="location">
          <option value="">Select Location</option>
          <option value="nairobi">NAIROBI</option>
          <option value="mombasa">MOMBASA</option>
        </select>
      </div>

      <div className="input-group input-group-outline mb-3">
        <select className="select-css" name="fuel">
          <option value="">Fuel Type</option>
          <option value="diesel">DIESEL</option>
          <option value="electric">ELECTRIC</option>
          <option value="petrol">PETROL</option>
          <option value="hybrid">HYBRID</option>
        </select>
      </div>

      <div className="input-group input-group-outline mb-3">
        <select className="select-css" name="transmission">
          <option value="">Fuel Transmission</option>
          <option value="automatic">AUTOMATIC</option>
          <option value="manual">MANUAL</option>
          <option value="hybrid">HYBRID</option>
        </select>
      </div>

      <div className="form-check">
        <input name="promotion" type="checkbox" className="form-check-input" />
        <label className="custom-control-label" htmlFor="customCheckDisabled">Promotion</label>
      </div>

      <div className="form-check">
        <input type="checkbox" name="used" className="form-check-input" />
        <label className="custom-control-label">Brand New</label>
      </div>

      <div className="input-group input-group-dynamic pt-4">
        <button type="submit" className="btn bg-gradient-warning w-100 my-4 mb-2">
          <span className="btn-inner--icon"><i className="fa fa-search"></i></span>
          <span className="btn-inner--text">Search</span>
        </button>
      </div>
    </form>
              </div>
              <div className="col-md-9">
                {/* Loop through cars */}
                <div className="row">
                  {cars.map(car => (
                    <div className="col-md-3 mt-4" key={car.id}>
                      <div className="card shadow-lg mt-4">
                        <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                          <a className="d-block blur-shadow-image">
                            <img src={car.image_url} style={{width: '100%'}} />
                          </a>
                        </div>
                        <a href={`/vehicle/${car.id}`}>
                          <div className="card-body">
                            <h6>{car.name}</h6>
                          </div>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Vehicles;
