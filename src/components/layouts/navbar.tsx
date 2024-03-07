import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import NavbarData from '../data/navbarData';
import ImageLogo from '/public/img/smglogo.png';
import { IoIosArrowDown, IoIosArrowUp, IoIosMenu } from 'react-icons/io';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import Link from 'next/link';
import enableSmoothScroll from '../enableSmoothScroll';

interface NavbarItem {
  title: string;
  link: string;
  scrollId?: string;
  // children?: NavbarItem[];
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    enableSmoothScroll();

    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToElement = (elementId: string) => {
    const element = document.getElementById(elementId);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [activeNavItem, setActiveNavItem] = useState<number | null>(null);
  return (
    <div className="">
      {isMobileView ? (
        <div className="flex items-center">
          <Sheet>
            <SheetTrigger>
              <IoIosMenu className="text-2xl text-white" />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetDescription className="grid my-20 text-left gap-7">
                  {NavbarData.map((navbar: NavbarItem, idx: number) => (
                    <ul key={idx}>
                      <li>
                        <Link
                          href={navbar.link}
                          scroll={false}
                          onClick={(e) => {
                            e.preventDefault();
                            setActiveNavItem(
                              activeNavItem === idx ? null : idx
                            );
                            scrollToElement(navbar.scrollId || '');
                          }}
                          className="uppercase font-medium text-sm text-[#b7e6bd] tracking-widest flex items-center gap-3"
                        >
                          {navbar.title &&
                            (activeNavItem === idx ? (
                              <IoIosArrowUp className="arrow" />
                            ) : (
                              <IoIosArrowDown className="arrow" />
                            ))}
                        </Link>
                      </li>
                    </ul>
                  ))}
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      ) : (
        <div
          className={`${
            scrolled ? 'top-0' : ''
          } w-full bg-black/10 backdrop-blur-lg text-white w-full !z-20 fixed`}
        >
          <div className="lg:flex grid justify-between items-center mx-auto lg:w-[min(90%,1280px)]">
            <div className="">
              <Image src={ImageLogo} alt="" className="w-14 h-14" />
            </div>
            <div className="lg:flex gap-5 hidden">
              {NavbarData.map((navbar: NavbarItem, idx: number) => (
                <ul key={idx}>
                  <Link
                    href={navbar.link}
                    scroll={false}
                    onClick={() => scrollToElement(navbar.scrollId || '')}
                  >
                    <li className="flex text-md font-semibold">
                      {navbar.title}
                    </li>
                  </Link>
                </ul>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
