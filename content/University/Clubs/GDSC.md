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
Recently I worked on my own search engine from scratch called Sift which is a concurrent web crawler,  indexer and ranker. I was having a problem with my crawlers getting clogged up by a small number of hosts with large numbers of URLs.I researched possible solutions and learned how to implement a heap data structure. I rewrote the frontier using a global host map, ready queue, and cooldown min-heap to make scheduling more reliable and efficient. I then added metrics to identify DNS failures as a major bottleneck and added a negative DNS cache to prevent repeated failed lookups. These changes reduced a 20k URL crawl from 7 minutes to 2 minutes.

**This sub-team requires 2-4 hours of weekly commitment. How do you plan on managing your personal schedule with this extra-curricular? (400 character limit)**
My classes are primarily concentrated in the afternoon, leaving my mornings, evenings, and weekends flexible. I plan to set aside a consistent 2-4 hour block each week for the team and schedule my coursework around it. Since I currently have no other major extracurricular commitments, I can dedicate my time to the team and readjust my schedule when needed.


**Tell us about any experience that could help you contribute to Sentinel. This could be a project, internship, course, research experience, hackathon, or something you learned independently. What did you personally work on? (700 character limit)**

==I built Sift, a search engine from scratch in Go with a concurrent crawler, custom inverted index, memory-mapped postings, and BM25 ranking. This hands-on experience with tokenization, ranking algorithms, and indexing directly translates to Sentinel’s hybrid keyword/semantic RAG and manifest parsing. At DeltaHacks, I built the Python/FastAPI backend for Waypoint, developing agent-based simulations that modeled behavior and coordinated state. Combined with Serene (ASP.NET Core/PostgreSQL with AI tooling), I have strong experience designing robust data pipelines, agent workflows, and backend architectures, ready to contribute to Sentinel’s specialized review agents and MCP tools.==

**What interests you about Sentinel, and what would you personally like to learn or build by working on the project? (500 character limit)**
Sentinel interests me because of its AI/ML, backend development and cloud computing areas of focus. I have yet to work on a large scale project with more than 3 other members that required this many technology fields to be used. I have been using LangChain and LangGraph to make a git diff viewer and I found it really cool how multiple models could... In my free time I watch the youtube LowLevel who speaks about security risks with AI in modern systems; such as escaping sandboxes (huggingface and openai), promp injection

Sentinel interests me because it combines AI/ML, backend development, cloud computing, and security. I have been using LangChain and LangGraph to build a Git diff reviewer, and I want to learn how to apply similar agentic systems to a larger production project. I’m also interested in AI security, particularly prompt injection and sandbox escapes, which I’ve been learning about independently. I’d like to contribute to Sentinel while developing stronger security and cloud skills.

**Tell us about any experience that could help you contribute to Sentinel. This could be a project, internship, course, research experience, hackathon, or something you learned independently. What did you personally work on? (700 character limit)**

I built Sift, a search engine from scratch in Go with a concurrent crawler, an inverted index, memory-mapped postings, and performance metrics tracking. This hands-on experience with tokenization, ranking algorithms, and indexing directly translates to Sentinel’s.... At DeltaHacks, I built the Python/FastAPI backend for my project Waypoint in which I deployed it with Docker to Google Cloud Run. I helped make agent-based simulations that modelled behaviour and coordinated state. Combined with my other project Serene (ASP.NET Core/PostgreSQL with vector searching), I have experience designing simple data pipelines, agent workflows, and backend architectures.

**Imagine Sentinel notices an unusual change in a pull request. For example, a new dependency was added or part of the deployment process was changed. You don't immediately know whether the change is dangerous. How would you approach figuring out whether it is safe? Walk us through your thought process. (700 character limit)**

I would first identify what changed and check new dependencies against vulnerability databases and their package history. I'd then have an agent analyze the pull request for any security-sensitive bad practices such as SQL injection. If tests are missing, then it should look through the PR description and codebase for how the project should work, as well as ask the user for clarification on what the intended behaviour should be; creates tests if necessary. For deployment changes, Sentinel should check cloud permission and ensure that they are being honoured within the code. I’d combine these findings to determine whether the change is safe or needs human review

**AI agents can make mistakes or confidently produce incorrect information. If Sentinel flags a pull request as a security risk, what information would you want the system to show before you trusted its recommendation? (500 character limit)**

**Sentinel will initially focus on dependency, CI/CD, and release security. What is one feature, security problem, or direction you think would be interesting for the project to explore later? Why? (400 character limit)**

	One thing that I noticed when reading the readme is that Sentinel does not keep track of any security regressions. From my understand