import React from 'react'
import Image from 'next/image'
import ImageAboutUs from '/public/img/imageabout.jpg'

export default function About() {
  return (
    <div className='w-full grid grid-cols-2 mt-28 mb-10'>
        <div className="relative">
            <div className="border-[#1a3d86] border-[10px] w-40 h-[30rem]"></div>
            <Image src={ImageAboutUs} alt='' className='absolute bottom-[20%] w-[30rem] left-[15%]' />
        </div>

        <div className="">
            <h1 className='uppercase font-bold text-3xl mb-8 border-2 border-b-blueseaprimary w-max'>About Us</h1>
            <h3 className='mb-3'>Sarana Mulya Grafika or SMG is a company engaged in the creative industry, supporting business people in Indonesia to increase the quality level of your business. We offer a wide selection of products and services.</h3>
            <h3 className='mb-1'><span className='text-blueseascondary font-semibold mb-3'>First</span>, System Management, in the ever-evolving digital era, efficient system management is essential. We provide leading solutions to help your business manage and optimize every process with efficiency and accuracy.</h3>
            <h3 className='mb-1'><span className='text-blueseascondary font-semibold mb-3'>Secondly, </span>Social Media Management in managing social media, we take the role as a partner, with a mature strategy, creative content, we help build a strong image of your business.</h3>
            <h3 className='mb-1'><span className='text-blueseascondary font-semibold mb-3'>Thirdly,  </span>our Design Management is not just about creating attractive visuals, but we can also convey the message and content of an image to the heart of the audience.</h3>
            <h3 className='mb-1'><span className='text-blueseascondary font-semibold mb-3'>Fourth,  </span>Printing management our commitment to quality is reflected in our printing services. Each print is a work of art produced with the finest detail and utmost attention to quality.</h3>
            <h3 className='mb-3'><span className='text-blueseascondary font-semibold'>and Fifth,  </span>Event management is one of our distinguishing skills, from concept to execution, we work on every detail to create an extraordinary experience, your event is not just an event but a story that we help create together.</h3>
            <h3>Kami berkomitmen untuk memberikan solusi yang inovatif dan dapat meningkatkan daya saing perusahaan Anda karena keberhasilan perusahaan Anda adalah prioritas utama kami.</h3>
        </div>
    </div>
  )
}
