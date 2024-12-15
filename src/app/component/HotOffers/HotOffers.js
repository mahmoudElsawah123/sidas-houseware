"use client";
import React from 'react';
import ImageLayout from '/public/images/hot-offer-layout.png';
import Image from 'next/image';
import HotCards from './HotCards';

export default function HotOffers() {
  return (
    <div className='container'>
      <div className='relative mt-10 h-[390px] md:h-[300px]'>
        <Image
          alt="Mountains"
          src={ImageLayout}
          placeholder="blur"
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: 'cover',
          }}
        />
        <div className='container absolute right-0 top-0 py-3 md:px-10 px-3'>
          <div className='block md:flex items-center'>
            <div className='flex justify-between items-center md:block'>
              <h1 className='text-white font-bold text-[1.5rem] md:text-[2.5rem] mb-4'>أقوى العروض</h1>
              <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
                تسوق الآن
              </button>
            </div>
            <div className='overflow-hidden'>
                <HotCards/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
