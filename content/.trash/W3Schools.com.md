---
title: "W3Schools.com"
source: "https://www.w3schools.com/sql/sql_top.asp"
author:
published:
created: 2025-03-09
description: "Well organized and easy to understand Web building tutorials with lots of examples of how to use HTML, CSS, JavaScript, SQL, Python, PHP, Bootstrap, Java, XML and more."
tags:
  - "clippings"
---
## SQL TOP, LIMIT, FETCH FIRST or ROWNUM Clause

---

## The SQL SELECT TOP Clause

The `SELECT TOP` clause is used to specify the number of records to return.

The `SELECT TOP` clause is useful on large tables with thousands of records. Returning a large number of records can impact performance.

**Note:** Not all database systems support the ` SELECT TOP` clause. MySQL supports the `LIMIT` clause to select a limited number of records, while Oracle uses ` FETCH FIRST *n* ROWS ONLY` and `ROWNUM`.

**SQL Server / MS Access Syntax:**

`  SELECT TOP *number*|*percent* *column_name(s)*   FROM *table_name   *WHERE *condition*;  `

**MySQL Syntax:**

`  SELECT *column_name(s)*   FROM *table_name   *WHERE *condition*   LIMIT *number*;  `

**Oracle 12 Syntax:**

`  SELECT *column_name(s)*   FROM *table_name   *ORDER BY *   column_name(s)*     FETCH FIRST *number* ROWS ONLY;  `

**Older Oracle Syntax:**

`  SELECT *column_name(s)*   FROM *table_name*   WHERE ROWNUM <= *number*;  `

**Older Oracle Syntax (with ORDER BY):**

`   SELECT *   FROM (SELECT *column_name(s) *FROM *table_name*   ORDER BY *column_name(s)*)   WHERE ROWNUM <= *number*;  `

---

## Demo Database

Below is a selection from the [**Customers**](https://www.w3schools.com/sql/trysql.asp?filename=trysql_customers) table used in the examples:

| CustomerID | CustomerName | ContactName | Address | City | PostalCode | Country |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Alfreds Futterkiste | Maria Anders | Obere Str. 57 | Berlin | 12209 | Germany |
| 2 | Ana Trujillo Emparedados y helados | Ana Trujillo | Avda. de la Constitución 2222 | México D.F. | 05021 | Mexico |
| 3 | Antonio Moreno Taquería | Antonio Moreno | Mataderos 2312 | México D.F. | 05023 | Mexico |
| 4 | Around the Horn | Thomas Hardy | 120 Hanover Sq. | London | WA1 1DP | UK |
| 5 | Berglunds snabbköp | Christina Berglund | Berguvsvägen 8 | Luleå | S-958 22 | Sweden |

---

---

## LIMIT

The following SQL statement shows the equivalent example for MySQL:

### Example

Select the first 3 records of the Customers table:

SELECT \* FROM Customers  
LIMIT 3;

[Try it Yourself »](https://www.w3schools.com/sql/trymysql.asp?filename=trysql_select_limit)

---

## FETCH FIRST

The following SQL statement shows the equivalent example for Oracle:

### Example

Select the first 3 records of the Customers table:

SELECT \* FROM Customers  
FETCH FIRST 3 ROWS ONLY;

---

## SQL TOP PERCENT Example

The following SQL statement selects the first 50% of the records from the "Customers" table (for SQL Server/MS Access):

The following SQL statement shows the equivalent example for Oracle:

### Example

SELECT \* FROM Customers  
FETCH FIRST 50 PERCENT ROWS ONLY;

---

## ADD a WHERE CLAUSE

The following SQL statement selects the first three records from the "Customers" table, where the country is "Germany" (for SQL Server/MS Access):

The following SQL statement shows the equivalent example for MySQL:

The following SQL statement shows the equivalent example for Oracle:

### Example

SELECT \* FROM Customers  
WHERE Country='Germany'  
FETCH FIRST 3 ROWS ONLY;

---

## ADD the ORDER BY Keyword

Add the `ORDER BY` keyword when you want to sort the result, and return the first 3 records of the sorted result.

For SQL Server and MS Access:

### Example

Sort the result reverse alphabetically by CustomerName, and return the first 3 records:

SELECT TOP 3 \* FROM Customers  
ORDER BY CustomerName DESC;

[Try it Yourself »](https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_top_orderby)

The following SQL statement shows the equivalent example for MySQL:

The following SQL statement shows the equivalent example for Oracle:

### Example

SELECT \* FROM Customers  
ORDER BY CustomerName DESC  
FETCH FIRST 3 ROWS ONLY;

---

## Exercise?**What is this?**  
Test your skills by answering a few questions about the topics of this page

What would the following query do in SQL Server?  
`SELECT TOP 5 * FROM Customers;`

  

---

  

[★ +1](https://profile.w3schools.com/log-in?redirect_url=https%3A%2F%2Fwww.w3schools.com%2Fsql%2Fsql_top.asp "Your W3Schools Profile")

Track your progress - it's free!

   [![Get Certified](https://www.w3schools.com/images/img_academy_up_sql_300.png)](https://www.w3schools.com/academy/index.php)