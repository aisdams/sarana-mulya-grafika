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

import { Autoplay, Mousewheel, Keyboard, Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import Link from 'next/link';

export default function ProductService() {
  return (
    <div className="relative text-center my-32">
      <h1 className="font-bold lg:text-3xl text-2xl uppercase w-[min(90%,1280px)] mx-auto mb-3">
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
            290: {
              slidesPerView: 1,
              spaceBetween: 50,
            },
            320: {
              slidesPerView: 1,
              spaceBetween: 50,
            },
            680: {
              slidesPerView: 1,
              spaceBetween: 50,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          loop={true}
          keyboard={true}
          spaceBetween={10}
          navigation={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          grabCursor={true}
          modules={[Mousewheel, Keyboard, Autoplay, Navigation]}
          pagination={{
            clickable: true,
          }}
          className="mySwiper mt-10 w-[min(90%,1280px)]"
        >
          <SwiperSlide>
            <figure className="shape-boxp shape-boxp_half">
              <Link href="/product-service/detail/system-management">
                <Image src={imageProduct1} alt="" />
                <div className="brk-abs-overlay z-index-0 bg-black opacity-60"></div>
                <figcaption>
                  <div className="show-cont">
                    <h3 className="card-no">01</h3>
                    <h4 className="card-main-title">System management</h4>
                  </div>
                  <p className="card-content-p mb-3">
                    System management is the administration of information
                    technology (IT) systems in corporate networks or data
                    centers. An effective systems management plan facilitates
                    the delivery of IT as a service and enables employees of the
                    organization to respond quickly to changing business needs
                    and system activities.
                  </p>
                  <Link
                    href="#"
                    className="read-more-btn mt-4 hover:border-b-white hover:border-b-2 font-light transition-all duration-300 text-sm"
                  >
                    Read More
                  </Link>
                </figcaption>
                <span className="after"></span>
              </Link>
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure className="shape-boxp shape-boxp_half">
              <Link href="/product-service/detail/social-media-management">
                <Image src={imageProduct2} alt="" />
                <div className="brk-abs-overlay z-index-0 bg-black opacity-60"></div>
                <figcaption>
                  <div className="show-cont">
                    <h3 className="card-no">02</h3>
                    <h4 className="card-main-title">Social Media Management</h4>
                  </div>
                  <p className="card-content-p mb-3">
                    A corporate social media management service that includes
                    planning, creating, and publishing content on all types of
                    platforms such as Instagram, Facebook, Tiktok, Youtube,
                    Linkedin, Twitter, etc.
                  </p>
                  <Link
                    href="#"
                    className="read-more-btn mt-4 hover:border-b-white hover:border-b-2 font-light transition-all duration-300 text-sm"
                  >
                    Read More
                  </Link>
                </figcaption>
                <span className="after"></span>
              </Link>
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure className="shape-boxp shape-boxp_half">
              <Link href="/product-service/detail/design-management">
                <Image src={imageProduct3} alt="" />
                <div className="brk-abs-overlay z-index-0 bg-black opacity-60"></div>
                <figcaption>
                  <div className="show-cont">
                    <h3 className="card-no">03</h3>
                    <h4 className="card-main-title">Design Management</h4>
                  </div>
                  <p className="card-content-p mb-3">
                    Is a graphic design and video editing service according to
                    customer needs. We provide brochure/flyer, company profile,
                    cartoon, idcard, sticker, banner, neonbox, merchandise,
                    billboard, and so on.
                  </p>
                  <Link
                    href="#"
                    className="read-more-btn mt-4 hover:border-b-white hover:border-b-2 font-light transition-all duration-300 text-sm"
                  >
                    Read More
                  </Link>
                </figcaption>
                <span className="after"></span>
              </Link>
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure className="shape-boxp shape-boxp_half">
              <Link href="/product-service/detail/printing-management">
                <Image src={imageProduct4} alt="" />
                <div className="brk-abs-overlay z-index-0 bg-black opacity-60"></div>
                <figcaption>
                  <div className="show-cont">
                    <h3 className="card-no">04</h3>
                    <h4 className="card-main-title">Printing Management</h4>
                  </div>
                  <p className="card-content-p mb-3">
                    Is an offset printing and digital printing service. Products
                    that we can print both offset and digital printing are:
                    brochure/flyer printing, company profile, cartoonama,
                    idcard, sticker, banner, neonbox, merchandise, billboard,
                    packaging, and so on.
                  </p>
                  <Link
                    href="#"
                    className="read-more-btn mt-4 hover:border-b-white hover:border-b-2 font-light transition-all duration-300 text-sm"
                  >
                    Read More
                  </Link>
                </figcaption>
                <span className="after"></span>
              </Link>
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure className="shape-boxp shape-boxp_half">
              <Link href="/product-service/detail/event-management">
                <Image src={imageProduct5} alt="" />
                <div className="brk-abs-overlay z-index-0 bg-black opacity-60"></div>
                <figcaption>
                  <div className="show-cont">
                    <h3 className="card-no">05</h3>
                    <h4 className="card-main-title">Event management</h4>
                  </div>
                  <p className="card-content-p mb-3">
                    An event management service for exhibitions, training, work
                    meetings, gatherings, and so on. Exhibition → provides
                    exhibition management services both at home and abroad
                    (Exhibition Organizer).
                  </p>
                  <Link
                    href="#"
                    className="read-more-btn mt-4 hover:border-b-white hover:border-b-2 font-light transition-all duration-300 text-sm"
                  >
                    Read More
                  </Link>
                </figcaption>
                <span className="after"></span>
              </Link>
            </figure>
          </SwiperSlide>
        </Swiper>

        <Image
          src={ArrowImage}
          alt=""
          className="w-32 absolute top-0 right-0 brightness-0 invert-[1] z-[10] lg:grid hidden"
        />
      </div>
    </div>
  );
}
