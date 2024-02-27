import React from 'react'
import Image from 'next/image'
import { FaPlay } from "react-icons/fa";
import ImgValue from '../../../public/img/imgvalue.jpg'
import ImgValue2 from '../../../public/img/imgvalue2.jpg'

export default function OurValue() {
  return (
    <div className='w-[min(90%,1280px)] mx-auto'>
        <div className="grid grid-cols-2 gap-8">
            <div className="relative w-full">
                <Image src={ImgValue} alt='' className='h-[30rem] w-[90%]' />
                <Image src={ImgValue2} alt='' className='absolute -bottom-10 w-auto h-72 object-contain border-[8px] border-white rounded-md -right-6'/>
                <div className="bg-gray-300 rounded-full border-[8px] right-[5%] border-white p-5 absolute top-[40%] mx-auto justify-center text-center">
                    <FaPlay className='text-blueseaprimary text-2xl'/>
                </div>
            </div>
            <div className="ml-5">
                <h1 className='font-bold text-3xl uppercase mb-5'>Our Value</h1>
                <p>Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
                <div className=" grid grid-cols-2 items-start gap-5 mt-5">
                    <div className="">
                        <h3 className='font-bold'>Creativity</h3>
                        <ul className='list-[circle]'>
                            <li>Innovative in every design and solution produced.</li>
                            <li>Always looking for new ways to meet client needs</li>
                            <li>Prioritize fresh and original ideas in every project.</li>
                        </ul>
                    </div>
                    <div className="">
                        <h3 className='font-bold'>Adaptability</h3>
                        <ul className='list-[circle]'>
                            <li>Able to adapt to rapid changes in the creative industry.</li>
                            <li>Flexible in facing market challenges and needs.</li>
                            <li>Responsive to changing trends and technologies.Prioritize fresh and original ideas in every project.</li>
                        </ul>
                    </div>
                    <div className="">
                        <h3 className='font-bold'>Responsibility</h3>
                        <ul className='list-[circle]'>
                            <li>Provide the best service by prioritizing customer satisfaction.</li>
                            <li>Responsible for the work results and projects assigned.</li>
                            <li>Appreciate time and commitment in every task undertaken.</li>
                        </ul>
                    </div>
                    <div className="">
                        <h3 className='font-bold'>Excellence </h3>
                        <ul className='list-[circle]'>
                            <li>Upholding high quality standards in every product and service</li>
                            <li>Committed to achieving the best results in every project.</li>
                            <li>Prioritizing excellence in every aspect of business.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
