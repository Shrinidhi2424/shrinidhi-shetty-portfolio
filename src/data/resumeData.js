import { FaReact, FaPython, FaJava, FaJs, FaNodeJs } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiSpringboot, SiPostgresql, SiSupabase, SiMongodb, SiFastapi } from 'react-icons/si';

export const resumeData = {
    name: "Shrinidhi Shetty",
    title: "Front-End Developer & Python Developer",
    email: "shrinidhi.s.s1234@gmail.com",
    phone: "9356792100",
    linkedin: "https://linkedin.com/in/shrinidhi-shetty",
    github: "https://github.com/Shrinidhi2424",
    logoText: "Shrinidhi Shetty",

    about: {
        summary: "Passionate Full Stack Developer with expertise in building scalable web applications and AI-driven solutions. Proven track record in developing real-time applications, microservices, and AI agents.",
        description: "I aim to leverage my skills in React, Next.js, Python, and AI to create impactful digital experiences. I enjoy solving complex problems and learning new technologies to stay ahead in the rapidly evolving tech landscape."
    },

    education: [
        {
            id: 1,
            institution: "Sahyadri College of Engineering and Management, Mangaluru",
            degree: "Bachelor of Engineering (B.E.), Computer Science and Engineering",
            duration: "Jun 2023 – Present",
            score: "CGPA: 9.55",
            description: "Focusing on core CS fundamentals, AI/ML, and Full Stack Development."
        },
        {
            id: 2,
            institution: "Nav Krishna Valley College, Sangli",
            degree: "Higher Secondary Education (CBSE)",
            duration: "2021 – 2023",
            score: "Percentage: 70%",
            description: "Specialized in Science (PCMB)."
        },
        {
            id: 3,
            institution: "Santhome School, Sangli",
            degree: "Secondary Education (ICSE)",
            duration: "2010 – 2021",
            score: "Percentage: 93%",
            description: "Developed strong foundation in mathematics and computer applications."
        }
    ],

    projects: [
        {
            id: 1,
            title: "ResumeAI Pro",
            tech: ["Next.js", "TypeScript", "Google Gemini 2.5", "Supabase", "Drizzle ORM"],
            description: "Real-time AI career assistant streaming personalized cover letters in under 2s.",
            details: [
                "Engineered a real-time AI career assistant using Next.js 16, TypeScript, and Google Gemini 2.5.",
                "Reduced application preparation time by 75% with instant cover letter streaming.",
                "Architected a scalable backend with Supabase, Drizzle ORM, and Clerk authentication.",
                "Implemented Zod validation and rate limiting to securely handle 10,000+ daily API requests."
            ],
            link: "#", // Add actual links if available
            github: "https://github.com/Shrinidhi2424/ResumeAI.git"
        },
        {
            id: 2,
            title: "AuroShield",
            tech: ["React", "Spring Boot", "PostgreSQL (PostGIS)", "FastAPI"],
            description: "Multi-modal women’s safety platform with spatial clustering and severity detection.",
            details: [
                "Engineered a multi-modal safety platform supporting voice/text/photo incident reporting.",
                "Implemented real-time panic alerts with geolocation tracking and 8+ user roles.",
                "Architected a microservices backend with Spring Boot and PostgreSQL (PostGIS) for spatial clustering.",
                "Processed 500+ reports/day at 92% AI accuracy with sub-200ms API latency."
            ],
            link: "#",
            github: "https://github.com/Shrinidhi2424/Auroshield.git"
        },
        {
            id: 3,
            title: "Movie RAG Agent",
            tech: ["Python", "LangChain", "Google Gemini", "Pinecone", "Hybrid Search"],
            description: "Hybrid RAG engine synthesizing real-time data for contextual relevance.",
            details: [
                "Architected a Hybrid RAG engine combining Pinecone vector search with BM25 keyword retrieval.",
                "Synthesized real-time Wikipedia data, improving contextual relevance by 40%.",
                "Engineered an autonomous agentic workflow using LangChain and Google Gemini.",
                "Reduced hallucinations by 95% and achieved sub-500ms inference latency."
            ],
            link: "#",
            github: "https://github.com/Shrinidhi2424/Movie-RAG.git"
        }
    ],

    skills: [
        { name: "Python", icon: FaPython, category: "Languages" },
        { name: "TypeScript", icon: SiTypescript, category: "Languages" },
        { name: "JavaScript", icon: FaJs, category: "Languages" },
        { name: "Java", icon: FaJava, category: "Languages" },
        { name: "Next.js", icon: SiNextdotjs, category: "Frontend" },
        { name: "React.js", icon: FaReact, category: "Frontend" },
        { name: "Tailwind CSS", icon: SiTailwindcss, category: "Frontend" },
        { name: "Spring Boot", icon: SiSpringboot, category: "Backend" },
        { name: "FastAPI", icon: SiFastapi, category: "Backend" },
        { name: "Node.js", icon: FaNodeJs, category: "Backend" },
        { name: "PostgreSQL", icon: SiPostgresql, category: "Database" },
        { name: "Supabase", icon: SiSupabase, category: "Database" },
        { name: "MongoDB", icon: SiMongodb, category: "Database" }
    ],

    certifications: [
        {
            id: 1,
            title: "Python Foundation Certification",
            issuer: "Infosys",
            date: "2024", // Estimated based on education timeline
            link: "#"
        },
        {
            id: 2,
            title: "Introduction to System Architecture",
            issuer: "Infosys",
            date: "2024",
            link: "#"
        },
        {
            id: 3,
            title: "Programming using Java",
            issuer: "Infosys",
            date: "2024",
            link: "#"
        }
    ]
};
