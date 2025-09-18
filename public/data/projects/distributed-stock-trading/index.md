---
title: "Distributed Stock Trading Platform"
description: "A distributed stock trading platform in Flask with a leader-based order service that recovers from crashes and keeps data consistent. The frontend uses a thread-safe cache to make stock lookups fast and reliable across multiple replicas."
technologies: ["Python", "Flask", "Docker", "AWS"]
github: "https://github.com/ayushagupta/distributed-stock-trading"
mainImage: "stock-trading.png"
images: ["stock-trading.png"]
features:
  - "Leader-based distributed order service with replication, crash recovery, and log synchronization."
  - "Frontend proxy with thread-safe LRU cache and server-push invalidation for low-latency stock lookups."
  - "Centralized catalog service with CSV persistence and safe concurrent access."
  - "RESTful APIs supporting buy/sell orders and order queries with consistent replication."
technicalChallenges:
  - "Ensuring data consistency and cache coherence across multiple replicas."
  - "Implementing leader election, failover, and crash recovery."
  - "Coordinating multiple services while maintaining low latency and high availability."
---