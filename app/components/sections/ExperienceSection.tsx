import React from 'react'
import SubSectionTitle from '../typography/SubSectionTitle'
import ExperienceCard from '../cards/ExperienceCard'
import { Experience } from '@/app/utils/interfaces'

const ExperienceSection = () => {

    const experiences: Experience[] = [
        {
            jobTitle: "Full Stack Developer",
            jobType: "University Placement",
            companyName: "IBM",
            jobLocation: "Hursley, UK",
            companyLogoUrl: "https://www.svgrepo.com/show/349407/ibm.svg",
            duration: "July 2024 - July 2025",
            description: [
                "Built and optimized REST APIs and microservices in Java, improving system functionality",
                "Created and updated CLI commands using Golang to increase the functionality of the tool",
                "Implemented significant enhancements to the web interface with TypeScript and Next.js, improving user experience",
                "Engaged directly in customer and design review meetings, translating feedback into actionable development tasks",
                "Adhered to a Test-Driven Development (TDD) strategy, ensuring robust and reliable code"
            ]
        },
        {
            jobTitle: "Back End Engineer",
            jobType: "Summer Internship",
            companyName: "Digitt Plus",
            jobLocation: "Lahore, Pakistan",
            companyLogoUrl: "https://media.licdn.com/dms/image/v2/D4D0BAQG8rUPyK4dSJw/company-logo_200_200/company-logo_200_200/0/1730380532925/digittplus_logo?e=1756944000&v=beta&t=MhnJRtebT5TkovTI9PVD69G-WIZ_VY4vYX7-XuglOTQ",
            duration: "July 2023 - Aug 2023",
            description: [
                "Developed a Full Stack admin dashboard to monitor logs, using Next.js and Spring Boot",
                "Utilized Java, Spring Boot, and Spring MVC for robust backend development",
                "Gained experience with distributed systems technologies including Redis, RabbitMQ, and API Gateways",
                "Managed and queried SQL databases"
            ]
        },
        {
            jobTitle: "Web Developer",
            jobType: "Volunteer Work",
            companyName: "GrassRoots Web",
            jobLocation: "Remote",
            companyLogoUrl: "https://media.licdn.com/dms/image/v2/C4D0BAQGJxEcxbwma1w/company-logo_200_200/company-logo_200_200/0/1630518119079?e=1756944000&v=beta&t=HiDod_36pGrxplMDkik-pAVAi-Wo2ojKRS6NiFTt3sw",
            duration: "Dec 2022 - July 2023",
            description: [
                "Collaborated cross-functionally to deliver successful project outcomes",
                "Spearheaded the development of an organizational website, significantly increasing volunteer engagement for their campaigns",
                "Fostered strong client relationships through direct communication, ensuring a personalized and effective experience"
            ]
        },
    ]

    return (
        <section className='w-[90%] md:w-full mx-auto mb-8'>
            <div className='flex flex-col flex-wrap w-full md:w-[85%] h-full md:justify-between mx-auto'>
                <SubSectionTitle title='Experience' />
                <div className='flex flex-col mt-2 my-4'>
                    {
                        experiences.map((experience, idx) => {
                            return (
                                <ExperienceCard key={idx} experience={experience} />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default ExperienceSection