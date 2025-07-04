import React from 'react'
import SubSectionTitle from '../typography/SubSectionTitle'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { BACKEND_SKILLS, FRONTEND_SKILLS, TOOLS } from '@/app/utils/skills'
import SkillCard from '../cards/SkillCard'

const SkillsSection = () => {

    return (
        <section className='w-[90%] md:w-full mx-auto my-8'>
            <div className='flex flex-col flex-wrap w-full md:w-[85%] h-full md:justify-between mx-auto'>
                <SubSectionTitle title='Skills' />
                <Tabs defaultValue="backend" className="my-4">
                    <TabsList className='w-full'>
                        <TabsTrigger value="backend">Back End</TabsTrigger>
                        <TabsTrigger value="frontend">Front End</TabsTrigger>
                        <TabsTrigger value="tools">Tools</TabsTrigger>
                    </TabsList>
                    <TabsContent value="backend">
                        <div className='w-full flex flex-wrap justify-evenly md:justify-start'>
                            {
                                BACKEND_SKILLS.map((skill, idx) => {
                                    return (
                                        <SkillCard key={idx} skill={skill} />
                                    )
                                })
                            }
                        </div>
                    </TabsContent>
                    <TabsContent value="frontend">
                        <div className='w-full flex flex-wrap justify-evenly md:justify-start'>
                            {
                                FRONTEND_SKILLS.map((skill, idx) => {
                                    return (
                                        <SkillCard key={idx} skill={skill} />
                                    )
                                })
                            }
                        </div>
                    </TabsContent>
                    <TabsContent value="tools">
                        <div className='w-full flex flex-wrap justify-evenly md:justify-start'>
                            {
                                TOOLS.map((skill, idx) => {
                                    return (
                                        <SkillCard key={idx} skill={skill} />
                                    )
                                })
                            }
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    )
}

export default SkillsSection