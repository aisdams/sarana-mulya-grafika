import React from 'react';
import Image from 'next/image';
import ProfileImage from '/public/img/headerprofile.png';
import Navbar from '@/components/layouts/navbar';
import Footer from '@/components/layouts/footer';

export default function Profile() {
  return (
    <div className="">
      <Navbar />
      <div className="relative">
        <Image
          src={ProfileImage}
          alt=""
          className="z-0 w-full h-[min(100vh,25.5rem)] bg-cover object-cover bg-fixed bg-no-repeat"
        />
        <div className="bg-black/60 w-full h-[min(100vh,25.5rem)] z-10 absolute top-0">
          <h1 className="text-white text-6xl font-bold tracking-wider text-center my-36 justify-center items-center">
            Our Profile
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
      <h1 className="font-bold text-3xl !z-40 my-20 text-center tracking-widest">
        Profile Company
      </h1>
      <Footer />
    </div>
  );
}
