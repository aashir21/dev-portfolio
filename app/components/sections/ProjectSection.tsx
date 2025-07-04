import React from 'react'
import SubSectionTitle from '../typography/SubSectionTitle'
import { Project } from '@/app/utils/interfaces'
import ProjectCard from '../cards/ProjectCard'
import { CLERK, DOCKER, FIGMA, FIREBASE, GEMINI_AI, GIT, JAVA, JAVASCRIPT, JENKINS, KUBERNETES, MONGODB, MYSQL, NEXTJS, PADDLE, POSTMAN, REACT, REACT_NATIVE, REDUX, SPRING_BOOT, TAILWIND, TYPESCRIPT, VITE } from '@/app/utils/skills'

const projects: Project[] = [
    {
        projectName: "Collge",
        projectDetails: [
            "Spring Boot microservices backend",
            "React Native Expo mobile app",
            "Deployed with K8s, Docker & Jenkins",
            "250+ users in 2 months"
        ],
        screenshotUrl: "/collge.jpg",
        liveLink: "",
        githubLink: "",
        status: "Completed",
        skillsUsed: [SPRING_BOOT, REACT_NATIVE, NEXTJS, JAVA, TYPESCRIPT, MONGODB, MYSQL, DOCKER, KUBERNETES, JENKINS, FIGMA, GIT, REDUX, POSTMAN],
        isSourceCodeAvailable: false,
        description: "Collge is a social networking app for university students!",
        isMobileOnly: true,
        appStoreLink: "https://apps.apple.com/gb/app/collge/id6739363142",
        playStoreLink: "https://play.google.com/store/apps/details?id=com.collge.collgeio&pli=1",
    },
    {
        projectName: "AI SaaS Starter Kit",
        projectDetails: [
            "Backend powered by Firebase",
            "Clerk for secure authentication",
            "Paddle for seamless payment processing",
            "Gemini AI for dynamic content generation"
        ],
        screenshotUrl: "/starter-kit.jpg",
        liveLink: "https://github.com/aashir21/starter-kit",
        githubLink: "https://github.com/aashir21/starter-kit",
        status: "Completed",
        skillsUsed: [NEXTJS, FIREBASE, TYPESCRIPT, GIT, CLERK, TAILWIND, GEMINI_AI, PADDLE],
        isSourceCodeAvailable: true,
        description: "Ultimate starter kit, dont waste time building basic functionality and ship fast!",
        isMobileOnly: false,
    },
    {
        projectName: "Marvel Fandom",
        projectDetails: ["Made using React.js and SCSS", "Search functionality to look up character details", "Fetching data from Marvel REST API", "Pagination to dynamically fetch new data"],
        screenshotUrl: "/marvel.jpg",
        liveLink: "https://marvelinfohub.netlify.app/",
        githubLink: "https://github.com/aashir21/Marvel-Project",
        status: "Completed",
        skillsUsed: [REACT, GIT, JAVASCRIPT, VITE],
        isSourceCodeAvailable: true,
        description: "A marvel fan website! Get information about characters & comics!",
        isMobileOnly: false,
    }
]

const ProjectSection = () => {
    return (
        <section className='w-[90%] md:w-full mx-auto my-8'>
            <div className='flex flex-col flex-wrap w-full md:w-[85%] h-full md:justify-between mx-auto'>
                <SubSectionTitle title='Projects' />
                <div className='mt-4 w-full flex md:flex-col lg:flex-row flex-wrap gap-2 justify-evenly'>
                    {
                        projects.map((project, idx) => {
                            return (
                                <ProjectCard key={idx} project={project} />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default ProjectSection