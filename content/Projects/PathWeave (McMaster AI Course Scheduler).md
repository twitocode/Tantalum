# Why
Students around McMaster struggle with finding the perfect schedule for them. Especially for students who haven't arrived yet. As of right now, there are no planners that take into account walking distance and whether a class is "worth their time" based on who the professor is. They also do not take into account what the student has going on in their lives; jobs and such, and they don't take into account what the student wants to do in the future

# Solution
PathWeave asks the student some questions such as what they want to do in the future, if the student has a job, current program and year, where they live (or general area haven't decided) and then generates multiple program schedules. These schedules are ranked based off of walking distance in-between classes, rate my professor scores to see if the class is worthwhile to go to. live data class data will be webscrapped. 

# The main idea
- Users can create their account and follow the onboarding process.
	- Onboarding includes, where you live on campus, choosing your program, saying what your future goals, if you have a job, then your job schedule in text (ai will interpret), and if the student cares about a good professor and if the student's learning preference (at home, in class, etc)
- The users then have a list of courses that they can choose from depending on their program. The user can also add other programs (electives) if allowed in their program. 
- The users can drag and drop (or click) programs onto their course list (will name it later, unless there is a better name available). 
- The users will then be able to see the lectures/labs/tutorials for their course, who teaches it, ratemyprofessor rating and difficulty, (and in the future, user sentiment).
- Then the user can see their schedule on the calendar or more importantly, users can see the routes that they would have to take each day based on their schedule, and whether for example a class is worth their time
## Possible features to add in the future
- Winter routes (the least amount of snow based on weather data or where is often cleaned up by snow crews)

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
- playwright + beautifulsoup for webscraping mytimetable and academic calendar
- reddit api to search up professors
- [ratemyprofessors-client · PyPI](https://pypi.org/project/ratemyprofessors-client/) 

# User Flow
1. Go to landing page
2. Go to login page (google oauth only)
3. redirect to main page (not a dashboard - simple ui)
4. ask the user some onboarding questions
	- Their plan for the future if they have one
	- where they live - *probably need privacy policy*
	- current year and program
	- if they have a job then what times?
5. POST to server


