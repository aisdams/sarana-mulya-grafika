import React from 'react'
import VisionMissionImage from '../../../public/img/Vision&Mission.jpg'
import Image from 'next/image'

export default function VisionMision() {
  return (
    <div className='w-[min(90%,1280px)] mx-auto mb-44 mt-28'>
        <h1 className='font-bold text-3xl mb-10 uppercase border-2 border-b-blueseaprimary w-max'>Vision & Mission</h1>
        <div className="flex relative">
            <div className="w-full">
                <Image src={VisionMissionImage} alt='' className='w-[85%] bg-cover object-cover object-left h-[30rem]' />
            </div>
            <div className="bg-blueseascondary backdrop-blur-md p-5 rounded-md absolute top-60 w-[450px] text-white right-0">
                <h1 className='font-bold'>Vision</h1>
                <h3>To be a creative industry company in Indonesia that provides efficient and high-quality services to support your business development.</h3>

                <h1 className='font-bold mt-3'>Misi</h1>
                <ul className='list-[circle] pl-5'>
                   <li>Providing excellent and creative design services</li> 
                   <li>Become a pioneer in application development with the latest technology.</li> 
                   <li>Build mutually beneficial strategic partnerships with other companies.</li> 
                   <li>Improve the skills and knowledge of each team member.</li> 
                </ul>
            </div>
        </div>
    </div>
  )
}
