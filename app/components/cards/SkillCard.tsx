import { Skill } from '@/app/utils/interfaces'
import Image from 'next/image';
import React from 'react'

interface SkillCardProps {
    skill: Skill;
}

const SkillCard = ({ skill }: SkillCardProps) => {

    return (
        <div className='p-4 bg-accent mr-2 my-2 flex flex-col min-w-[150px] items-center rounded-xl w-max'>
            <Image
                alt='skill logo'
                src={skill.logo}
                height={72}
                width={72}
            />
            <h1 className='my-2 font-semibold'>{skill.name}</h1>
        </div>
    )
}

export default SkillCard