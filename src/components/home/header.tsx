import React from 'react'
import Image from 'next/image'
import ImageHeader from '/public/img/company-header.png'
import { Button } from '../ui/button'
import BtnPlay from '/public/img/btnplayhead.png'
import stylesHeader from '../../styles/header.module.css'

export default function Header() {
  return (
    <div className='grid grid-cols-2 items-center justify-between mx-auto gap-5 mb-52'>
        <div className="pl-20 pt-32">
            <div className='text-5xl font-bold mb-8 flex gap-3'>Sarana Mulya <h3 className={['text-blueseaprimary', stylesHeader.textheader].join(' ')}>Grafika</h3></div>
            <h3 className='text-base font-light mb-8'>SMG is a company engaged in the creative industry, supporting business people in Indonesia to improve the quality level of your business. We offer a wide selection of products and services.</h3>
            <div className="flex gap-5 items-center">
                <Button className='bg-blueseaprimary text-white tracking-wider h-8'>Get More</Button>
                <div className='flex items-center gap-2'>
                    <Image src={BtnPlay} alt='' className='w-8 h-8' />
                    <h1>See How We Work</h1>
                </div>
            </div>
        </div>
        <div className="absolute -top-8 right-0 z-[-5]">
            <Image src={ImageHeader} alt="" className='h-[30rem] w-[45rem]' />
        </div>
        
    </div>
  )
}