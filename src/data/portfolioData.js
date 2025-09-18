// Portfolio data - embedded directly to avoid 404 errors
export const portfolioData = {
  intro: {
    title: "Hi, I'm Ayush Gupta",
    subtitle: "Software Engineer | AI Researcher",
    description: "I focus on building intelligent, production-ready applications at the intersection of AI, backend development, and systems engineering.",
    highlight: "Full-Stack Developer",
    buttonText: "Get In Touch",
    buttonLink: "#contact",
    avatar: "/data/intro/images/avatar.jpeg"
  },
  
  education: [
    {
      school: "University of Massachusetts Amherst",
      degree: "Master of Science in Computer Science",
      year: "2023 - 2025",
      gpa: "3.8/4.0",
      logo: "/data/education/ms-computer-science/images/umassamherst_logo.jpeg",
      activities: [
        "Graduate Research Assistant in Distributed Systems Lab",
        "Teaching Assistant for Data Structures and Algorithms",
        "Member of Graduate Student Council"
      ],
      coursework: [
        "Advanced Algorithms",
        "Distributed Systems",
        "Machine Learning",
        "Database Systems",
        "Computer Networks"
      ]
    },
    {
      school: "Indian Institute of Technology Kharagpur",
      degree: "Bachelor of Technology in Electrical Engineering",
      year: "2019 - 2023",
      gpa: "8.5/10.0",
      logo: "/data/education/btech-electrical/images/IIT_Kharagpur_Logo.jpg",
      activities: [
        "Final Year Project: Smart Grid Optimization",
        "Member of Robotics Club",
        "Volunteer for Technical Fest"
      ],
      coursework: [
        "Power Systems",
        "Control Systems",
        "Digital Signal Processing",
        "Power Electronics",
        "Renewable Energy Systems"
      ]
    }
  ],
  
  experience: [
    {
      company: "Laboratory for Autonomous Systems and Software (LASS)",
      position: "Graduate Research Assistant",
      duration: "Sep 2023 - Present",
      logo: "/data/experience/lass/images/lass.jpg",
      description: "Conducting research in distributed systems and cloud computing, focusing on microservices architecture and container orchestration.",
      technologies: ["Docker", "Kubernetes", "Go", "Python", "AWS"],
      achievements: [
        "Developed scalable microservices architecture",
        "Implemented container orchestration solutions",
        "Published research papers in top-tier conferences"
      ]
    },
    {
      company: "Honeywell",
      position: "Software Engineer",
      duration: "Jun 2022 - Aug 2022",
      logo: "/data/experience/software-engineer-honeywell/images/honeywell.jpg",
      description: "Worked on industrial automation systems, developing software for manufacturing processes and quality control.",
      technologies: ["C++", "Python", "SQL", "Industrial Protocols"],
      achievements: [
        "Improved system efficiency by 15%",
        "Reduced production downtime by 20%",
        "Mentored junior developers"
      ]
    },
    {
      company: "Honeywell",
      position: "Software Development Intern",
      duration: "Jun 2021 - Aug 2021",
      logo: "/data/experience/software-intern-honeywell/images/honeywell.jpg",
      description: "Gained hands-on experience in software development for industrial applications and automation systems.",
      technologies: ["Java", "Spring Boot", "MySQL", "REST APIs"],
      achievements: [
        "Developed REST APIs for data management",
        "Implemented automated testing frameworks",
        "Collaborated with cross-functional teams"
      ]
    },
    {
      company: "IIT Kharagpur",
      position: "Research Assistant - Swarm Robotics",
      duration: "Jan 2021 - May 2021",
      logo: "/data/experience/swarm-robotics/images/swarm.png",
      description: "Conducted research in swarm robotics, developing algorithms for coordinated multi-robot systems.",
      technologies: ["Python", "ROS", "Computer Vision", "Machine Learning"],
      achievements: [
        "Developed coordination algorithms for robot swarms",
        "Implemented computer vision for object detection",
        "Published research findings in academic journals"
      ]
    }
  ],
  
  projects: [
    {
      title: "Distributed Stock Trading Platform",
      description: "A high-performance, fault-tolerant trading platform built with microservices architecture, supporting real-time market data processing and order execution.",
      technologies: ["Go", "Docker", "Kubernetes", "PostgreSQL", "Redis", "WebSocket"],
      features: [
        "Real-time market data processing",
        "High-frequency trading support",
        "Fault-tolerant microservices architecture",
        "Horizontal scaling capabilities",
        "Comprehensive monitoring and logging"
      ],
      images: ["/data/projects/distributed-stock-trading/images/stock-trading.png"],
      github: "https://github.com/ayushagupta/distributed-trading-platform",
      live: "https://trading-platform-demo.com"
    },
    {
      title: "Knowledge Graph RAG System",
      description: "An intelligent question-answering system that combines knowledge graphs with retrieval-augmented generation for accurate and contextual responses.",
      technologies: ["Python", "Neo4j", "LangChain", "OpenAI GPT", "FastAPI", "Vector Databases"],
      features: [
        "Knowledge graph construction and management",
        "Semantic search and retrieval",
        "Context-aware response generation",
        "Multi-modal data processing",
        "Real-time knowledge updates"
      ],
      images: ["/data/projects/kg-rag/images/kgrag.png"],
      github: "https://github.com/ayushagupta/kg-rag-system",
      live: "https://kg-rag-demo.com"
    },
    {
      title: "Speech-to-Summary AI Assistant",
      description: "An AI-powered application that converts speech to text and generates intelligent summaries, with support for multiple languages and real-time processing.",
      technologies: ["Python", "Whisper", "OpenAI GPT", "Streamlit", "WebRTC", "NLP"],
      features: [
        "Real-time speech recognition",
        "Multi-language support",
        "Intelligent summarization",
        "Speaker identification",
        "Export capabilities"
      ],
      images: ["/data/projects/speech-to-summary/images/speech-to-summary.png"],
      github: "https://github.com/ayushagupta/speech-summary-ai",
      live: "https://speech-summary-demo.com"
    }
  ],
  
  blogs: {
    title: "Blog",
    subtitle: "Thoughts and Insights",
    posts: [],
    ctaText: "Want to Read More?",
    ctaDescription: "I regularly write about software development, technology trends, and my learning journey.",
    ctaButtonText: "View All Posts",
    ctaButtonLink: "#"
  },
  
  contact: {
    title: "Get In Touch",
    subtitle: "Let's Connect",
    description: "I'm always interested in discussing new opportunities, innovative projects, and exciting collaborations.",
    email: "ayush.gupta@umass.edu",
    phone: "+1 (555) 123-4567",
    location: "Amherst, MA, USA",
    github: "https://github.com/ayushagupta",
    linkedin: "https://linkedin.com/in/ayushagupta"
  }
};
