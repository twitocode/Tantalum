---
tags:
  - course
class: CS 1JC3
course_name: sdf
year: sdf
semester: ' ssdf'
professor: sdf
---
## Course Information
- **Professor:** <% await tp.system.prompt("Professor Name") %>  
- **Semester:**  <% await tp.system.prompt("Semester (e.g., Fall 2025)") %>  
- **Office Hours:**  

## Overview
- Course Description:  
- Learning Outcomes:  

## Resources
- Syllabus:  
- Textbook(s):  
- Online Resources:  
- GitHub/Class Repo:  

## Lectures
[[University/Year <% await tp.system.prompt("Year (e.g., 1)") %>/CS 1JC3/Lectures]]
```dataview
TABLE date AS "Date", topic AS "Topic"
FROM "Lectures/undefined"
SORT date ASC
