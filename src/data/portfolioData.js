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
      company: "Laboratory for Advanced System Software (LASS)",
      period: "July 2025 - Present",
      location: "University of Massachusetts Amherst",
      achievements: [
        "Implemented a pipeline to partition a pretrained neural network into multiple segments and apply quantization for efficient execution on TPUs.",
        "Benchmarked model inference performance by comparing quantized TPU execution with unquantized CPU runs on the ImageNet dataset."
      ],
      technologies: ["Python", "TensorFlow", "TPU", "Neural Networks", "Quantization"],
      logo: "/data/experience/lass/images/lass.jpg"
    },
    {
      title: "Software Engineer - 2",
      company: "Honeywell",
      period: "July 2022 - August 2024",
      location: "Bengaluru, Karnataka, India",
      achievements: [
        "Engineered a role-based user management system with .NET & Entity Framework, supporting 1,000+ concurrent users by designing a scalable database and implementing RESTful APIs for user provisioning and role management.",
        "Built a serverless, event-driven email notification platform using Azure Functions, PostgreSQL triggers, and SendGrid, reducing latency by 25% with batch processing and retry logic.",
        "Designed a secure, cardless building access system using a C# backend that integrated mobile app authentication with HID APIs, and automated per-tenant deployment using Azure Logic Apps.",
        "Developed an async FastAPI platform to trigger Databricks jobs and periodically cache job status using Redis.",
        "Resolved 50+ security and code quality issues in legacy codebases using Coverity and BlackDuck, increased SonarQube unit test coverage to 95% with NUnit and validated API performance using JMeter.",
        "Enhanced CI/CD pipelines using Bamboo for automation, Octopus for deployments, & Jira for sprint tracking."
      ],
      technologies: [".NET", "Entity Framework", "Azure Functions", "PostgreSQL", "SendGrid", "FastAPI", "Databricks", "Redis"],
      logo: "/data/experience/software-engineer-honeywell/images/honeywell.jpg"
    },
    {
      title: "Software Engineering Intern",
      company: "Honeywell",
      period: "May 2021 - Jul 2022",
      achievements: [
        "Developed software solutions and gained experience in enterprise software development.",
        "Worked on various projects using C#, Azure, and SQL technologies."
      ],
      technologies: ["C#", "Azure", "SQL", "Bamboo", "Jira"],
      logo: "/data/experience/software-intern-honeywell/images/honeywell.jpg"
    },
    {
      title: "Research Intern",
      company: "Swarm Robotics Lab, IIT Kharagpur",
      period: "May 2020 - Aug 2020",
      achievements: [
        "Conducted research in swarm robotics and distributed systems.",
        "Worked with C++, ROS, Gazebo, and Python for robotics applications."
      ],
      technologies: ["C++", "ROS", "Gazebo", "Python"],
      logo: "/data/experience/swarm-robotics/images/swarm.png"
    }
  ],
  
  projects: [
    {
      title: "Distributed Stock Trading Platform",
      description: "A distributed stock trading platform in Flask with a leader-based order service that recovers from crashes and keeps data consistent. The frontend uses a thread-safe cache to make stock lookups fast and reliable across multiple replicas.",
      features: [
        "Leader-based distributed order service with replication, crash recovery, and log synchronization.",
        "Frontend proxy with thread-safe LRU cache and server-push invalidation for low-latency stock lookups.",
        "Centralized catalog service with CSV persistence and safe concurrent access.",
        "RESTful APIs supporting buy/sell orders and order queries with consistent replication."
      ],
      technologies: ["Python", "Flask", "Docker", "AWS"],
      github: "https://github.com/ayushagupta/distributed-stock-trading",
      live: "https://ayushagupta.github.io/distributed-stock-trading",
      images: [
        "/data/projects/distributed-stock-trading/images/stock-trading.png"
      ]
    },
    {
      title: "Knowledge Graph RAG for Biomedical QA",
      description: "A biomedical QA system where user queries are matched to known biomedical terms, and the relevant part of the SPOKE knowledge graph is extracted and pruned. This subgraph is turned into natural language and fed to an LLM, which gives accurate, context-aware answers.",
      features: [
        "Uses vector embeddings to identify biomedical entities in user queries.",
        "Extracts and prunes subgraphs from the SPOKE knowledge graph for relevant context.",
        "Converts subgraphs into natural language for LLM consumption.",
        "Provides context-aware answers to biomedical questions using LLMs."
      ],
      technologies: ["Python", "OpenAI", "Chroma", "LangChain"],
      github: "https://github.com/ayushagupta/KG-based-RAG-for-Question-Answering",
      live: "https://ayushagupta.github.io/kg-rag",
      images: [
        "/data/projects/kg-rag/images/kgrag.png"
      ]
    },
    {
      title: "Speech-to-Summary Application",
      description: "A full-stack application that records your voice, transcribes it in real time using the Web Speech API, and streams a summary using an LLM running locally though Ollama.",
      features: [
        "Real-time voice transcription in browser using Web Speech API.",
        "Streaming summaries from locally hosted Llama 3.2 model via Ollama.",
        "Few-shot prompting for context-aware summaries.",
        "Dockerized full-stack deployment for easy setup."
      ],
      technologies: ["Python", "FastAPI", "React", "Ollama", "Docker"],
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
    posts: [],
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
