---
title: "Speech-to-Summary Application"
description: "A full-stack application that records your voice, transcribes it in real time using the Web Speech API, and streams a summary using an LLM running locally though Ollama."
technologies: ["Python", "FastAPI", "React", "Ollama", "Docker"]
github: "https://github.com/ayushagupta/speech-to-summary"
mainImage: "speech-to-summary.png"
images: ["speech-to-summary.png"]
features:
  - "Real-time voice transcription in browser using Web Speech API."
  - "Streaming summaries from locally hosted Llama 3.2 model via Ollama."
  - "Few-shot prompting for context-aware summaries."
  - "Dockerized full-stack deployment for easy setup."
  - "Configurable Ollama server URL for local or remote hosting."
technicalChallenges:
  - "Capturing and processing live audio efficiently."
  - "Synchronizing real-time data between frontend and backend."
  - "Coordinating multiple services in Docker containers."
---