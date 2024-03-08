import React from 'react';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import productImage from '/public/img/headerprofile.png';
import ServiceImageDetail from '/public/img/productservice.jpg';
import { Button } from '@/components/ui/button';
import { Lightbulb, Webhook } from 'lucide-react';
import ImageCommunication from '/public/img/communication.jpg';

export default function Index() {
  return (
    <div>
      <div className="relative">
        <Image
          src={productImage}
          alt=""
          className="z-0 w-full h-[min(100vh,25.5rem)] bg-cover object-cover bg-fixed bg-no-repeat"
        />
        <div className="bg-black/60 w-full h-[min(100vh,25.5rem)] z-10 absolute top-0">
          <h1 className="text-white text-6xl font-bold tracking-wider text-center my-36 justify-center items-center">
            Product Sosial Media Management
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

      <div className="flex flex-1 w-[min(90%,1280px)] mx-auto items-start gap-10 justify-between">
        <Image src={ServiceImageDetail} alt="" className="rounded-[20px]" />

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

      <div className="grid grid-cols-[1.3fr_.7fr] w-[min(90%,1280px)] mx-auto items-start gap-10 justify-between mt-10">
        <div className="text-justify">
          <h1 className="font-bold text-3xl">Web Development</h1>
          <h3>
            Globally optimize highly efficient solution whereas open-source
            application. Completely strategize quality internal or organic
            sources for virtual e-business. Phosfluorescently re-engineer
            enterprise markets via value-added networks. Seamlessly restore
            inexpensive e-markets vis-a-vis corporate intellectual capital.
            Holisticly reinvent compelling niche markets via scalable strategic.
            Authoritatively scale business meta-services before client-based
            technologies. Collaboratively strategize synergistic scenarios
            rather than flexible action items. Continually deliver market
            positioning convergence and mission-critical infrastructures.
          </h3>
        </div>
        <div className="">
          <h1>Download Brochure</h1>
          <div className="flex gap-2">
            <Button className="bg-blueseaprimary">Download PDF</Button>
            <Button className="bg-blueseaprimary">Download DOCS</Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-[1.3fr_.7fr] w-[min(90%,1280px)] mx-auto items-start gap-10 justify-between my-20">
        <div className="">
          <h1 className="font-bold text-3xl mb-5">Benefits With Our Service</h1>
          <div className="flex gap-2 mt-5">
            <div className="flex gap-3">
              <div className="bg-blueseascondary text-white p-7 rounded-xl">
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
              <div className="bg-blueseascondary text-white p-7 rounded-xl">
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
            className="w-8/12 h-[25rem] object-cover"
          />
          <div className="bg-black/50 w-8/12 h-[25rem] absolute top-0"></div>
        </div>
      </div>
    </div>
  );
}
