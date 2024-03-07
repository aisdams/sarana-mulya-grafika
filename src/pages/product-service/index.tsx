import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/layouts/navbar';
import ProfileImage from '/public/img/headerprofile.png';
import imageProduct1 from '/public/img/System-Management-.jpg';
import imageProduct2 from '/public/img/social-media-mangement.jpg';
import imageProduct3 from '/public/img/design-management.jpg';
import imageProduct4 from '/public/img/Printing-management.jpg';
import imageProduct5 from '/public/img/event-management.png';
import Footer from '@/components/layouts/footer';

export default function ProductAndService() {
  return (
    <>
      <Navbar />
      <div className="relative">
        <Image
          src={ProfileImage}
          alt=""
          className="z-0 w-full h-[min(100vh,25.5rem)] bg-cover object-cover bg-fixed bg-no-repeat"
        />
        <div className="bg-black/60 w-full h-[min(100vh,25.5rem)] z-10 absolute top-0">
          <h1 className="text-white text-6xl font-bold tracking-wider text-center my-36 justify-center items-center">
            Product Service
          </h1>
        </div>
      </div>

      <div className="absolute bottom-[30%] mx-auto w-full z-40">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 240">
          <path
            fill="#0f1a24"
            fill-opacity="1"
            d="M0,64L48,64C96,64,192,64,288,69.3C384,75,480,85,576,96C672,107,768,117,864,133.3C960,149,1056,171,1152,176C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      <h1 className="my-20 text-center text-3xl font-bold">Product Service</h1>
      <div className="grid grid-cols-3 mx-auto justify-center items-center w-[min(80%,1280px)] gap-5">
        <div className="">
          <Image
            src={imageProduct1}
            alt=""
            className="w-full h-72 object-cover"
          />
          <h1 className="text-2xl font-bold">System management </h1>
          <article className="prose prose-slate">
            <p>
              Warehouse Management System (WMS) Is an operational system that
              focuses on the company{`'`}s warehouse activities. operational
              system that focuses on the company{`'`}s warehouse activities that
              are integrated and digitized with a (web-based) system.
            </p>
          </article>
        </div>
        <div className="">
          <Image
            src={imageProduct2}
            alt=""
            className="w-full h-72 object-cover"
          />

          <h1 className="text-2xl font-bold">Social Media Management </h1>
          <article className="prose prose-slate"></article>
          <p>
            It is a corporate social media management service that includes
            planning, creating, and publishing content on all types of platforms
            such as Instagram, Facebook, Tiktok, Youtube, Linkedin, Twitter, and
            so on.
          </p>
        </div>
        <div className="">
          <Image
            src={imageProduct3}
            alt=""
            className="w-full h-72 object-cover"
          />
          <h1 className="text-2xl font-bold">Design Managemen</h1>
          <article>
            <p>
              Is a graphic design and video editing service according to
              customer needs. We provide brochure/flyer, company profile,
              cartoon, idcard, sticker, banner, neonbox, merchandise, billboard,
              and so on.
            </p>
          </article>
        </div>
      </div>

      <div className="flex mx-auto justify-center items-start w-[min(90%,1280px)] gap-5 mt-20 mb-20">
        <div className="w-[25rem]">
          <Image
            src={imageProduct4}
            alt=""
            className="w-max h-72 object-cover"
          />
          <h1 className="text-2xl font-bold">Printing Management</h1>
          <article>
            <p>
              Is an offset printing and digital printing service. Products that
              we can print both offset and digital printing are: brochure/flyer
              printing, company profile, cartoonama, idcard, sticker, banner,
              neonbox, merchandise, billboard, packaging, and so on.
            </p>
          </article>
        </div>
        <div className="w-[25rem]">
          <Image
            src={imageProduct5}
            alt=""
            className="w-max h-72 object-cover"
          />
          <h1 className="text-2xl font-bold">Event management </h1>
          <article>
            Merupakan jasa pengurusan acara baik pameran, training, rapat kerja,
            gathering, dan sebagainya. Pameran → memberikan layanan pengurusan
            pameran baik dalam maupun luar negeri (Exhibition Organizer).
          </article>
        </div>
      </div>

      <Footer />
    </>
  );
}
