import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('services.json')
      .then(res => res.json())
      .then(data => setServices(data));
  }, []);
  return (
    <div id='services' className='container'>
      <h2 className="services-title mt-5 mb-3">Our Services: {services.length}</h2>
      <div className="services-container">
        {services.map(service => (
          <Service key={service.id} service={service}></Service>
        ))}f
      </div>
    </div>
  );
};
// import './Services.css
export default Services;
