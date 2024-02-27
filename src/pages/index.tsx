import Image from "next/image";
import { Lightbulb } from 'lucide-react';
import { Inter } from "next/font/google";
import { FaWallet } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa6";
import Header from "@/components/home/header";
import Navbar from "@/components/layouts/navbar";
import About from "@/components/home/about";
import VisionMision from "@/components/home/visionMision";
import Blog from "@/components/blog";
import Footer from "@/components/layouts/footer";
import ProductService from "@/components/home/productService";
import OurValue from "@/components/home/ourValue";
import Client from "@/components/client";

export default function Home() {
  return (
    <main className="relative">
      <Navbar/>
      <Header />
      <div className="mx-auto w-[min(90%,1280px)] mb-20">
        <h1 className="text-3xl font-bold text-center uppercase">Excellence</h1>
        <div className="grid grid-cols-3 items-start gap-5 mt-16">
          <div className="flex items-center gap-3">
            <div className="bg-blueseaprimary/50 text-blueseascondary px-3 mx-auto rounded-full w-[50px] h-12">
              <Lightbulb className="text-2xl my-3 mx-auto" />
            </div>
           <div className="grid">
            <h3 className="text-xl font-bold">One stop solution</h3>
              <p className="text-justify">We can supply all your needs from every category in small or large quantities. No more hassle of ordering from multiple vendors.</p>
           </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-blueseaprimary/50 text-blueseascondary px-3 mx-auto rounded-full w-[50px] h-12">
              <FaDollarSign className="text-2xl my-3 mx-auto" />
            </div>
           <div className="grid">
            <h3 className="text-xl font-bold">Competitive price</h3>
              <p>We ensure that our prices are competitive with similar companies.</p>
           </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-blueseaprimary/50 text-blueseascondary px-3 mx-auto rounded-full w-[50px] h-12">
              <FaWallet className="text-2xl my-3 mx-auto" />
            </div>
           <div className="grid">
            <h3 className="text-xl font-bold">Payment term</h3>
              <p>We provide payment terms from 14 days</p>
           </div>
          </div>
        </div>
      </div>

      <About />
      <VisionMision/>
      <OurValue/>
      {/* <Blog /> */}
      <ProductService/>
      <Client/>
      <div className="bg-[url('https://glints.com/id/lowongan/wp-content/uploads/2020/06/rsz_20474.jpg')] w-full bg-fixed h-96 bg-center bg-cover text-center relative mt-10">
      <div className="absolute bg-black/80 w-full h-96 top-0"></div>
      <div className="absolute text-white w-full h-96 top-0">
        <h1 className="text-blue-600 text-4xl font-semibold mt-32 mb-1">You think we work for you.</h1>
        <h3 className="text-white text-lg">Actually we are playing, and somehow it helps you Grow your business.</h3>
      </div>
    </div>
    <Footer/>
    </main>
  );
}
