import React from 'react';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import productImage from '/public/img/graphic-designer.png';
import ServiceImageDetail from '/public/img/servicedetail.jpg';
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
            Product Design Management
          </h1>
        </div>
      </div>
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
          <h1 className="font-bold text-3xl">System Management</h1>
          <h3 className="font-light text-sm">
            Management systems describe the way companies organize themselves in
            their structures and processes to act systematically, ensure smooth
            processes, and achieve planned results. Modern management systems
            usually follow the PDCA (Plan-Do-Check-Act) cycle of planning,
            implementing, reviewing, and improving.
          </h3>
          <div className="mt-5">
            <h1 className="font-bold">Warehouse Management System (WMS)</h1>
            <p className="font-light text-sm">
              Merupakan sistem operasional yang berfokus pada aktivitas gudang
              perusahaan yang terintegrasi dan terdigitalisasi dengan sistem
              (web-based).
            </p>
            <div className="grid grid-cols-2">
              <div className="">
                <h1 className="text-xl font-bold mt-3">Fitur :</h1>
                <ul className="list-[circle] ml-5 font-light text-sm">
                  <li>Audit trail</li>
                  <li>Elastic search</li>
                  <li>Password hashing</li>
                  <li>Scan and barcode</li>
                  <li>Dashboard analytics</li>
                </ul>
              </div>
              <div className="">
                <h1 className="text-xl font-bold mt-3">Excellence :</h1>
                <ul className="list-[circle] ml-5 font-light text-sm">
                  <li>Dashboard </li>
                  <li>Customizable </li>
                  <li>Userfriendly</li>
                  <li>Compatible to any device</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="">
            <h1 className="mt-5 font-bold">Logistic Management System (LMS)</h1>
            <p>
              Merupakan sistem operasional yang berfokus pada aktivitas gudang
              perusahaan yang terintegrasi dan terdigitalisasi dengan sistem
              (web-based).
            </p>
            <div className="grid grid-cols-2">
              <div className="">
                <h1 className="text-xl font-bold mt-3">Fitur :</h1>
                <ul className="list-[circle] ml-5 font-light text-sm">
                  <li>Audit trail</li>
                  <li>Elastic search</li>
                  <li>Password hashing</li>
                  <li>Scan and barcode</li>
                  <li>Dashboard analytics</li>
                </ul>
              </div>
              <div className="">
                <h1 className="text-xl font-bold mt-3">Excellence :</h1>
                <ul className="list-[circle] ml-5 font-light text-sm">
                  <li>Dashboard </li>
                  <li>Customizable </li>
                  <li>Userfriendly</li>
                  <li>Compatible to any device</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-5">
            <h1 className="font-bold">Sales Management System (SMS)</h1>
            <p className="font-light text-sm">
              Merupakan sistem operasional yang berfokus pada aktivitas gudang
              perusahaan yang terintegrasi dan terdigitalisasi dengan sistem
              (web-based).
            </p>
            <div className="grid grid-cols-2">
              <div className="">
                <h1 className="text-xl font-bold mt-3">Fitur :</h1>
                <ul className="list-[circle] ml-5 font-light text-sm">
                  <li>Audit trail</li>
                  <li>Elastic search</li>
                  <li>Password hashing</li>
                  <li>Scan and barcode</li>
                  <li>Dashboard analytics</li>
                </ul>
              </div>
              <div className="">
                <h1 className="text-xl font-bold mt-3">Excellence :</h1>
                <ul className="list-[circle] ml-5 font-light text-sm">
                  <li>Dashboard </li>
                  <li>Customizable </li>
                  <li>Userfriendly</li>
                  <li>Compatible to any device</li>
                </ul>
              </div>
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
      </div>
    </div>
  );
}
