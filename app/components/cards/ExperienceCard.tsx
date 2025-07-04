import { Experience } from '@/app/utils/interfaces';
import { Dot } from 'lucide-react';
import Image from 'next/image';
import React from 'react'

interface ExperienceCardProps {
    experience: Experience;
}

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
    return (
        <div className='w-full p-4 rounded-xl bg-accent my-2'>
            <div className='mb-4'>
                <div className='flex flex-row gap-2 flex-wrap'>
                    <Image
                        src={experience.companyLogoUrl}
                        alt='Company Logo'
                        width={72}
                        height={72}
                        className='rounded-lg'
                    />
                    <div>
                        <div className='flex flex-row gap-2 items-center'>
                            <h3 className='font-bold text-lg'>{experience.companyName}</h3>
                            <p className='text-neutral-300 text-xs'>{experience.jobLocation}</p>
                        </div>
                        <h1 className='font-semibold'>{experience.jobTitle}</h1>
                        <p className='text-xs text-neutral-300'>{experience.duration}</p>
                    </div>
                </div>
            </div>
            <p className='text-md font-semibold'>{experience.jobType}</p>
            <ul className='grid gap-1 mt-2'>
                {
                    experience.description.map((description, idx) => {
                        return (
                            <li key={idx} className='grid grid-cols-[auto_1fr] gap-2 items-start'>
                                <Dot size={22} color='#bef264' />
                                <span>{description}</span>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default ExperienceCard