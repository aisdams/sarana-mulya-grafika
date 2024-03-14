import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../ui/button';
import RobotGif from '/public/img/robot.gif';
import BtnPlay from '/public/img/btnplayhead.png';
import React, { useEffect, useState } from 'react';
import ImageScrol from '/public/img/buttonscroll.svg';
import ImageHeader from '/public/img/company-header.png';
import stylesHeader from '../../styles/header.module.css';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const videoUrl = 'https://www.youtube.com/embed/0wybm4HFvd4';
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="grid lg:grid-cols-2 items-center justify-between gap-5 pt-5 lg:mx-auto lg:w-[min(90%,1280px)] w-full lg:!h-screen h-[90vh] mb-10">
      <div className="relative text-center mx-auto justify-start !items-center px-5">
        <div className="sm:text-5xl text-4xl font-bold mb-8 lg:flex grid gap-3 lg:text-left sm:text-center text-center lg:items-left lg:justify-start items-center sm:justify-center">
          Sarana Mulya{' '}
          <h3
            className={['text-blueseaprimary', stylesHeader.textheader].join(
              ' '
            )}
          >
            Grafika
          </h3>
        </div>
        <h3 className="text-base font-light mb-8 lg:text-left text-center">
          SMG is a company engaged in the creative industry, supporting business
          people in Indonesia to improve the quality level of your business. We
          offer a wide selection of products and services.
        </h3>
        <div className="sm:flex md:flex grid gap-5 lg:items-start  items-center mx-0 lg:mx-0 w-full lg:justify-start justify-center lg:items-center">
          <a
            href="#_"
            className="relative inline-flex items-center justify-start text-white px-6 py-1 overflow-hidden font-medium transition-all bg-blueseaprimary rounded hover:bg-white group"
          >
            <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#01324d] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
            <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-white">
              Get More
            </span>
          </a>
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={togglePopup}
          >
            <Image src={BtnPlay} alt="" className="w-8 h-8" />
            <h1>See How We Work</h1>
          </div>
        </div>
        <div className="absolute lg:right-0 left-[45%] -bottom-24 mx-auto justify-center text-center grid cursor-pointer">
          <Link href="#aboutus">
            <Image
              src={ImageScrol}
              alt=""
              className="w-10 h-10 grid mx-auto animate-bounce"
            />
            <h1 className="mt-2 font-extralight text-graysmg text-sm tracking-widest">
              Scroll Down
            </h1>
          </Link>
        </div>
      </div>
      <div className="absolute -top-8 right-0 z-[-5] lg:grid hidden">
        <Image src={ImageHeader} alt="" className="h-[36rem] w-[50rem]" />
      </div>

      <div className="absolute sm:left-0 left-[42%] md:right-0 justify-center content-center place-content-center lg:top-32 top-14 lg:hidden grid">
        <Image
          src={RobotGif}
          alt=""
          className="w-32 grayscale transition-all duration-500"
        />
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50"
          style={{ overflow: 'hidden' }}
        >
          <div
            className="absolute inset-0 bg-black opacity-75"
            onClick={togglePopup}
          ></div>
          <div className="z-10 bg-white p-4 rounded-lg shadow-lg w-2/3 relative">
            <button
              onClick={togglePopup}
              className="absolute -top-9 right-0 text-white"
            >
              <h1 className="text-xl">X</h1>
            </button>
            <iframe
              src={videoUrl}
              style={{ width: '100%' }}
              height="500"
              frameBorder="0"
              allowFullScreen
              title="YouTube Video"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
