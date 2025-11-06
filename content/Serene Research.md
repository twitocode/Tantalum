# What do people struggle with?
- motivation
- discipline
- anxiety
	- academic pressure
	- social life
- depression
	- isolation
	- burnout
- sleep
	- overworking
	- time management
	- too much phone use
- stress
	- deadlines
	- exams
	- finances
- Perfectionism and Imposter Syndrome
- Relationships
	- Loneliness
- Drugs and Alcohol


# Features to tackle these problems
- A animal to take care of (home screen)
- reminder system (reminder to brush your teeth) using push notifications
- Daily mood checkins
- Daily affirmations
- journalling
- mood trend and stress logging
- finding therapists based on user location (google maps?)
	- campus mental health help centres (like talkspot)
- self-care streak
- 


From Gemini Report
Depression, anxiety have decreased a bit 
suicide has also decreased a bit
loneliness has decreased a bit but it is still too high
some students have eating disorders and substance abuse disorders

"**flourishing**"—a psychological state of high well-being defined by self-esteem, purpose, and optimism—dropped to 36% in 2025 after reaching 38% in 2024

the most pressing issues
1. academic and general stress
	1. burnout
2. social isolation and loneliness
	1. 79% of adults aged 18-24 report feeling lonely, a rate far higher than any other age group.
3. social media
	1. FOMO

The "Paradox of Flourishing"  demands a "Dual-Track" product strategy. A single-focus app (e.g., only mindfulness, or only therapy) will fail to capture the total market.   

- **Track 1: The Reactive Toolkit (For the _Floundering_):** This track is for students experiencing acute distress. It provides immediate, in-the-moment relief for panic, severe anxiety, and depressive spirals. The goal is symptom reduction and crisis mitigation.  
	- Cognitive Behavioural Therapy (CBT)
		- Psychoeducation
		- Behavourial activiation (activity scheduling)
		- cognitive restructuring (thought records)
		- problem solving - **might omit this**
		- relaxation techniques
		- exposure techniques (for anxiety)
	- Grounding Techniques (to let yourself know that you are here in the moment)
		- 5-4-3-2-1 method
			- 5 things you can see
			- 4 things you can touch
			- 3 things you can hear
			- 2 things you can smell
			- 1 thing you can taste
- **Track 2: The Proactive Toolkit (For the _Languishing_):** This track is for the non-flourishing majority. It provides tools to build long-term skills, resilience, and well-being. The goal is not just to get _well_, but to _stay well_ and ultimately _flourish_.
	- Mindfulness - mindful breathing, paying attention to sensory details
	- Gratitude journalling
	- Strengths identification - *maybe add a feature to ask ai to help you with this because i know i struggle with this*
	- academics
		- smart goals
		- focus on 1 task
		- breaks/rest periods notifications
		- 

Translating clinical interventions to app features

| Student Problem                 | Evidence-Based Intervention   | App Feature Concept           | Guiding Design Principles / Sources                                                                                                                                        |
| :------------------------------ | :---------------------------- | :---------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Acute Panic / Overwhelm**     | Grounding Techniques          | **"The Anchor" Panic Button** | A one-touch button modeled on 'Rootd's "Rootr" 34 that offers an immediate choice: "Distraction" (mental game) or "Technique" (guided 5-4-3-2-1 exercise).20               |
| **Anxiety / Negative Thoughts** | Cognitive Restructuring (CBT) | **"Thought Reframer" Diary**  | A guided journal based on a "Cognitive Diary".14 Prompts user for Situation \-\> Emotion \-\> Automatic Thought \-\> Challenge \-\> Balanced Thought \-\> Re-rate Emotion. |
| **Depression / Low Mood**       | Behavioral Activation (CBT)   | **"Activity Scheduler"**      | A simple in-app calendar that prompts users to schedule and check off "pleasurable activities" and "tasks".16                                                              |
| **Academic Stress / Burnout**   | Time Management & Flourishing | **"The Proactive Planner"**   | Integrates time management (SMART goals, prioritization) 30 with a "Gratitude Journal" prompt library.26                                                                   |
| **Loneliness / Isolation**      | Social Support & Interaction  | **"The 'Nod' Challenge"**     | Based on the 'Nod' app.42 Proactively delivers "social challenges" (e.g., "Text a classmate") paired with "reflections" (cognitive reframing) to build connection.42       |

**Feature 1: "Thought Reframer" (Cognitive Restructuring Diary):** This is the app's cornerstone CBT tool. It's a guided journal based on the "Cognitive Diary" 35 and "Thought Diary" 14 models. When a user feels distressed, they are guided through a step-by-step evaluation 35:

1. **Situation:** What happened?
2. **Emotion:** What did you feel? (Rate 1-10)
3. **Automatic Thought:** What was the "hot" thought (e.g., "I'm a failure")?
4. **Challenge:** The app presents prompts to challenge "Warped Thoughts".14 (e.g., "What is the evidence _against_ this thought?").
5. **Balanced Thought:** What is a more realistic, balanced perspective?
6. **Re-rate:** Re-rate the initial emotion.

### **3.2 The "In-Case-of-Emergency" Module (The Reactive Feature)**

