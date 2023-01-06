import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../img/banner-phone.jpg';
import img2 from '../../img/ipad.jpg';
import img3 from '../../img/macbbok.jpg';

const Banner = () => {
    return (
        
            <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100 h-50"
      src={img3}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Awesome Macbook List</h3>
      <p> This is details about our best product apple macbook</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block h-75 w-100"
      src={img1}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3 className='text-dark'>All iphone is Available</h3>
      <p className='text-dark'> In our godown all product are Available </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 h-75"
      src={img2}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3 className='text-dark'>Latest Transparent Iphone</h3>
      <p className='text-dark'>Our most precious product was released</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        
    );
};

export default Banner;