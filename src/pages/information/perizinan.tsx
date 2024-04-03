import React from 'react';
import Image from 'next/image';
import productImage from '/public/img/perizinan.jpg';

export default function index() {
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
            Licensing
          </h1>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="absolute lg:bottom-[12rem] lg:z-50 lg:grid hidden"
      >
        <path
          fill="#011636"
          fill-opacity="1"
          d="M0,224L34.3,208C68.6,192,137,160,206,170.7C274.3,181,343,235,411,245.3C480,256,549,224,617,218.7C685.7,213,754,235,823,224C891.4,213,960,171,1029,138.7C1097.1,107,1166,85,1234,117.3C1302.9,149,1371,235,1406,277.3L1440,320L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        ></path>
      </svg>
      <div className="mx-auto w-[min(90%,1280px)] mt-20">
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam culpa,
          numquam sunt facere esse aut labore quidem maiores eius autem
          obcaecati perspiciatis ea quisquam praesentium tempora cupiditate.
          Perspiciatis, dolorum praesentium!
        </h1>
        <div className="grid grid-cols-4 gap-5 mx-auto justify-center content-center mt-5 mb-8 items-center w-full">
          <div className="bg-black/10 p-5 border border-white/40 rounded-md h-[15rem] hover:bg-blueseascondary hover:text-white hover:border-none">
            <Image src="" alt="" />
            <h1 className="font-bold">NIB</h1>
            <p>
              NIB (Business Identification Number) is the identity of a Business
              Actor issued by the OSS Institution after the Business Actor has
              made a Registration.
            </p>
          </div>
          <div className="bg-black/10 p-5 border border-white/40 rounded-md h-[15rem] hover:bg-blueseascondary hover:text-white hover:border-none">
            <Image src="" alt="" />
            <h1 className="font-bold">NPWP</h1>
            <p>
              Taxpayer Identification Number (NPWP) is a number given to
              taxpayers as a tool in tax administration which is used as a
              self-identification or identity of taxpayers in carrying out their
              tax rights and obligations.
            </p>
          </div>
          <div className="bg-black/10 p-5 border border-white/40 rounded-md h-[15rem] hover:bg-blueseascondary hover:text-white hover:border-none">
            <Image src="" alt="" />
            <h1 className="font-bold">Dll</h1>
          </div>
          {/* <div className="bg-black/10 p-5">
            <Image src="" alt="" />
            <h1>NIB</h1>
          </div> */}
        </div>
      </div>
    </div>
  );
}
