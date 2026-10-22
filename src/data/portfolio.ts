export const portfolioData = {
  personal: {
    name: "Jayanth R",
    role: "AI & ML Engineer",
    location: "Mysuru, Karnataka",
    cgpa: "8.36",
    email: "jayanthram2528@gmail.com",
    github: "https://github.com/JayanthR5",
    linkedin:
      "https://www.linkedin.com/in/jayanth-r-%E0%B2%97%E0%B3%8C%E0%B2%A1-914765298?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    image: "/profile_img.jpeg",
    resume: "/resume.pdf",
  },
  about: {
    description:
      "Final year Computer Science and Engineering student specializing in Artificial Intelligence and Machine Learning. Experienced with Java, SQL, Python, and web application development, with a focus on practical problem solving, teamwork, and delivery.",
  },
  skills: {
    languages: ["Python", "Java", "SQL","C"],
    webTechnologies: ["HTML5", "CSS3", "JavaScript", "React.js", "Express.js", "Node.js"],
    database: ["PostgreSQL", "MySQL"],
    ai: ["TensorFlow", "Scikit-Learn", "OpenCV"],
    tools: ["Git", "GitHub", "VS Code", "Postman","Jira"],
  },
  experience: [
    {
      company: "IBM SkillsBuild",
      role: "AI Strategy & Business Intelligence Intern",
      duration: "1 month",
      description:
        "Worked on AI-driven business intelligence solutions and web application development.",
    },
  ],
  projects: [
    {
  title: "Inventory Management System",
  tech: ["React", "Node.js", "MongoDB"],
  description: "Full-stack inventory management system for tracking products, managing stock levels, and monitoring inventory operations.",
  
  
    },

    {
      title: "Face Expression Detection",
      tech: ["Python", "OpenCV", "TensorFlow"],
      description: "Real-time facial emotion detection system.",
      
      
    },

    {
  title: "Rice Variety Classification",
  tech: ["React", "FastAPI", "Python", "TensorFlow", "PostgreSQL"],
  description: "AI-powered rice variety classification system using MobileNetV2 transfer learning to identify five rice varieties with high accuracy.",
    
    },

  ],
  certifications: [
    "IBM SkillsBuild AI & BI Internship",
    "NPTEL Smart Cities",
    "Arduino Bootcamp: Learning Through Projects-Coursera ",
    "software development lifecycle-Coursera",
  ],
  leadership: [
    "Vice President, IEEE Computational Intelligence Society",
    "1st Runner-up, PathCraft Gen AI Webpage Architect Challenge",
    "Organized a data-thon event",
    
  ],
  achievements: [
    "NPTEL Smart Cities | Elite + Gold | 91%",
    "1st Runner -up of pathcraft-the gen ai webpage architect challenge ",
  ],
} as const;
