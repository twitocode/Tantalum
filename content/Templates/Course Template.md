---
tags:
  - course
class: <% tp.file.folder() %>
course_name: <% tp.system.prompt("Course Name") %>
year: <% tp.system.prompt("Year (e.g., 1)") %>
semester: ' <% tp.system.prompt("Semester (e.g., Fall 2025)") %>'
professor: <% tp.system.prompt("Professor Name") %>
---
## Course Information
- **Professor:** <% tp.frontmatter.professor %>  
- **Semester:** <% tp.frontmatter.semester %>  
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
[[University/Year <% tp.frontmatter.year %>/<% tp.file.folder() %>/Lectures]]
```dataview
TABLE date AS "Date", topic AS "Topic"
FROM "Lectures/<% tp.frontmatter.course_code %>"
SORT date ASC
