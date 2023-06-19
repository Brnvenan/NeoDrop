import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel  from 'react-bootstrap/Carousel';
  
export default function Use() {
  return (
    <div class="align-items: center, mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8, rounded-xl">
      <Carousel fade>
        <Carousel.Item interval={2000}>
          <img
            className="align-items: center, mx-auto w-max, rounded-xl"
            src="1.png"
            alt="Image One"
          />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="align-items: center, mx-auto max-w-2xl, rounded-xl"
            src="4.png"
            alt="Image Two"
          />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="align-items: center, mx-auto max-w-2xl, rounded-xl"
            src="5.png"
            alt="Image Two"
          />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="align-items: center, mx-auto max-w-2xl, rounded-xl"
            src="11.png"
            alt="Image Two"
          />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="align-items: center, mx-auto max-w-2xl, rounded-xl"
            src="12.png"
            alt="Image Two"
          />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="align-items: center, mx-auto max-w-2xl, rounded-xl"
            src="13.png"
            alt="Image Two"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}