import React from 'react';
import { Carousel } from "flowbite-react";
import Image from 'next/image';
import Banner1 from '/public/images/banner-1.jpg';
import Banner2 from '/public/images/banner-2.jpg';
import Banner3 from '/public/images/banner-3.jpg';
import Banner4 from '/public/images/banner-4.jpg';
import Banner5 from '/public/images/banner-5.png';

const Banner = () => {
  return (
    <div className='container'>
      <div className="h-auto" style={{ direction: 'ltr' }}>
        <Carousel pauseOnHover>
          <div className="relative w-full h-full max-w-full max-h-full">
            <Image
              src={Banner2}
              alt="Banner 2"
              className="w-auto h-auto max-w-full max-h-full"
            />
          </div>
          <div className="relative w-full h-full max-w-full max-h-full">
            <Image
              src={Banner3}
              alt="Banner 3"
              className="w-auto h-auto max-w-full max-h-full"
            />
          </div>
          <div className="relative w-full h-full max-w-full max-h-full">
            <Image
              src={Banner1}
              alt="Banner 1"
              className="w-auto h-auto max-w-full max-h-full"
            />
          </div>
          <div className="relative w-full h-full max-w-full max-h-full">
            <Image
              src={Banner4}
              alt="Banner 4"
              className="w-auto h-auto max-w-full max-h-full"
            />
          </div>
          <div className="relative w-full h-full max-w-full max-h-full">
            <Image
              src={Banner5}
              alt="Banner 5"
              className="w-auto h-auto max-w-full max-h-full"
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Banner;
