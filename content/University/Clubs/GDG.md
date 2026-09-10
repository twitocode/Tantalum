## Skills & Experience Gained
- {{Skill or experience}} – {{How/where you got it}}
- {{Skill or experience}} – {{How/where you got it}}


---

## People I Met / Networked With
- **Name:** {{Person}} – {{Role}}
- **Connection:** {{Reason they’re relevant or what you talked about}}


---

## Reflection
- **What have I gained so far?**
- **Do I want to stay in this club next semester? Why/why not?**
- **Anything I want to improve or explore further?**

**Tell us about a technical project you are proud of or a difficult problem you have solved. What did you contribute, what challenges did you run into, and how did you work through them? (700 character limit)**
Recently I worked on my own search engine from scratch called Sift which is a concurrent web crawler, indexer and ranker. I was having a problem with my crawlers getting clogged up by a small number of hosts with large numbers of URLs. I researched possible solutions and learned how to implement a heap data structure. I rewrote the frontier using a global host map, ready queue, and cooldown min-heap to make scheduling more reliable and efficient. I then added metrics to identify DNS failures as a major bottleneck and added a negative DNS cache to prevent repeated failed lookups. These changes reduced a 20k URL crawl from 7 minutes to 2 minutes.

**This sub-team requires 2-4 hours of weekly commitment. How do you plan on managing your personal schedule with this extra-curricular? (400 character limit)**
My classes are primarily concentrated in the afternoon, leaving my mornings, evenings, and weekends relatively flexible. I plan to reserve a consistent 2-4 hour block each week for the team and organize my coursework around that commitment. Since I currently have no other major extracurricular commitments, I have enough flexibility to consistently contribute and adjust my schedule when needed.

**Tell us about any experience that could help you contribute to Sentinel. This could be a project, internship, course, research experience, hackathon, or something you learned independently. What did you personally work on? (700 character limit)**

==I built Sift, a search engine from scratch in Go with a concurrent crawler, custom inverted index, memory-mapped postings, and BM25 ranking. This hands-on experience with tokenization, ranking algorithms, and indexing directly translates to Sentinel’s hybrid keyword/semantic RAG and manifest parsing. At DeltaHacks, I built the Python/FastAPI backend for Waypoint, developing agent-based simulations that modelled behaviour and coordinated state. Combined with Serene (ASP.NET Core/PostgreSQL with AI tooling), I have strong experience designing robust data pipelines, agent workflows, and backend architectures, ready to contribute to Sentinel’s specialized review agents and MCP tools.==

**What interests you about Sentinel, and what would you personally like to learn or build by working on the project? (500 character limit)**
Sentinel interests me because it combines AI/ML, backend development, cloud computing, and security. I have been using LangChain and LangGraph to build a Git diff reviewer, and I want to learn how to apply agentic systems to a larger production project. I am also interested in AI security, particularly prompt injection and sandbox escapes, which I have been learning about independently. I’d like to contribute to Sentinel while developing stronger security and cloud skills.

**Tell us about any experience that could help you contribute to Sentinel. This could be a project, internship, course, research experience, hackathon, or something you learned independently. What did you personally work on? (700 character limit)**

I built Sift, a search engine from scratch in Go with a concurrent crawler, inverted index, memory-mapped postings, and performance metrics. Its tokenization, ranking, and indexing directly relate to Sentinel’s hybrid keyword/semantic retrieval. At DeltaHacks, I built the Python/FastAPI backend for Waypoint, deployed with Docker to Google Cloud Run, and helped build agent-based simulations that modeled behaviour and coordinated state. Combined with my other project, Serene’s ASP.NET Core/PostgreSQL backend and vector search, I have experience with data pipelines, agent workflows, and backend architectures.

**Imagine Sentinel notices an unusual change in a pull request. For example, a new dependency was added or part of the deployment process was changed. You don't immediately know whether the change is dangerous. How would you approach figuring out whether it is safe? Walk us through your thought process. (700 character limit)**


I would first identify exactly what changed and which security boundary it affects. For a new dependency, I’d inspect its version history, known vulnerabilities, package metadata, install scripts, and unusual changes. For CI/CD changes, I’d check permissions, triggers, third-party actions, secret exposure, and whether actions are pinned. I’d then use repository documentation and previous findings to determine whether the change violates project-specific policies. I’d then combine these findings to determine whether the change is safe or needs human review

**AI agents can make mistakes or confidently produce incorrect information. If Sentinel flags a pull request as a security risk, what information would you want the system to show before you trusted its recommendation? (500 character limit)**
I would like Sentinel to explain to me the vulnerability it found along side a confidence score. This explanation should include how the agent got to its conclusion, possible attack paths, and any assumptions it made. Ideally the agent should make the issue reproducible so that I can verify whether its correct or hallucinated. Sentinel should also explain how attackers can gain from the changes and how users will be impacted.

**Sentinel will initially focus on dependency, CI/CD, and release security. What is one feature, security problem, or direction you think would be interesting for the project to explore later? Why? (400 character limit)**

I noticed in the README that Sentinel focuses on whether the current PR introduces a security risk. I think it could also track security regressions by comparing a PR against previous versions and findings. A PR can introduce no obvious vulnerability while still weakening the project’s overall security. Detecting these changes could help maintainers catch gradual security degradation over time.
