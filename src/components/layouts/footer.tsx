import React from 'react';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import Link from 'next/link';
import ImageFooter from '/public/img/footerbg.jpg';
import Image from 'next/image';
import LogoImg from '/public/img/smglogo.png';
import ImageBlog1 from '/public/img/blogimg1.jpg';
import ImageBlog2 from '/public/img/event-management.png';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
} from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';

export default function Footer() {
  return (
    <>
      <div className="relative grid">
        <Image
          src={ImageFooter}
          alt=""
          className="w-full object-cover h-[25rem]"
        />
        <div className="bg-[#0f1a24]/55 w-full h-[25rem] absolute top-0">
          <div className="lg:flex grid w-[min(90%,1280px)] mx-auto justify-between px-20 items-center gap-10 pt-10">
            <div className="border-r-2 border-white/15 pr-44">
              <Image
                src={LogoImg}
                alt=""
                className="w-20 h-20 brightness-0 invert-[100]"
              />
            </div>
            <div className="grid lg:flex items-center gap-5">
              <div className="grid">
                <h1 className="font-bold text-3xl">News Subscription</h1>
                <p className="font-light text-sm">
                  Get Latest Deals from Waker’s Inbox & Subscribe Now
                </p>
              </div>
              <div className="flex gap-2">
                <Input
                  placeholder="Email Address"
                  type="email"
                  className="w-72"
                />
                <Button className="bg-blueseaprimary">Subscribe</Button>
              </div>
            </div>
          </div>
          <hr className="w-full h-1 border-white/15 mt-5" />
          <div className="grid lg:grid-cols-4 gap-5 w-[min(90%,1280px)] mx-auto px-20 mt-20">
            <div className="w-full">
              <h1 className="font-bold">ABOUT COMPANY</h1>
              <div className="flex items-center">
                <hr className="w-full" />
                <div className="rounded-full w-2 h-2 bg-white"></div>
              </div>
              <h3 className="mt-5 font-light text-sm">
                Professionally redefine transparent ROI through low-risk
                high-yield imperatives. Progressively create empowered. cost
                effective users via team driven.
              </h3>
              <div className="flex gap-3 mt-3">
                <div className="border border-white rounded-full p-2">
                  <FaFacebookF />
                </div>
                <div className="border border-white rounded-full p-2">
                  <FaInstagram />
                </div>
                <div className="border border-white rounded-full p-2">
                  <FaTwitter />
                </div>
                <div className="border border-white rounded-full p-2">
                  <FaLinkedinIn />
                </div>
                <div className="border border-white rounded-full p-2">
                  <FaWhatsapp />
                </div>
              </div>
            </div>
            <div className="w-full">
              <h1>QUICK LINKS</h1>
              <div className="flex items-center">
                <hr className="w-full" />
                <div className="rounded-full w-2 h-2 bg-white"></div>
              </div>
              <ul className="w-full mt-5 gap-2 grid">
                <li className="flex gap-2 items-center font-light text-sm">
                  <IoIosArrowForward />
                  About Us
                </li>
                <li className="flex gap-2 items-center font-light text-sm">
                  <IoIosArrowForward />
                  Meet Our Team
                </li>
                <li className="flex gap-2 items-center font-light text-sm">
                  <IoIosArrowForward />
                  Our Projects
                </li>
                <li className="flex gap-2 items-center font-light text-sm">
                  <IoIosArrowForward />
                  Help & FAQs
                </li>
                <li className="flex gap-2 items-center font-light text-sm">
                  <IoIosArrowForward />
                  Contact Us
                </li>
              </ul>
            </div>
            <div className="w-full">
              <h1>IT SERVICES</h1>
              <div className="flex items-center">
                <hr className="w-full" />
                <div className="rounded-full w-2 h-2 bg-white"></div>
              </div>
              <ul className="w-full mt-5 gap-2 grid">
                <li className="flex gap-2 items-center font-light text-sm">
                  <IoIosArrowForward />
                  System management
                </li>
                <li className="flex gap-2 items-center font-light text-sm">
                  <IoIosArrowForward />
                  Social Media Management
                </li>
                <li className="flex gap-2 items-center font-light text-sm">
                  <IoIosArrowForward />
                  Design Management
                </li>
                <li className="flex gap-2 items-center font-light text-sm">
                  <IoIosArrowForward />
                  Printing Management
                </li>
                <li className="flex gap-2 items-center font-light text-sm">
                  <IoIosArrowForward />
                  vent management
                </li>
              </ul>
            </div>
            <div className="w-full">
              <h1>RECENT POSTS</h1>
              <div className="flex items-center">
                <hr className="w-full" />
                <div className="rounded-full w-2 h-2 bg-white"></div>
              </div>
              <div className="grid mt-5">
                <div className="flex gap-3">
                  <Image
                    src={ImageBlog1}
                    alt=""
                    className="w-20 h-20 object-cover"
                  />
                  <div className="grid">
                    <h1>Unsatiable Entreaties May Collecting Power.</h1>
                    <h3 className="font-light text-sm">21 June, 2024</h3>
                  </div>
                </div>
                <div className="flex gap-3 mt-3">
                  <Image
                    src={ImageBlog2}
                    alt=""
                    className="w-20 h-20 object-cover"
                  />
                  <div className="grid">
                    <h1>Unsatiable Entreaties May Collecting Power.</h1>
                    <h3 className="font-light text-sm">21 June, 2024</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black/30 backdrop-blur-lg mt-20 p-3 text-sm lg:grid hidden">
        <div className="mx-auto w-[min(90%,1280px)] flex justify-between px-20">
          <h1>Copyright 2024 Sarana Mulya Grafika. All Rights Reserved.</h1>
          <div className="flex gap-3">
            <h1 className="border-r-2 border-r-white pr-3">
              Terms & Condition
            </h1>
            <h1 className="border-r-2 border-r-white pr-3">Careers</h1>
            <h1>Privacy Policy</h1>
          </div>
        </div>
      </div>
    </>
  );
}
