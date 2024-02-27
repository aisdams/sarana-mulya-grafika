import React from 'react'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'
import Link from 'next/link'
import { FaFacebook, FaInstagram, FaTiktok, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <div className='bg-[#272834] text-white py-20'>
        <div className="text-center mx-auto grid justify-center items-center mb-5">
            <h1 className='font-bold text-3xl'>Get In Touch</h1>
            <h3 className='font-light mt-5 text-graysmg'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration, by injected humour, or new randomised words.</h3>
            <form action="" className='mt-8'>
                <div className="grid grid-cols-2 gap-5">
                    <div className="grid gap-3">
                        <Input placeholder='Full Name *'/>
                        <Input placeholder='Email Addres*' />
                        <Input placeholder='Phone Number*' />
                    </div>
                    <div className=''>
                        <Textarea placeholder='Your Message' className='h-40' />
                    </div>
                </div>
            </form>
        </div>
        
        <Button className='bg-blueseaprimary w-max grid text-center justify-center mx-auto'>SEND MESSAGE</Button>
        
        <div className="text-center mt-10">
                <h1>Copyright © 2018 Pacifico. Designed by <Link href="/" className='text-blueseaprimary'>SARANA MULYA GRAFIKA</Link></h1>
                <div className="flex mx-auto justify-center items-center gap-5 text-2xl mt-5">
                    <FaFacebook/>
                    <FaInstagram/>
                    <FaTiktok/>
                    <FaLinkedinIn/>
                </div>
        </div>
    </div>
  )
}
