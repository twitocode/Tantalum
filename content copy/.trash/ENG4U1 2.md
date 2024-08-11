---
grade: 11
semester: 1
---

#Course

**Teacher**: 
**Time**:
**Room**:
**Grade**: 
**Email**: @hwcdsb.ca
**Created At**: Aug 04, 2023 - 22:01
# ENG4U1

#### Textbooks

#### Notes
```dataview
TABLE 
FROM #ClassNote 
WHERE file.name != "Class Note" AND grade = 11 AND course = this.file.name
```
#### Assignments
```dataview
TABLE 
FROM #Assignment 
WHERE file.name != "Assignment" AND grade = 11 AND course = this.file.name
```
