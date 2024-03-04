import React from 'react'
import Image from 'next/image'
import NavbarData from '../data/navbarData'
import ImageLogo from '/public/img/smglogo.png'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div className='w-full bg-black/10 backdrop-blur-lg text-white !z-10'>
        <div className="flex justify-between items-center mx-auto w-[min(90%,1280px)]">
            <div className="">
                <Image src={ImageLogo} alt="" className='w-14 h-14' />
            </div>
            <div className="flex gap-5">
                {NavbarData.map((navbar, idx) => (
                <ul key={idx}>
                   <Link href={navbar.link}><li className='flex text-md font-semibold'>{navbar.title}</li></Link>
                </ul>
                ))}
            </div>
        </div>
    </div>
  )
}
