# Why
Students around McMaster struggle with finding the perfect schedule for them. Especially for students who haven't arrived yet. As of right now, there are no planners that take into account walking distance and whether a class is "worth their time" based on who the professor is. They also do not take into account what the student has going on in their lives; jobs and such, and they don't take into account what the student wants to do in the future

# Solution
PathWeave asks the student some questions such as what they want to do in the future, if the student has a job, current program and year, where they live (or general area haven't decided) and then generates multiple program schedules. These schedules are ranked based off of walking distance in-between classes, rate my professor scores to see if the class is worthwhile to go to. live data class data will be webscrapped. 
# Stack
## Frontend
- NextJS
- react-flow
- tailwindcss
## Backend
- python
- Postgres - neon
- supabase auth
- groq inference - gpt 70b oss
- playwright + beautifulsoup for webscraping
- reddit api to search up professors
- [ratemyprofessors-client · PyPI](https://pypi.org/project/ratemyprofessors-client/) 