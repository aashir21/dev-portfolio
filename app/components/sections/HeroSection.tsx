import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button';
import { DownloadIcon } from 'lucide-react';
import Link from 'next/link';
import { FaLinkedin } from 'react-icons/fa';

const HeroSection = () => {
    return (
        <section className='w-[90%] lg:w-full mx-auto h-[90vh] lg:h-[100vh]'>
            <div className='flex flex-col-reverse lg:flex-row w-full p-2 lg:w-[85%] h-full justify-center lg:justify-around items-center mx-auto gap-4'>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-3xl md:text-4xl md:text-center lg:text-left lg:text-5xl font-bold'>I'm <span className="text-lime-300">Aashir Siddiqui</span> 👋🏻</h1>
                    <h3 className='text-2xl font-bold md:text-center lg:text-left'>Full Stack Developer</h3>
                    <p className='md:text-lg lg:w-[75%] md:text-center lg:text-left text-zinc-300'>Driven Full Stack Developer proficient in front-end, back-end, and database technologies. Proven experience includes multiple internships, notably with IBM.</p>
                    <div className='flex gap-2 my-4 md:mx-auto lg:mx-0'>
                        <Button className='cursor-pointer'>
                            My Resume
                            <DownloadIcon />
                        </Button>
                        <Button variant="outline" className='cursor-pointer' asChild>
                            <Link href="https://www.linkedin.com/in/aashir21" target='_blank'>
                                Connect on LinkedIn
                                <FaLinkedin />
                            </Link>
                        </Button>
                    </div>
                </div>
                <div className="lg:my-4 my-2 md:h-[400px] md:w-full mx-auto md:flex md:items-center md:justify-center lg:h-[400px] lg:w-[400px]">
                    <Image
                        src="https://pbs.twimg.com/profile_images/1906322357720858625/N0ubALC4_400x400.jpg"
                        className="rounded-full md:rounded-xl border-3 border-lime-300 object-cover lg:h-[100%] lg:w-[100%]"
                        alt="User Image"
                        width={200}
                        height={200}
                    />
                </div>
            </div>
        </section>
    )
}

export default HeroSection;