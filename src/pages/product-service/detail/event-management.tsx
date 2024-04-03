import Image from 'next/image';
import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { Lightbulb, Webhook } from 'lucide-react';
import { FreeMode, Thumbs } from 'swiper/modules';
import productImage from '/public/img/event-management.png';
import ServiceImageDetail from '/public/img/servicedetail.jpg';
import ImageCommunication from '/public/img/communication.jpg';

export default function Index() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div>
      <div className="relative">
        <Image
          src={productImage}
          alt=""
          className="z-0 w-full h-[min(100vh,25.5rem)] bg-cover object-cover !bg-left-top bg-fixed bg-no-repeat"
        />
        <div className="bg-black/60 w-full h-[min(100vh,25.5rem)] z-10 absolute top-0">
          <h1 className="text-white text-6xl font-bold tracking-wider text-center my-36 justify-center items-center">
            Product Event Management
          </h1>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="absolute bottom-[12rem] z-50"
      >
        <path
          fill="#011636"
          fill-opacity="1"
          d="M0,224L34.3,208C68.6,192,137,160,206,170.7C274.3,181,343,235,411,245.3C480,256,549,224,617,218.7C685.7,213,754,235,823,224C891.4,213,960,171,1029,138.7C1097.1,107,1166,85,1234,117.3C1302.9,149,1371,235,1406,277.3L1440,320L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        ></path>
      </svg>
      <div className="lg:flex flex-1 w-[min(90%,1280px)] mx-auto items-start gap-10 justify-between mt-20">
        <Image
          src={ServiceImageDetail}
          alt=""
          className="rounded-[20px] opacity-50"
        />

        <div className="text-white mt-16 w-full grid">
          <h1 className="mb-3 font-bold">All Services</h1>
          <ul className="grid gap-5 mt-5">
            <li className="flex justify-between items-center gap-14">
              <h3 className="font-extralight">Web Development</h3>
              <FaArrowRight />
            </li>
            <li className="flex justify-between items-center gap-14">
              <h3 className="font-extralight">UI/UX Design</h3>
              <FaArrowRight />
            </li>
            <li className="flex justify-between items-center gap-14">
              <h3 className="font-extralight">Digital Marketing</h3>
              <FaArrowRight />
            </li>
            <li className="flex justify-between items-center gap-14">
              <h3 className="font-extralight">Business Analysis</h3>
              <FaArrowRight />
            </li>
            <li className="flex justify-between items-center gap-14">
              <h3 className="font-extralight">Softwer Services</h3>
              <FaArrowRight />
            </li>
            <li className="flex justify-between items-center gap-14">
              <h3 className="font-extralight">Mechine Learning</h3>
              <FaArrowRight />
            </li>
          </ul>
        </div>
      </div>

      <div className="grid lg:grid-cols-[1.3fr_.7fr] w-[min(90%,1280px)] mx-auto items-start gap-10 justify-between mt-10">
        <div className="text-justify">
          <h1 className="font-bold text-3xl">Event management</h1>
          <h3 className="font-light text-sm">
            An event management service for exhibitions, training, work
            meetings, gatherings, and so on.
          </h3>
          <div>
            <h1 className="font-bold my-3">
              Exhibition → provides exhibition management services both at home
              and abroad (Exhibition Organizer).
            </h1>
            <div className="flex gap-8 items-start">
              <div className="ml-5">
                <h1>Domestic exhibition</h1>
                <ul className="list-[circle]">
                  <li>Space booth (9sqm - 18sqm)</li>
                  <li>Special design/standard booth</li>
                </ul>
              </div>
              <div className=" ml-5">
                <h1>Overseas exhibition (Adjustable by request) </h1>
                <ul className="list-[circle]">
                  <li>Space booth</li>
                  <li>Special design/standard booth</li>
                  <li>Ticket</li>
                  <li>Hotel</li>
                  <li>City Tour</li>
                  <li>Transportation</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h1 className="font-bold my-3">
              Meeting Organizer → Company meeting management service (Meeting
              Organizer). Include :
            </h1>
            <div className="ml-5">
              <ul className="list-[circle]">
                <li>Hotel</li>
                <li>Backdrop</li>
                <li>MC</li>
                <li>Photographer & Videographer</li>
              </ul>
            </div>
          </div>

          <div>
            <h1 className="font-bold my-3">
              Training → corporate training management services (Training
              Organizer). Include:
            </h1>
            <div className="ml-5">
              <ul className="list-[circle]">
                <li>Hotel</li>
                <li>Backdrop</li>
                <li>MC</li>
                <li>Photographer & Videographer</li>
                <li>Ice Breaking</li>
                <li>Training (collab by Inspiry)</li>
                <li>Entertainment → Gala dinner, pentas, dan lainnya</li>
              </ul>
            </div>
          </div>

          <div>
            <h1 className="font-bold my-3">
              Gathering → services for managing company gatherings such as
              family gatherings, employee gatherings, customer gatherings, and
              so on (Gathering Organizer). Include:
            </h1>
            <div className="ml-5">
              <ul className="list-[circle]">
                <li>Transport</li>
                <li>Eat</li>
                <li>Place</li>
                <li>Rundown acara</li>
                <li>Backdrop</li>
                <li>MC</li>
                <li>Photographer & Videographer</li>
                <li>Fun game</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="">
          <h1>Download Brochure</h1>
          <div className="flex gap-2">
            <Button className="bg-blueseaprimary">Download PDF</Button>
            <Button className="bg-blueseaprimary">Download DOCS</Button>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-[1.3fr_.7fr] w-[min(90%,1280px)] mx-auto items-start gap-10 justify-between my-20">
        <div className="">
          <h1 className="font-bold text-3xl mb-5">Benefits With Our Service</h1>
          <div className="sm:flex grid gap-2 mt-5">
            <div className="flex gap-3">
              <div className="bg-blueseascondary text-white p-7 rounded-xl lg:h-auto h-max">
                <Lightbulb className="text-3xl" />
              </div>
              <div className="block">
                <h1 className="text-xl font-bold">Flexible Solutions</h1>
                <p className="font-light">
                  Completely grow multimedia based content before global
                  scenarios.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="bg-blueseascondary text-white p-7 rounded-xl lg:h-auto h-max">
                <Webhook className="text-3xl" />
              </div>
              <div className="block">
                <h1 className="text-xl font-bold">24/7 Unlimited Support</h1>
                <p className="font-light">
                  Completely grow multimedia based content before global
                  scenarios.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <Image
            src={ImageCommunication}
            alt=""
            className="w-full h-[25rem] object-cover"
          />
          <div className="bg-black/50  w-full h-[25rem] absolute top-0"></div>
          <div className="absolute top-[40%] left-0 right-0 grid justify-center items-center content-center">
            <h1 className="font-bold text-3xl mb-5">Get Offers To 49%</h1>
            <a
              href="#_"
              className="relative inline-flex items-center justify-start text-white px-6 py-1 overflow-hidden font-medium transition-all bg-blueseaprimary rounded hover:bg-white group w-max mx-auto"
            >
              <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#01324d] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-white">
                Get Now
              </span>
            </a>
          </div>
        </div>

        <div className="">
          <h1>Gallery</h1>
        </div>
      </div>
    </div>
  );
}
