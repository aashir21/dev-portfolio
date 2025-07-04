
export interface Experience {
    jobTitle: string;
    jobType: string;
    jobLocation: string;
    companyName: string;
    companyLogoUrl: string;
    duration: string;
    description: string[];
}

export interface Project {
    projectName: string;
    projectDetails: string[];
    screenshotUrl: string;
    liveLink: string;
    githubLink: string;
    status: string;
    skillsUsed: Skill[];
    isSourceCodeAvailable: boolean;
    description: string;
    isMobileOnly: boolean;
    playStoreLink?: string;
    appStoreLink?: string;
}

export interface Skill {
    name: string;
    logo: string;
}