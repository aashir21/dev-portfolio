"use client";
import { handleDownload } from '@/app/utils/functions';
import { Button } from '@/components/ui/button';
import { DownloadIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react'
import { FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const CTA = () => {
    return (
        <section className='w-[90%] md:w-full mx-auto h-[50vh]'>
            <div className='flex flex-col w-full p-2 md:w-[85%] h-full justify-center items-center mx-auto gap-4'>
                <h3 className='text-4xl font-bold text-lime-300'>Reach Out To Me</h3>
                <p className='text-md md:text-lg md:w-[75%] text-zinc-300 text-center'>Lets work together</p>
                <Button className='cursor-pointer' asChild>
                    <Link href={"mailto:aashir_sidiki@hotmail.com"}>
                        Contact Me Here
                        <MdEmail />
                    </Link>
                </Button>
                <div className='flex gap-2 my-4 flex-col md:flex-row'>

                    <Button onClick={handleDownload} className='cursor-pointer' variant={"outline"}>
                        Get My Resume
                        <DownloadIcon />
                    </Button>
                    <Link href="https://www.linkedin.com/in/aashir21" target='_blank'>
                        <Button className='cursor-pointer' variant={"outline"}>
                            Connect on LinkedIn
                            <FaLinkedin />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default CTA;