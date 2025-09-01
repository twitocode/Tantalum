---
tags:
  - course
course: <% tp.system.prompt("Course Code (e.g., MATH201 or CS220)") %>
course_name: <% tp.system.prompt("Course Name") %>
semester: <% tp.system.prompt("Semester (e.g., Fall 2025)") %>
professor: <% tp.system.prompt("Professor Name") %>
---

# <% tp.frontmatter.course_code %> – <% tp.frontmatter.course_name %>

## Course Information
- **Professor:** <% tp.frontmatter.professor %>  
- **Semester:** <% tp.frontmatter.semester %>  
- **Schedule:** <% tp.system.prompt("Class schedule (e.g., Mon/Wed 2–3:30 PM)") %>  
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
```dataview
TABLE date AS "Date", topic AS "Topic"
FROM "Lectures/<% tp.frontmatter.course_code %>"
SORT date ASC
