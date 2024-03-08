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
            320: {
              slidesPerView: 1,
              spaceBetween: 50,
            },
            680: {
              slidesPerView: 1,
              spaceBetween: 50,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 50,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          loop={true}
          keyboard={true}
          spaceBetween={20}
          grabCursor={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Mousewheel, Keyboard, Autoplay]}
          pagination={{
            clickable: true,
          }}
          className="mySwiper mt-10 w-[min(90%,1280px)]"
        >
          <SwiperSlide>
            <figure className="shape-boxp shape-boxp_half">
              <Image src={imageProduct1} alt="" />
              <div className="brk-abs-overlay z-index-0 bg-black opacity-60"></div>
              <figcaption>
                <div className="show-cont">
                  <h3 className="card-no">01</h3>
                  <h4 className="card-main-title">System management</h4>
                </div>
                <p className="card-content-p">
                  System management is the administration of information
                  technology (IT) systems in corporate networks or data centers.
                  An effective systems management plan facilitates the delivery
                  of IT as a service and enables employees of the organization
                  to respond quickly to changing business needs and system
                  activities.
                </p>
                <a href="#" className="read-more-btn">
                  Read More
                </a>
              </figcaption>
              <span className="after"></span>
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure className="shape-boxp shape-boxp_half">
              <Image src={imageProduct2} alt="" />
              <div className="brk-abs-overlay z-index-0 bg-black opacity-60"></div>
              <figcaption>
                <div className="show-cont">
                  <h3 className="card-no">02</h3>
                  <h4 className="card-main-title">Social Media Management</h4>
                </div>
                <p className="card-content-p">
                  A corporate social media management service that includes
                  planning, creating, and publishing content on all types of
                  platforms such as Instagram, Facebook, Tiktok, Youtube,
                  Linkedin, Twitter, etc.
                </p>
                <a href="#" className="read-more-btn">
                  Read More
                </a>
              </figcaption>
              <span className="after"></span>
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure className="shape-boxp shape-boxp_half">
              <Image src={imageProduct3} alt="" />
              <div className="brk-abs-overlay z-index-0 bg-black opacity-60"></div>
              <figcaption>
                <div className="show-cont">
                  <h3 className="card-no">03</h3>
                  <h4 className="card-main-title">Design Management</h4>
                </div>
                <p className="card-content-p">
                  Is a graphic design and video editing service according to
                  customer needs. We provide brochure/flyer, company profile,
                  cartoon, idcard, sticker, banner, neonbox, merchandise,
                  billboard, and so on.
                </p>
                <a href="#" className="read-more-btn">
                  Read More
                </a>
              </figcaption>
              <span className="after"></span>
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure className="shape-boxp shape-boxp_half">
              <Image src={imageProduct4} alt="" />
              <div className="brk-abs-overlay z-index-0 bg-black opacity-60"></div>
              <figcaption>
                <div className="show-cont">
                  <h3 className="card-no">04</h3>
                  <h4 className="card-main-title">Printing Management</h4>
                </div>
                <p className="card-content-p">
                  Is an offset printing and digital printing service. Products
                  that we can print both offset and digital printing are:
                  brochure/flyer printing, company profile, cartoonama, idcard,
                  sticker, banner, neonbox, merchandise, billboard, packaging,
                  and so on.
                </p>
                <a href="#" className="read-more-btn">
                  Read More
                </a>
              </figcaption>
              <span className="after"></span>
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure className="shape-boxp shape-boxp_half">
              <Image src={imageProduct5} alt="" />
              <div className="brk-abs-overlay z-index-0 bg-black opacity-60"></div>
              <figcaption>
                <div className="show-cont">
                  <h3 className="card-no">05</h3>
                  <h4 className="card-main-title">Event management</h4>
                </div>
                <p className="card-content-p">
                  An event management service for exhibitions, training, work
                  meetings, gatherings, and so on. Exhibition → provides
                  exhibition management services both at home and abroad
                  (Exhibition Organizer).
                </p>
                <a href="#" className="read-more-btn">
                  Read More
                </a>
              </figcaption>
              <span className="after"></span>
            </figure>
          </SwiperSlide>
        </Swiper>

        <Image
          src={ArrowImage}
          alt=""
          className="w-32 absolute top-0 right-0 brightness-0 invert-[1] z-[10]"
        />
      </div>
    </div>
  );
}
