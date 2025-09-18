---
title: "Knowledge Graph RAG for Biomedical QA"
description: "A biomedical QA system where user queries are matched to known biomedical terms, and the relevant part of the SPOKE knowledge graph is extracted and pruned. This subgraph is turned into natural language and fed to an LLM, which gives accurate, context-aware answers."
technologies: ["Python", "OpenAI", "Chroma", "LangChain"]
github: "https://github.com/ayushagupta/KG-based-RAG-for-Question-Answering"
mainImage: "kgrag.jpg"
images: ["kgrag.png"]
features:
  - "Uses vector embeddings to identify biomedical entities in user queries."
  - "Extracts and prunes subgraphs from the SPOKE knowledge graph for relevant context."
  - "Converts subgraphs into natural language for LLM consumption."
  - "Provides context-aware answers to biomedical questions using LLMs."
technicalChallenges:
  - "Efficiently extracting and pruning subgraphs from a large knowledge graph."
  - "Maintaining accuracy and relevance while limiting context size for LLMs."
  - "Integrating vector store, knowledge graph, and LLM inference into a smooth pipeline."
---