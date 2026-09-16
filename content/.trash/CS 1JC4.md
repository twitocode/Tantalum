---
tags:
  - course
class: <% tp.file.folder() %>
course_name:
year:
semester:
professor:
---
<%* 
let courseCode = await tp.system.prompt("Course Code (e.g., CS101)");
let courseName = await tp.system.prompt("Course Name");
let semester = await tp.system.prompt("Semester");
let year = await tp.system.prompt("Year");
let prof = await tp.system.prompt("Professor");

tR += `---
tags: course
class: ${courseCode}
course_name: ${courseName}
year: ${year}
semester: ${semester}
professor: ${prof}
---\n`;
%>

## Course Information
- **Professor:** <%= professor %>  
- **Semester:** <%= semester %>  
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
[[University/Year <%= year %>/<% tp.file.folder() %>/Lectures]]