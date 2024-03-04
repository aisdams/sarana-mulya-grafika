import 'swiper/css';
import React from 'react';
import Image from 'next/image';
import 'swiper/css/pagination';
import { BsPrinter } from 'react-icons/bs';
import { MdEventNote } from 'react-icons/md';
import { RiComputerLine } from 'react-icons/ri';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IoShareSocialOutline } from 'react-icons/io5';
import ArrowImage from '/public/img/product_service.png';
import { MdOutlineDesignServices } from 'react-icons/md';
import imageProduct1 from '/public/img/System-Management-.jpg';
import imageProduct2 from '/public/img/social-media-mangement.jpg';
import imageProduct3 from '/public/img/design-management.jpg';
import imageProduct4 from '/public/img/Printing-management.jpg';
import imageProduct5 from '/public/img/event-management.png';

import { Autoplay, Mousewheel, Keyboard } from 'swiper/modules';

export default function ProductService() {
  return (
    <div className="relative text-center my-32">
      <h1 className="font-bold text-3xl uppercase w-max mx-auto mb-3">
        Product & Services
      </h1>
      <h3 className="text-sm font-light">
        Complete About Students Advance Course.
      </h3>
      <div className="flex justify-between">
        <Swiper
          cssMode={true}
          slidesPerView={3}
          mousewheel={true}
          breakpoints={{
            1024: {
              slidesPerView: 1,
              spaceBetween: 50,
            },
          }}
          loop={true}
          keyboard={true}
          spaceBetween={20}
          grabCursor={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Mousewheel, Keyboard, Autoplay]}
          pagination={{
            clickable: true,
          }}
          className="mySwiper mt-20 w-[min(85%,1280px)]"
        >
          <SwiperSlide>
            <Image
              src={imageProduct1}
              alt=""
              className="w-full h-72 object-cover"
            />
            <h1 className="font-bold mt-8 mb-3 text-xl">System management</h1>
            <p className="text-left">
              System management is the administration of information technology
              (IT) systems in corporate networks or data centers. An effective
              systems management plan facilitates the delivery of IT as a
              service and enables employees of the organization to respond
              quickly to changing business needs and system activities.
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={imageProduct2}
              alt=""
              className="w-full h-72 object-cover"
            />
            <h1 className="font-bold mt-8 mb-3 text-xl">
              Social Media Management
            </h1>
            <p className="text-left">
              A corporate social media management service that includes
              planning, creating, and publishing content on all types of
              platforms such as Instagram, Facebook, Tiktok, Youtube, Linkedin,
              Twitter, etc.
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={imageProduct3}
              alt=""
              className="w-full h-72 object-cover"
            />
            <h1 className="font-bold mt-8 mb-3 text-xl">Design Management</h1>
            <p className="text-left">
              Is a graphic design and video editing service according to
              customer needs. We provide brochure/flyer, company profile,
              cartoon, idcard, sticker, banner, neonbox, merchandise, billboard,
              and so on.
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={imageProduct4}
              alt=""
              className="w-full h-72 object-cover"
            />
            <h1 className="font-bold mt-8 mb-3 text-xl">Printing Management</h1>
            <p className="text-left">
              Is an offset printing and digital printing service. Products that
              we can print both offset and digital printing are: brochure/flyer
              printing, company profile, cartoonama, idcard, sticker, banner,
              neonbox, merchandise, billboard, packaging, and so on.
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={imageProduct5}
              alt=""
              className="w-full h-72 object-cover"
            />
            <h1 className="font-bold mt-8 mb-3 text-xl">Event management</h1>
            <p className="text-left">
              An event management service for exhibitions, training, work
              meetings, gatherings, and so on. Exhibition → provides exhibition
              management services both at home and abroad (Exhibition
              Organizer).
            </p>
          </SwiperSlide>
        </Swiper>

        <Image
          src={ArrowImage}
          alt=""
          className="w-32 absolute top-0 right-0 brightness-0 invert-[1]"
        />
      </div>
    </div>
  );
}