This module is the core of Track 1, designed for acute panic. It must be accessible from the app's home screen as a single, large button. The design is modeled on the "Rootr" feature from the 'Rootd' app.34

This "Anchor" button, when pressed, provides an immediate, simple choice 34:

1. **"I need a Distraction."** (Mental Grounding)
2. **"I need a Technique."** (Physical/Sensory Grounding)

If the user chooses **"Distraction,"** the app launches a simple mental grounding game. This is _not_ a "fun" game but a clinical tool. Examples include "Name 5 states that start with 'M'" or "Categorize these items".19 This forces cognitive effort away from the source of panic.

If the user chooses **"Technique,"** the app launches a guided audio exercise for the **5-4-3-2-1 Technique**.20 A calm voice walks the user through the process ("First, look around you. Find five things you can see..."). This engages the senses, activates the parasympathetic nervous system, and "anchors" the user to the present moment, breaking the 'fight-or-flight' feedback loop.18

**Feature 1: "The Nod" (Proactive Social Challenges):** This feature is based on the 'Nod' app, which was designed specifically for student loneliness.42 The app proactively delivers "social challenges"—small, concrete activities to build connections.42 Examples: "Send a 'thank you' text to someone from a class," or "Ask a classmate what they thought of the lecture." Crucially, this is paired with a **"Reflection"** feature, which provides a brief cognitive reframing exercise to normalize the anxiety of reaching out.42

- **Feature 1: "Mood Tracker":** This is a standard feature 55 that allows users to log moods and identify patterns and triggers.56 However, analysis shows users often _avoid_ logging negative moods.59 A strategic design must solve this:
    - **Solution 1:** Make logging negative moods _productive_. When a user logs "Sad," the app should immediately respond: "Sorry to hear that. Would you like to try a 2-minute 'Thought Reframer' or a 'Mindful Breathing' exercise?" This connects the _log_ (problem) to a _tool_ (solution).
    - **Solution 2:** Provide _interpretive_ feedback. Users want recommendations based on their data.59 The app should provide visualizations (graphs, calendars) and simple interpretations: "We notice your mood tends to dip on Sunday evenings. This is common. Here is a 'Proactive Planner' tool to help you organize your week and reduce stress."
- **Feature 2: "Journal and Prompt Library":** This is a private, encrypted space for free-writing.60 It will be paired with a searchable library of guided journaling prompts, sourced from clinical research, that users can filter by goal:
    - **"Ease Anxiety"** 61
    - **"Manage Depression"** 63
    - **"Build Gratitude"** 25
    - **"Self-Discovery"** 62

Adding a content library for self care

Strategic Recommendation: The "Companion" Model:  
The mechanic must be inverted. The pet should not be a burden to be cared for, but a mirror of the user's self-care.

- **Design:** The app features a simple, non-judgmental "Companion" (a plant, animal, or abstract shape).
- **Mechanic:** The Companion _flourishes_ when the user engages in self-care (e.g., completes a "Thought Reframer," does a 5-minute meditation). It _never_ gets sick, dies, or looks sad. If the user is inactive, the Companion simply waits, a calm, stable presence.
- **Result:** This design captures the _investment_ and _companion_ benefits 97 while completely eliminating the _ethical risks_ of pressure, shame, and negative reinforcement.98

**Table 3: Adapting Gamification Mechanics for Ethical Mental Health Engagement**

|Engagement Mechanic|"Dark Pattern" (Gaming / Duolingo)|"Ethical Adaptation" (Student Wellness App)|Rationale / Guiding Principles|
|:--|:--|:--|:--|
|**Streaks**|Punishing; resets to zero on missed day, creates anxiety.|**"Shame-Free Streak"**; focuses on momentum. Allows free "pauses" for exams/weekends.|.103 Avoids punishing users for being busy or unwell.|
|**Rewards**|Extrinsic (XP, points, gems) to create a "slot machine" effect.87|**Intrinsic**; a "Companion" pet flourishes, or a progress bar for a _real_ goal (e.g., "social anxiety").|.98 The reward is the user's own well-being, not a digital token.|
|**Social**|Public leaderboards that drive social comparison and status-seeking.89|**Private, Moderated Peer Support**. "Kudos" or "support" buttons, not competition.|.33 Fosters community and belonging, not comparison and anxiety.|
|**Loss Aversion**|**"Streak Freeze"** 91; monetizes the user's fear of losing their progress.|**None.** The "forgiving streak" has no loss to avert. Pauses are free and encouraged.|.100 Gamification must _support_ the well-being goal, not _distort_ it for profit.|

### **5.4 Recommendation: A 4-Pillar Engagement Strategy**

The app's engagement strategy will be built on genuine value, not addictive loops.

1. **Purpose:** The app's goals are 100% aligned with the user's health goals.106
2. **Progress:** Show _meaningful_ progress. Not "You earned 50 XP," but "You've successfully reframed 10 negative thoughts this week," or "Your average anxiety rating for 'social events' has dropped 20%."
3. **Personalization:** The app is adaptive. It learns which tools work for the user (e.g., "You seem to like 'Mindful Walking'. Want to try that?").
4. **Privacy:** All data, especially journal entries and mood logs, is private, encrypted, and never shared.107 This is the foundation of the trust required for a mental health tool.

___