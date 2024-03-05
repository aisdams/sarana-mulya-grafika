import React, { useState } from 'react';
import Image from 'next/image';
import NavbarData from '../data/navbarData';
import ImageLogo from '/public/img/smglogo.png';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  return (
    <div
      className={`${
        scrolled ? 'top-0' : ''
      } w-full bg-black/10 backdrop-blur-lg text-white  !z-20 fixed`}
    >
      <div className="flex justify-between items-center mx-auto w-[min(90%,1280px)]">
        <div className="">
          <Image src={ImageLogo} alt="" className="w-14 h-14" />
        </div>
        <div className="flex gap-5">
          {NavbarData.map((navbar, idx) => (
            <ul key={idx}>
              <Link href={navbar.link}>
                <li className="flex text-md font-semibold">{navbar.title}</li>
              </Link>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}
