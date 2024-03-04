import React from 'react';
import Image from 'next/image';
import { FaPlay } from 'react-icons/fa';
import ImgValue from '../../../public/img/imgvalue.jpg';
import ImgValue2 from '../../../public/img/imgvalue2.jpg';

export default function VisionMision() {
  return (
    <div className="w-[min(90%,1280px)] mx-20">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div className="ml-5">
          <h1 className="font-bold text-3xl uppercase mb-5 w-max">
            Vision & Mission
          </h1>
          <p>
            To be a creative industry company in Indonesia that provides
            efficient and high-quality services to support your business
            development.
          </p>
          <div className=" grid items-start gap-5 mt-5">
            <h1 className="font-bold mt-3">Misi</h1>
            <ul className="list-[circle] pl-5 w-3/4">
              <li>Providing excellent and creative design services</li>
              <li>
                Become a pioneer in application development with the latest
                technology.
              </li>
              <li>
                Build mutually beneficial strategic partnerships with other
                companies.
              </li>
              <li>Improve the skills and knowledge of each team member.</li>
            </ul>
          </div>
        </div>
        <div className="relative w-full">
          <Image src={ImgValue} alt="" className="h-[30rem] rounded-xl" />
          <Image
            src={ImgValue2}
            alt=""
            className="absolute -bottom-10 w-auto h-72 object-contain border-[8px] border-white rounded-md lg:-left-32 -right-7"
          />
          <div className="bg-gray-300 rounded-full border-[8px] lg:-left-10 right-0 border-white p-5 absolute top-[40%] mx-auto justify-center text-center">
            <FaPlay className="text-blueseaprimary text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
