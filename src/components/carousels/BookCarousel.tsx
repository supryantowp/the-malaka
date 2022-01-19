import React from 'react';
import SwiperCore, { EffectCards, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/effect-cards';

import { covers } from '@/data/home';

import NextImage from '../NextImage';

SwiperCore.use([EffectCards, Pagination, Navigation]);

const BookCarousel = () => {
  return (
    <>
      <Swiper effect='cards' grabCursor={true} className='swiper-book'>
        {covers.map((item, index) => (
          <SwiperSlide className='p-0 bg-white rounded-3xl' key={index}>
            <NextImage
              src={item}
              layout='fixed'
              width='346px'
              height='490px'
              alt={`cover ${index}`}
              objectFit='cover'
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default BookCarousel;
