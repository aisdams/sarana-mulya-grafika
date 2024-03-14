import { ReactElement } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import imageErr from '/public//img/404Image.svg';
import { NextPageCustomLayout } from '@/types/_app.type';
import Image from 'next/image';

const CustomError: NextPageCustomLayout = () => {
  const router = useRouter();
  return (
    <div className="block h-screen mx-auto w-full justify-center items-center text-center">
      <Image src={imageErr} alt="" className="w-full" />
      <h1 className="text-2xl mb-2">
        Oops, looks like the page is lost. <br />
      </h1>
      <Link
        href="/"
        className="relative inline-flex items-center justify-start text-white px-6 py-1 overflow-hidden font-medium transition-all bg-blueseaprimary rounded hover:bg-white group"
      >
        <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#01324d] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
        <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-white">
          Back
        </span>
      </Link>
    </div>
  );
};

CustomError.getLayout = function getLayout(page: ReactElement) {
  return page;
};

export default CustomError;
