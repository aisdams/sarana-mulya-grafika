import React from 'react';
import Image from 'next/image';
import Client1 from '../../../public/img/client/asus.webp';
import Client2 from '../../../public/img/client/odisys.webp';
import Client3 from '../../../public/img/client/shima.webp';
import Client4 from '../../../public/img/client/sml.webp';
import Client5 from '../../../public/img/client/urogen.webp';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Mousewheel, Keyboard } from 'swiper/modules';

export default function Client() {
  return (
    <div className="grid lg:flex mx-auto justify-center gap-20 mt-20 mb-32">
      <Image
        className="w-32 h-10 object-contain grayscale transition-all duration-500 hover:grayscale-0"
        src={Client1}
        alt=""
      />
      <Image
        className="w-32 h-10 object-contain grayscale transition-all duration-500 hover:grayscale-0"
        src={Client2}
        alt=""
      />
      <Image
        className="w-32 h-10 object-contain grayscale transition-all duration-500 hover:grayscale-0"
        src={Client3}
        alt=""
      />
      <Image
        className="w-32 h-10 object-contain grayscale transition-all duration-500 hover:grayscale-0"
        src={Client4}
        alt=""
      />
      <Image
        className="w-32 h-10 object-contain grayscale transition-all duration-500 hover:grayscale-0"
        src={Client5}
        alt=""
      />
    </div>
  );
}
