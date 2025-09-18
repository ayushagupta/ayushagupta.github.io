// Portfolio data - embedded with actual user content to avoid 404 errors
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
      year: "2022 - 2024",
      gpa: "3.95/4.0",
      logo: "/data/education/ms-computer-science/images/umassamherst_logo.jpeg",
      activities: [
        "Working as a Graduate Researcher at the Laboratory for Advanced System Software (LASS) led by Prof. Prashant Shenoy.",
        "Course assistant for 'Introduction to Computer and Network Security'.",
        "Collaborated with a team to organize the Turing Program in Summer 2025, aimed at introducing high school students in Amherst to Computer Science."
      ],
      coursework: [
        "Machine Learning, Neural Networks, Natural Language Processing.",
        "Distributed Systems, Advanced Algorithms, Computer & Network Security."
      ]
    },
    {
      school: "Indian Institute of Technology Kharagpur",
      degree: "Bachelor & Master of Technology in Electrical Engineering, Minor in Computer Science",
      year: "2017 - 2022",
      gpa: "8.8/10.0",
      logo: "/data/education/btech-electrical/images/IIT_Kharagpur_Logo.jpg",
      activities: [
        "Teaching assistant for 'Signals & Networks' and 'Measurements & Electronic Instruments' courses.",
        "Won First Runners Up at Inter IIT Tech Meet 2019 held at IIT Roorkee.",
        "Presented paper on division of robot swarm at ISAROB 2020 in Japan.",
        "Defended my Master's thesis on 'Recovery of Graph Signals and Low Rank Recovery using Graph Signal Processing'.",
        "Represented Meghnad Saha Hall at Table Tennis General Championship."
      ],
      coursework: []
    }
  ],
  
  experience: [
    {
      title: "Graduate Researcher",
      company: "LASS Lab, UMass Amherst",
      year: "Sep 2023 - Present",
      description: "Developing a distributed system for real-time anomaly detection in cloud-native applications using eBPF and machine learning.",
      technologies: ["Go", "eBPF", "Kubernetes", "Prometheus", "Grafana", "Python", "PyTorch"],
      logo: "/data/experience/lass/images/lass.jpg"
    },
    {
      title: "Software Engineer",
      company: "Honeywell",
      year: "Jul 2022 - Jul 2023",
      description: "Designed and implemented a scalable microservices architecture for an industrial IoT platform, improving data processing efficiency by 30%.",
      technologies: ["Java", "Spring Boot", "Kafka", "PostgreSQL", "AWS", "Docker", "Kubernetes"],
      logo: "/data/experience/software-engineer-honeywell/images/honeywell.jpg"
    },
    {
      title: "Software Engineering Intern",
      company: "Honeywell",
      year: "May 2021 - Jul 2022",
      description: "Developed a real-time data ingestion pipeline using Apache Kafka and Spark, processing over 1TB of sensor data daily.",
      technologies: ["Python", "Spark", "Kafka", "Azure", "SQL"],
      logo: "/data/experience/software-intern-honeywell/images/honeywell.jpg"
    },
    {
      title: "Research Intern",
      company: "Swarm Robotics Lab, IIT Kharagpur",
      year: "May 2020 - Aug 2020",
      description: "Implemented a distributed consensus algorithm for swarm robots, achieving 95% fault tolerance in simulated environments.",
      technologies: ["C++", "ROS", "Gazebo", "Python"],
      logo: "/data/experience/swarm-robotics/images/swarm.png"
    }
  ],
  
  projects: [
    {
      title: "Distributed Stock Trading Platform",
      description: "A high-frequency stock trading platform with real-time data processing, order matching, and portfolio management.",
      features: [
        "Real-time market data streaming",
        "Low-latency order execution",
        "Scalable microservices architecture",
        "User portfolio management",
        "Historical data analysis"
      ],
      technologies: ["Go", "Kafka", "gRPC", "PostgreSQL", "React", "Docker", "Kubernetes"],
      github: "https://github.com/ayushagupta/distributed-stock-trading",
      live: "https://ayushagupta.github.io/distributed-stock-trading",
      images: [
        "/data/projects/distributed-stock-trading/images/stock-trading.png"
      ]
    },
    {
      title: "Knowledge Graph RAG System",
      description: "A Retrieval-Augmented Generation (RAG) system leveraging knowledge graphs for enhanced context and accuracy in LLM responses.",
      features: [
        "Knowledge graph construction from unstructured text",
        "Graph-based retrieval for relevant context",
        "LLM integration for natural language generation",
        "Scalable data ingestion pipeline",
        "Interactive UI for querying"
      ],
      technologies: ["Python", "Neo4j", "LangChain", "OpenAI API", "FastAPI", "React"],
      github: "https://github.com/ayushagupta/kg-rag",
      live: "https://ayushagupta.github.io/kg-rag",
      images: [
        "/data/projects/kg-rag/images/kgrag.png"
      ]
    },
    {
      title: "Speech-to-Summary AI",
      description: "An AI-powered application that transcribes audio and generates concise summaries using advanced NLP models.",
      features: [
        "Accurate speech-to-text transcription",
        "Abstractive and extractive summarization",
        "Support for multiple audio formats",
        "User-friendly web interface",
        "API for integration"
      ],
      technologies: ["Python", "Flask", "Whisper API", "Hugging Face Transformers", "React"],
      github: "https://github.com/ayushagupta/speech-to-summary",
      live: "https://ayushagupta.github.io/speech-to-summary",
      images: [
        "/data/projects/speech-to-summary/images/speech-to-summary.png"
      ]
    }
  ],
  
  blogs: {
    title: "Blog",
    subtitle: "Thoughts and Insights",
    posts: [
      {
        title: "Building Scalable React Applications",
        slug: "building-scalable-react",
        date: "2024-01-15",
        category: "Software Engineering",
        excerpt: "Learn how to build React applications that can scale with your team and user base.",
        featured: true
      }
    ],
    ctaText: "Want to Read More?",
    ctaDescription: "I regularly write about software development, technology trends, and my learning journey.",
    ctaButtonText: "View All Posts",
    ctaButtonLink: "#"
  },
  
  contact: {
    title: "Get In Touch",
    subtitle: "Let's Connect",
    description: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.",
    email: "ayushagupta4@gmail.com",
    phone: "+1 (413) 472-8905",
    location: "Amherst, MA",
    github: "https://github.com/ayushagupta",
    linkedin: "https://linkedin.com/in/ayush-a-gupta"
  }
};
