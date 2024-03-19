import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/layouts/navbar';
import Footer from '@/components/layouts/footer';
import productImage from '/public/img/productservice.jpg';
import imageProduct5 from '/public/img/event-management.png';
import imageProduct3 from '/public/img/design-management.jpg';
import imageProduct1 from '/public/img/System-Management-.jpg';
import imageProduct4 from '/public/img/Printing-management.jpg';
import imageProduct2 from '/public/img/social-media-mangement.jpg';

export default function ProductAndService() {
  return (
    <>
      <div className="relative">
        <Image
          src={productImage}
          alt=""
          className="z-0 w-full h-[min(100vh,25.5rem)] bg-cover object-cover bg-fixed bg-no-repeat"
        />
        <div className="bg-black/60 w-full h-[min(100vh,25.5rem)] z-10 absolute top-0">
          <h1 className="text-white text-6xl font-bold tracking-wider text-center my-36 justify-center items-center">
            Product Service
          </h1>
        </div>
      </div>

      <h1 className="my-20 text-center text-3xl font-bold">Product Service</h1>
      <div className="grid lg:grid-cols-3 mx-auto justify-center items-start w-[min(80%,1280px)] gap-5">
        <div className="">
          <Link href="/product-service/detail/system-management">
            <Image
              src={imageProduct1}
              alt=""
              className="w-full h-72 object-cover"
            />
            <h1 className="text-2xl font-bold">System management </h1>
            <article className="prose prose-slate">
              <p>
                Warehouse Management System (WMS) Is an operational system that
                focuses on the company{`'`}s warehouse activities. operational
                system that focuses on the company{`'`}s warehouse activities
                that are integrated and digitized with a (web-based) system.
              </p>
            </article>
          </Link>
        </div>
        <div className="">
          <Link href="/product-service/detail/social-media-management">
            <Image
              src={imageProduct2}
              alt=""
              className="w-full h-72 object-cover"
            />

            <h1 className="text-2xl font-bold">Social Media Management </h1>
            <article className="prose prose-slate"></article>
            <p>
              It is a corporate social media management service that includes
              planning, creating, and publishing content on all types of
              platforms such as Instagram, Facebook, Tiktok, Youtube, Linkedin,
              Twitter, and so on.
            </p>
          </Link>
        </div>
        <div className="">
          <Link href="/product-service/detail/design-management">
            <Image
              src={imageProduct3}
              alt=""
              className="w-full h-72 object-cover"
            />
            <h1 className="text-2xl font-bold">Design Managemen</h1>
            <article>
              <p>
                Is a graphic design and video editing service according to
                customer needs. We provide brochure/flyer, company profile,
                cartoon, idcard, sticker, banner, neonbox, merchandise,
                billboard, and so on.
              </p>
            </article>
          </Link>
        </div>
      </div>

      <div className="lg:flex grid mx-auto justify-center items-start w-[min(90%,1280px)] gap-5 mt-20 mb-20">
        <div className="w-[25rem]">
          <Link href="/product-service/detail/printing-management">
            <Image
              src={imageProduct4}
              alt=""
              className="w-max h-72 object-cover"
            />
            <h1 className="text-2xl font-bold">Printing Management</h1>
            <article>
              <p>
                Is an offset printing and digital printing service. Products
                that we can print both offset and digital printing are:
                brochure/flyer printing, company profile, cartoonama, idcard,
                sticker, banner, neonbox, merchandise, billboard, packaging, and
                so on.
              </p>
            </article>
          </Link>
        </div>
        <div className="w-[25rem]">
          <Link href="/product-service/detail/event-management">
            <Image
              src={imageProduct5}
              alt=""
              className="w-max h-72 object-cover"
            />
            <h1 className="text-2xl font-bold">Event management </h1>
            <article>
              Merupakan jasa pengurusan acara baik pameran, training, rapat
              kerja, gathering, dan sebagainya. Pameran → memberikan layanan
              pengurusan pameran baik dalam maupun luar negeri (Exhibition
              Organizer).
            </article>
          </Link>
        </div>
      </div>
    </>
  );
}
