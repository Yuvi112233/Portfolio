import { IconBrandGithub, IconBrandInstagram, IconBrandLeetcode, IconBrandLinkedin, IconBrandYoutube } from "@tabler/icons-react";
const Info = {
    name: "Yuvraj Kaushik",
    stack: ["Mern Stack developer", "Full Stack Developer", "Competitive Programmer", "Freelancer", "Open Source Contributor"],
    bio: "I'm a passionate MERN stack developer specializing in building dynamic and scalable web applications, delivering high-quality solutions, and providing freelance services that exceed client expectations. Let's connect and create something incredible together!"
}



const ProjectInfo = [
    {
        title: " E-comm App",
        desc: "Ecoomm is a full-stack e-commerce platform built using the MERN stack (MongoDB, Express.js, React, and Node.js), providing a seamless and secure shopping experience. It features user authentication with login, registration, and logout, ensuring data security. Users can browse products, add them to their cart or wishlist, and complete purchases through a secure checkout process with address and payment validation. The platform includes an admin panel for managing products, orders, and users. Customers can track their order history in the Orders section. With a responsive design and robust backend, Ecoomm delivers a smooth and efficient online shopping experience.",
        image: "Ekart.png",
        live: true,
        technologies: ["React", "Tailwind", "Redux", "Node", "MongoDB"],
        link: "https://ecommerce-mern-stack-1-p1mu.onrender.com",
        
    },
    {
        title: "SkyHighTechnologies ",
        desc: "SkyHighTechnologies is a modern, fully responsive website built using React and TailwindCSS for a social media marketing agency. Designed to showcase services effectively, it features a sleek and engaging UI with smooth animations and transitions. The website includes sections for agency services, client testimonials, portfolio, and contact information, ensuring a user-friendly experience. It is optimized for performance, responsiveness, and SEO, making it accessible across all devices. SkyHighTechnologies serves as a professional online presence for the agency, helping attract potential clients with its clean design and seamless navigation.",
        image: "Facebook.png",
        live: true,
        technologies: ["React", "Springboot", "MongoDB", "Tailwind", "Tabler-Icons", "Firebase"],
        link: "https://skyhightechnologies.ca/",
        
    },
    {
        title: "Portfolio-Website",
        desc: "The Portfolio Website is a modern, fully responsive web application built with **React, TypeScript, and Tailwind CSS**, designed to showcase **skills, projects, and experiences** in a visually appealing and interactive manner. It features smooth **Framer Motion animations**, a structured **project showcase with live previews**, an **integrated contact form with validation**, and **dark/light mode support** for a seamless user experience. Optimized for **performance, SEO, and mobile responsiveness**, this portfolio serves as a **digital resume**, enhancing personal branding and making a strong impression on potential employers and clients. 🚀The **Portfolio Website** is a modern, fully responsive web application built with **React, TypeScript, and Tailwind CSS**, designed to showcase **skills, projects, and experiences** in a visually appealing and interactive manner. It features smooth **Framer Motion animations**, a structured **project showcase with live previews**, an **integrated contact form with validation**, and **dark/light mode support** for a seamless user experience. Optimized for **performance, SEO, and mobile responsiveness**, this portfolio serves as a **digital resume**, enhancing personal branding and making a strong impression on potential employers and clients. 🚀",
        image: "Spotify.png",
        live: true,
        technologies: ["React", "Springboot", "Tailwind", "Tabler-Icons", "MongoDB", "Firebase"],
        link: "",
        
    },
    
]


const SkillInfo = [
    {
        title: "Frontend",
        skills: ["HTML", "CSS", "SASS", "JavaScript", "React JS", "Angular", "Redux", "Tailwind CSS", "Material UI", "Bootstrap"
        ]
    },
    {
        title: "Backend",
        skills: ["Node JS", "Express JS",  "MongoDB", ]
    },
    {
        title: "Languages",
        skills: [ "JavaScript", "TypeScript"]
    },
    {
        title: "Tools",
        skills: ["Git", "Github", "VS Code", "Postman", "MongoDB Compass", "Spring Tool Suite","Versel"]
    }
]
const socialLinks = [
    { link: "https://github.com/Yuvi112233", icon: IconBrandGithub },
    { link: "https://www.linkedin.com/in/yuvraj-kaushik-a275a4253", icon: IconBrandLinkedin },
    { link: "https://www.instagram.com/yuvraj_kaushik_56?igsh=amxjeXp3dWtyY3Vj", icon: IconBrandInstagram }, 
];



const ExperienceInfo = [
    {
        role: "Front end Developer",
        company: "Digi-verse Technologies",
        date: " September 2024 - December 2024 ",
        desc: "I completed an internship at Digi-Verse Technologies, where I maintained and developed websites using React, Tailwind CSS, and Bootstrap, managed product listings on WordPress, and contributed to creating seamless user experiences.",
        skills: ["Tailwind ", "React JS", "Express", "Node JS", "MongoDB", "Microservices"]
    },
    
]
const Slugs = [
    "typescript",
    "javascript",
    "react",
    "angular",
    "android",
    "html5",
    "css3",
    "springboot",
    "mongodb",
    "nodedotjs",
    "express",
    "git",
    "github",
    "gitlab",
    "visualstudiocode",
    "figma",
];
export { Info, ProjectInfo,socialLinks, SkillInfo, ExperienceInfo, Slugs };