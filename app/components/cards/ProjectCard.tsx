import { Project } from '@/app/utils/interfaces';
import React from 'react';
import Image from 'next/image';
import { CircleCheckBig, Dot, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BsGithub } from 'react-icons/bs';
import { BiLogoPlayStore } from 'react-icons/bi';
import { FaAppStore } from 'react-icons/fa6';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import Link from 'next/link';

interface ProjectCardProps {
    project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <div className='w-full md:max-w-[100%] lg:max-w-[30%] rounded-xl bg-accent my-4'>
            <Image
                src={project.screenshotUrl}
                alt='project image'
                height={500}
                width={500}
                className='bg-transparent w-full h-[250px] rounded-tl-xl rounded-tr-xl object-cover'
            />
            <div className='p-4 w-full'>
                <div className='flex flex-col'>
                    <div className='flex items-center justify-between'>
                        <h1 className='text-lg font-semibold text-white'>{project.projectName}</h1>
                        <div className='flex items-center gap-2'>
                            <CircleCheckBig size={16} color='#22c55e' />
                            <h3 className='text-green-500 text-sm'>
                                {project.status}
                            </h3>
                        </div>
                    </div>
                    <p className='text-sm text-neutral-300 mb-2'>{project.description}</p>
                </div>

                <ul className='grid gap-1 mt-2'>
                    {
                        project.projectDetails.map((detail, idx) => {
                            return (
                                <li key={idx} className='grid grid-cols-[auto_1fr] gap-2 text-sm items-start'>
                                    <Dot size={22} color='#bef264' />
                                    <span>{detail}</span>
                                </li>
                            )
                        })
                    }
                </ul>

                <div className='w-full my-4 flex flex-col flex-wrap'>
                    <p className='text-neutral-400 text-sm font-semibold'>Technologies Used</p>
                    <div className='flex flex-row flex-wrap my-1 li'>
                        {
                            project.skillsUsed.map((skill, idx) => {
                                return (
                                    <Tooltip key={idx}>
                                        <TooltipTrigger>
                                            <Image
                                                key={idx}
                                                src={skill.logo}
                                                alt='skill logo'
                                                width={24}
                                                height={24}
                                                className='m-1'
                                            />
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>{skill.name}</p>
                                        </TooltipContent>
                                    </Tooltip>

                                )
                            })
                        }
                    </div>
                </div>

                <div className='mt-4 w-full self-end'>
                    {
                        !project.isMobileOnly ?
                            (
                                <Button className='cursor-pointer' asChild>
                                    <Link href={project.liveLink} target='_blank'>
                                        Live Link
                                        <Globe />
                                    </Link>
                                </Button>
                            )
                            :
                            (
                                <div>
                                    <Button variant={"outline"} className='cursor-pointer' asChild>
                                        <Link href={project.playStoreLink!} target='_blank'>
                                            <BiLogoPlayStore />
                                            Play Store
                                        </Link>
                                    </Button>
                                    <Link href={project.appStoreLink!} target='_blank'>
                                        <Button className='ml-2 cursor-pointer' variant={"outline"} >
                                            <FaAppStore />
                                            App Store
                                        </Button>
                                    </Link>
                                </div>
                            )

                    }
                    {
                        project.isSourceCodeAvailable && (
                            <Button className='ml-2 cursor-pointer' variant={"outline"} asChild>
                                <Link href={project.githubLink} target='_blank'>
                                    Source Code
                                    <BsGithub />
                                </Link>
                            </Button>
                        )
                    }
                </div>

            </div>
        </div>
    )
}

export default ProjectCard