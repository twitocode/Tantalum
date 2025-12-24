# What exactly is this?
A mental health/wellness platform dedicated to students in which they can checkin on how they are currently feeling in the moment. 

Features include:
- Community questions of the day
- Achievement system
	- Personal goals
	- Global goals
		- 1 million stuff this week.
- Streak system
	- The user should interact with community questions
	- Consistency promotes positive thoughts
- Panda companion that periodically interacts with the user
	- Name and pronouns can be changed
	- Maybe colour too
	- Looks at what you are typing and makes suggestions. 
		- "Are there any other ways to look at this?"
- Affirmation explorer
- Password lock system
- Resource Explorer
	- Hotlines
	- 54321 rule
	- Forest app 
	- Box breathing
- Daily Checkin
	- Steps
		1. Emotional Identification
			- if the user chooses things that are negative then the site should show more helpful tools 
		2. Single prompt that can be randomly generated
			- "What happened to trigger this?"
			- etc
		3. Physical sensations
		4. Any other thoughts that the user may have. 
	- Can be done multiple times a day
	- The user will not be able to add to a previous day *for now*
- Stats
	- Wellness Radar Chart
	- etc.
- Stanley-Brown Protocol - A "help" plan that the user makes in a calm state that can maybe popup when the user is typing something that suggests they're in distress


# Tech Stack
## Frontend
- 
## Backend
- Hono
- Better-Auth
- Neon PostgreSQL - general storage
- Drizzle
- Redis - session storage
- Gemini flash lite - ai responses