import React from 'react';
import Image from 'next/image';
import { FaPlay } from 'react-icons/fa';
import ImgValue from '../../../public/img/imgvalue.jpg';
import NiceImage from '/public/img/nice.png';
import ImgValue2 from '../../../public/img/imgvalue2.jpg';

export default function OurValue() {
  return (
    <div className="mt-16 relative">
      {/* <h1 className="font-bold text-3xl mb-5 uppercase text-left tracking-widest w-[min(80%,1280px)] mx-auto">
        NICE
      </h1> */}
      <Image src={NiceImage} alt="" className="mx-auto" />
    </div>
  );
}
