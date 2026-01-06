# Assignment : Movie Database SQL Queries

This document contains 50 SQL queries for a movie database management system. Each query includes the question, SQL solution, and Output format.


## Query 1

**Question:** Write a SQL query to find the name and year of the movies. Return movie title, movie release year.

**SQL Query:**

```sql
SELECT 
mov_title AS movie_title, 
mov_year AS movie_release_year 
FROM 
movie; 
```

**Output:**
| Movie Title | Release Year |
|------------|--------------|
| Vertigo | 1958 |
| The Innocents | 1961 |
| Lawrence of Arabia | 1962 |
| The Deer Hunter | 1978 |
| Amadeus | 1984 |
| Blade Runner | 1982 |
| Eyes Wide Shut | 1999 |
| The Usual Suspects | 1995 |
| Chinatown | 1974 |
| Boogie Nights | 1997 |
| Annie Hall | 1977 |
| Princess Mononoke | 1997 |
| The Shawshank Redemption | 1994 |
| American Beauty | 1999 |
| Titanic | 1997 |
| Good Will Hunting | 1997 |
| Deliverance | 1972 |
| Trainspotting | 1996 |
| The Prestige | 2006 |
| Donnie Darko | 2001 |
| Slumdog Millionaire | 2008 |
| Aliens | 1986 |
| Beyond the Sea | 2004 |
| Avatar | 2009 |
| Seven Samurai | 1954 |
| Spirited Away | 2001 |
| Back to the Future | 1985 |
| Braveheart | 1995 |


---

## Query 2

**Question:** Write a SQL query to find when the movie 'American Beauty' released. Return movie release year.

**SQL Query:**

```sql
SELECT 
mov_year AS movie_release_year 
FROM
movie 
WHERE mov_title = 'American Beauty';
```

**Output:**
| mov_year |
|-------------------|
| 1999 |

---

## Query 3

**Question:** Write a SQL query to find the movie that was released in 1999. Return movie title.

**SQL Query:**

```sql
SELECT 
mov_title AS movie_title 
FROM 
movie 
WHERE mov_year = 1999;
```

**Output:**
| movie_title |
|-------------|
| Eyes Wide Shut |
| American Beauty |

---

## Query 4

**Question:** Write a SQL query to find those movies, which were released before 1998. Return movie title.

**SQL Query:**

```sql
SELECT 
mov_title AS movie_title 
FROM 
movie 
WHERE mov_year < 1998;
```

**Output:**
| movie_title |
|-------------|
| Vertigo |
| The Innocents |
| Lawrence of Arabia |
| The Deer Hunter |
| Amadeus |
| Blade Runner |
| The Usual Suspects |
| Chinatown |
| Boogie Nights |
| Annie Hall |
| Princess Mononoke |
| The Shawshank Redemption |
| Titanic |
| Good Will Hunting |
| Deliverance |
| Trainspotting |
| Aliens |
| Seven Samurai |
| Back to the Future |
| Braveheart |


---

## Query 5

**Question:** Write a SQL query to find the name of all reviewers and movies together in a single list.

**SQL Query:**

```sql
SELECT
movie_reviewer.rev_name,
movie.mov_title
FROM 
movie_reviewer JOIN movie_rating
ON movie_rating.rev_id = movie_reviewer.rev_id
JOIN movie
ON movie.mov_id = movie_rating.mov_id;
```

**Output:**
| reviewer_name | movie_title |
|---------------|-------------|
| Righty Sock | Vertigo |
| Jack Malvern | The Innocents |
| Flagrant Baronessa | Lawrence of Arabia |
| null | Blade Runner |
| Victor Woeltjen | Avatar |
| Simon Wright | The Usual Suspects |
| Neal Wruck | Chinatown |
| Paul Monks | Boogie Nights |
| Mike Salvati | Annie Hall |
| null | Princess Mononoke |
| Sasha Goldshtein | American Beauty |
| Righty Sock | Titanic |
| Josh Cates | Good Will Hunting |
| Krug Stillo | Seven Samurai |
| Scott LeBrun | Trainspotting |
| Hannah Steele | Donnie Darko |
| Vincent Cadena | Slumdog Millionaire |
| Brandt Sponseller | Aliens |
| Richard Adams | Beyond the Sea |


---

## Query 6

**Question:** Write a SQL query to find all reviewers who have rated seven or more stars to their rating. Return reviewer name.

**SQL Query:**

```sql
SELECT 
movie_reviewer.rev_name AS movie_reviewer_name, 
movie_rating.rev_stars AS movie_review_stars
FROM 	
movie_reviewer JOIN movie_rating 
ON movie_reviewer.rev_id = movie_rating.rev_id 
WHERE movie_rating.rev_stars >= 7; 
```

**Output:**
| reviewer_name | rating |
|---------------|--------|
| Righty Sock | 8.40 |
| Jack Malvern | 7.90 |
| Flagrant Baronessa | 8.30 |
| null | 8.20 |
| Victor Woeltjen | 7.30 |
| Simon Wright | 8.60 |
| Mike Salvati | 8.10 |
| null | 8.40 |
| Sasha Goldshtein | 7.00 |
| Righty Sock | 7.70 |
| Krug Stillo | 7.70 |
| Hannah Steele | 8.10 |
| Vincent Cadena | 8.00 |
| Brandt Sponseller | 8.40 |


---

## Query 7

**Question:** Write a SQL query to find the movies without any rating. Return movie title.

**SQL Query:**

```sql
SELECT 
movie.mov_title 
FROM 
movie_rating JOIN movie
ON movie.mov_id = movie_rating.mov_id
WHERE movie_rating.num_o_ratings IS NULL;
```

**Output:**
| movie_title |
|-------------|
| Princess Mononoke |
| Avatar |


---

## Query 8

**Question:** Write a SQL query to find the movies with ID 905 or 907 or 917. Return movie title.

**SQL Query:**

```sql
SELECT
mov_title AS movie_title 
FROM
movie
WHERE mov_id = 905 OR mov_id = 907 OR mov_id = 917; 
```

**Output:**
| movie_name |
|------------|
---

## Query 9

**Question:** Write a SQL query to find the movie titles that contain the word 'Boogie Nights'. Sort the result-set in ascending order by movie year. Return movie ID, movie title and movie release year.

**SQL Query:**

```sql
SELECT
mov_id AS movie_id,
mov_title AS movie_title,
mov_year AS movie_release_year
FROM
movie
WHERE mov_title = 'Boogie Nights' 
ORDER BY mov_year ASC;
```

**Output:**
| movie_id | movie_title | movie_release_year |
|----------|-------------|--------------------|
| 10 | Boogie Nights | 1997 |


---

## Query 10

**Question:** Write a SQL query to find those actors with the first name 'Woody' and the last name 'Allen'. Return actor ID.

**SQL Query:**

```sql
SELECT 
act_id AS actor_id
FROM
actor
WHERE act_fname = 'Woody' AND acrt_lname = 'Allen';
```

**Output:**
| actor_id |
|----------|
| 11 |

---

# Sub-Queries:

## Query 11

**Question:** Write a SQL query to find the actors who played a role in the movie 'Annie Hall'. Return all the fields of actor table.

**SQL Query:**

```sql
SELECT 
* FROM actor WHERE act_id IN 
(SELECT act_id FROM movie_cast WHERE mov_id IN 
(SELECT mov_id FROM movie WHERE mov_title = 'Annie Hall'));
```

**Output:**
| act_id | act_fname | acrt_lname | act_gender |
|--------|-----------|------------|------------|
| 11 | Woody | Allen | M |

---

## Query 12

**Question:** Write a SQL query to find the director of a film that cast a role in 'Eyes Wide Shut'. Return director first name, last name.

**SQL Query:**

```sql
SELECT 
dir_fname AS director_fname, 
dir_lname AS director_lname
FROM director WHERE dir_id IN 
(SELECT dir_id FROM movie_direction WHERE mov_id IN
(SELECT mov_id FROM movie WHERE mov_title = 'Eyes Wide Shut'));
```

**Output:**
| director_fname | director_lname |
|----------------|----------------|
| Stanley        | Kubrick        |


---

## Query 13

**Question:** Write a SQL query to find those movies that have been released in countries other than the United Kingdom. Return movie title, movie year, movie time, and date of release, releasing country.

**SQL Query:**

```sql
SELECT 
mov_title, mov_year, mov_time, mov_dt_rel, mov_rel_country 
FROM movie WHERE mov_rel_country <> 'UK';
```

**Output:**
| mov_title      | mov_year | mov_time | mov_dt_rel   | mov_rel_country |
|----------------|----------|----------|--------------|-----------------|
| The Innocents  | 1961     | 100      | 1962-02-19   | SW              |
| Annie Hall     | 1977     | 93       | 1977-04-20   | USA             |
| Seven Samurai  | 1954     | 207      | 1954-04-26   | JP              |

---

## Query 14

**Question:** Write a SQL query to find for movies whose reviewer is unknown. Return movie title, year, release date, director first name, last name, actor first name, last name.

**SQL Query:**

```sql
SELECT 
mov_title,
mov_year,
mov_dt_rel,
(SELECT dir_fname 
 FROM director WHERE dir_id = 
		(SELECT dir_id FROM movie_direction WHERE mov_id = m.mov_id)) AS director_fname,
	    (SELECT dir_lname FROM director WHERE dir_id = (SELECT dir_id FROM movie_direction WHERE mov_id = m.mov_id)) AS director_lname,
	    (SELECT act_fname FROM actor WHERE act_id = (SELECT act_id FROM movie_cast WHERE mov_id = m.mov_id)) AS actor_fname,
	    (SELECT acrt_lname FROM actor WHERE act_id = (SELECT act_id FROM movie_cast WHERE mov_id = m.mov_id)) AS actor_lname FROM movie m WHERE mov_id IN 
	    (SELECT mov_id FROM movie_rating WHERE rev_id IN (SELECT rev_id FROM movie_reviewer WHERE rev_name is null)
);
```

**Output:**
| mov_title          | mov_year | mov_dt_rel  | director_fname | director_lname | actor_fname | actor_lname |
|-------------------|----------|------------|----------------|----------------|-------------|-------------|
| Blade Runner       | 1982     | 1982-09-09 | Ridley         | Scott          | Harrison    | Ford        |
| Princess Mononoke  | 1997     | 2001-10-19 | Hayao          | Miyazaki       | Claire      | Danes       |

---

## Query 15

**Question:** Write a SQL query to find those movies directed by the director whose first name is Woddy and last name is Allen. Return movie title.

**SQL Query:**

```sql
SELECT 
mov_title FROM movie WHERE mov_id IN (
    SELECT mov_id FROM movie_direction WHERE dir_id IN(
        SELECT dir_id FROM director WHERE dir_fname = 'Woody' AND dir_lname = 'Allen'
    )
)
```

**Output:**
| mov_title |
|-----------|
| Annie Hall |


---

## Query 16

**Question:** Write a SQL query to determine those years in which there was at least one movie that received a rating of at least three stars. Sort the result-set in ascending order by movie year. Return movie year.

**SQL Query:**

```sql
SELECT 
mov_year FROM movie WHERE mov_id IN (
    SELECT mov_id FROM movie_rating WHERE rev_stars >= 3  
) ORDER BY mov_year;
```

**Output:**
| mov_year |
|----------|
| 1954 |
| 1958 |
| 1961 |
| 1962 |
| 1977 |
| 1982 |
| 1986 |
| 1995 |
| 1997 |
| 1997 |
| 1997 |
| 1997 |
| 1999 |
| 2001 |
| 2004 |
| 2008 |
| 2009 |

---

## Query 17

**Question:** Write a SQL query to search for movies that do not have any ratings. Return movie title.

**SQL Query:**

```sql
SELECT 
mov_title FROM movie 
WHERE mov_id IN (
SELECT mov_id FROM movie_rating WHERE rev_stars IS NULL
);
```

**Output:**
| mov_title       |
|-----------------|
| Chinatown       |
| Trainspotting   |


---

## Query 18

**Question:** Write a SQL query to find those reviewers who have not given a rating to certain films. Return reviewer name.

**SQL Query:**

```sql
SELECT 
rev_name FROM movie_reviewer 
WHERE rev_id  NOT IN(
SELECT rev_id FROM movie_rating
);
```

**Output:**
| rev_name           |
|-------------------|
| Alec Shaw          |
| Wesley S. Walker   |


---

## Query 19

**Question:** Write a SQL query to find movies that have been reviewed by a reviewer and received a rating. Sort the result-set in ascending order by reviewer name, movie title, review Stars. Return reviewer name, movie title, review Stars.

**SQL Query:**

```sql
SELECT
(SELECT mr.rev_name
FROM movie_reviewer mr
WHERE mr.rev_id = r.rev_id) AS rev_name,
(SELECT m.mov_title
FROM movie m
WHERE m.mov_id = r.mov_id) AS mov_title,
r.rev_stars
FROM movie_rating r
WHERE r.rev_stars IS NOT NULL
ORDER BY rev_name, mov_title, r.rev_stars;
```

**Output:**
| rev_name               | mov_title              | rev_stars |
|------------------------|-----------------------|-----------|
| Brandt Sponseller      | Aliens                | 8.40      |
| Flagrant Baronessa     | Lawrence of Arabia    | 8.30      |
| Hannah Steele          | Donnie Darko          | 8.10      |
| Jack Malvern           | The Innocents         | 7.90      |
| Josh Cates             | Good Will Hunting     | 4.00      |
| Krug Stillo            | Seven Samurai         | 7.70      |
| Mike Salvati           | Annie Hall            | 8.10      |
| Paul Monks             | Boogie Nights         | 3.00      |
| Richard Adams          | Beyond the Sea        | 6.70      |
| Righty Sock            | Titanic               | 7.70      |
| Righty Sock            | Vertigo               | 8.40      |
| Sasha Goldshtein       | American Beauty       | 7.00      |
| Simon Wright           | The Usual Suspects    | 8.60      |
| Victor Woeltjen        | Avatar                | 7.30      |
| Vincent Cadena         | Slumdog Millionaire   | 8.00      |
|                        | Blade Runner          | 8.20      |
|                        | Princess Mononoke     | 8.40      |



---

## Query 20

**Question:** Write a SQL query to find movies that have been reviewed by a reviewer and received a rating. Group the result set on reviewer’s name, movie title. Return reviewer’s name, movie title.

**SQL Query:**

```sql
SELECT DISTINCT
(SELECT mr.rev_name
FROM movie_reviewer mr
WHERE mr.rev_id = r.rev_id) AS rev_name,
(SELECT m.mov_title
FROM movie m
WHERE m.mov_id = r.mov_id) AS mov_title
FROM movie_rating r
WHERE r.rev_stars IS NOT NULL;
```

**Output:**
| rev_name             | mov_title              |
|---------------------|-----------------------|
| Brandt Sponseller    | Aliens                |
| Flagrant Baronessa   | Lawrence of Arabia    |
| Hannah Steele        | Donnie Darko          |
| Jack Malvern         | The Innocents         |
| Josh Cates           | Good Will Hunting     |
| Krug Stillo          | Seven Samurai         |
| Mike Salvati         | Annie Hall            |
| Paul Monks           | Boogie Nights         |
| Richard Adams        | Beyond the Sea        |
| Righty Sock          | Titanic               |
| Righty Sock          | Vertigo               |
| Sasha Goldshtein     | American Beauty       |
| Simon Wright         | The Usual Suspects    |
| Victor Woeltjen      | Avatar                |
| Vincent Cadena       | Slumdog Millionaire   |
|                     | Blade Runner          |
|                     | Princess Mononoke     |



---

## Query 21

**Question:** Write a SQL query to find those movies, which have received highest number of stars. Group the result set on movie title and sorts the result-set in ascending order by movie title. Return movie title and maximum number of review stars.

**SQL Query:**

```sql
SELECT 
m.mov_title,
MAX(r.rev_stars) AS max_stars
FROM movie m, movie_rating r
WHERE m.mov_id = r.mov_id
AND r.rev_stars = (
    SELECT MAX(rev_stars)
    FROM movie_rating
    WHERE rev_stars IS NOT NULL
)
GROUP BY m.mov_title
ORDER BY m.mov_title ASC;
```

**Output:**
| mov_title           | max_stars |
|--------------------|-----------|
| The Usual Suspects  | 8.60      |


---

## Query 22

**Question:** Write a SQL query to find all reviewers who rated the movie 'American Beauty'. Return reviewer name.

**SQL Query:**

```sql
SELECT 
rev_name FROM movie_reviewer WHERE rev_id IN(
SELECT rev_id FROM movie_rating WHERE mov_id IN(
SELECT mov_id FROM movie WHERE mov_title  = 'American Beauty')
);
```

**Output:**
| rev_name          |
|------------------|
| Sasha Goldshtein  |


---

## Query 23

**Question:** Write a SQL query to find the movies that have not been reviewed by any reviewer body other than 'Paul Monks'. Return movie title.

**SQL Query:**

```sql
SELECT 
mov_title AS movie_title
FROM movie 
WHERE mov_id IN (
SELECT mov_id FROM movie_rating WHERE rev_id IN (
SELECT rev_id FROM movie_reviewer WHERE rev_name = 'Paul Monks')
);
```

**Output:**
| movie_title   |
|---------------|
| Boogie Nights |


---

## Query 24

**Question:** Write a SQL query to find the movies with the lowest ratings. Return reviewer name, movie title, and number of stars for those movies.

**SQL Query:**

```sql
SELECT
(SELECT movie_reviewer.rev_name
FROM movie_reviewer
WHERE movie_reviewer.rev_id = movie_rating.rev_id) AS reviewer_name,
(SELECT movie.mov_title
FROM movie
WHERE movie.mov_id = movie_rating.mov_id) AS movie_title,
movie_rating.rev_stars
FROM movie_rating
WHERE movie_rating.rev_stars = (
SELECT MIN(rev_stars)
FROM movie_rating
WHERE rev_stars IS NOT NULL
);
```

**Output:**
| reviewer_name | movie_title    | rev_stars |
|---------------|---------------|-----------|
| Paul Monks    | Boogie Nights | 3.00      |


---

## Query 25

**Question:** Write a SQL query to find the movies directed by 'James Cameron'. Return movie title.

**SQL Query:**

```sql
SELECT 
mov_title FROM movie WHERE mov_id IN (
SELECT mov_id FROM movie_direction WHERE dir_id IN (
SELECT dir_id FROM director WHERE dir_fname = 'James' AND dir_lname = 'Cameron')
);
```

**Output:**
| mov_title |
|-----------|
| Aliens    |
| Titanic   |


---

## Query 26

**Question:** Write a query in SQL to find the movies in which one or more actors appeared in more than one film.

**SQL Query:**

```sql
SELECT 
DISTINCT movie.mov_title AS movie_title
FROM movie
WHERE movie.mov_id IN (
SELECT movie_cast.mov_id
FROM movie_cast
WHERE movie_cast.act_id IN (
SELECT act_id
FROM movie_cast
GROUP BY act_id
HAVING COUNT(DISTINCT mov_id) > 1)
);
```

**Output:**
| movie_title       |
|------------------|
| American Beauty   |
| Beyond the Sea    |


---

## Query 27

**Question:** Write a SQL query to find all reviewers whose ratings contain a NULL value. Return reviewer name.

**SQL Query:**

```sql
SELECT
movie_reviewer.rev_name AS reviewer_name
FROM movie_reviewer
JOIN movie_rating 
ON movie_reviewer.rev_id = movie_rating.rev_id 
WHERE movie_rating.rev_stars IS NULL;
```

**Output:**
| reviewer_name |
|---------------|
| Neal Wruck    |
| Scott LeBrun  |


---

## Query 28

**Question:** Write a SQL query to find out who was cast in the movie 'Annie Hall'. Return actor first name, last name and role.

**SQL Query:**

```sql
SELECT 
actor.act_fname AS First_name,
actor.acrt_lname AS Last_name,
movie_cast.role AS movie_role
FROM actor
JOIN movie_cast
ON actor.act_id = movie_cast.act_id
JOIN movie
ON movie_cast.mov_id = movie.mov_id
WHERE movie.mov_title = 'Annie Hall';
```

**Output:**
| first_name | last_name | movie_role   |
|------------|-----------|--------------|
| Woody      | Allen     | Alvy Singer  |


---

## Query 29

**Question:** Write a SQL query to find the director who directed a movie that featured a role in 'Eyes Wide Shut'. Return director first name, last name and movie title.

**SQL Query:**

```sql
SELECT
director.dir_fname AS director_firstname,
director.dir_lname AS director_lastname,
movie.mov_title AS movie_title
FROM director
JOIN movie_direction
ON movie_direction.dir_id = director.dir_id
JOIN movie
ON movie.mov_id = movie_direction.mov_id
WHERE movie.mov_title = 'Eyes Wide Shut';
```

**Output:**
| director_firstname | director_lastname | movie_title      |
|------------------|-----------------|-----------------|
| Stanley          | Kubrick         | Eyes Wide Shut  |


---

## Query 30

**Question:** Write a SQL query to find the director of a movie that cast a role as Sean Maguire. Return director first name, last name and movie title.

**SQL Query:**

```sql
SELECT 
director.dir_fname AS director_firstname,
director.dir_lname AS director_lastname,
movie.mov_title AS movie_title
FROM director 
JOIN movie_direction
ON director.dir_id = movie_direction.dir_id
JOIN movie
ON movie.mov_id = movie_direction.mov_id
JOIN movie_cast
ON movie.mov_id = movie_cast.mov_id
WHERE movie_cast.role = 'Sean Maguire';
```

**Output:**
| director_firstname | director_lastname | movie_title         |
|------------------|-----------------|-------------------|
| Gus              | Van Sant        | Good Will Hunting  |

---

## Query 31

**Question:** Write a SQL query to find out which actors have not appeared in any movies between 1990 and 2000 (Begin and end values are included.). Return actor first name, last name, movie title and release year.

**SQL Query:**

```sql
SELECT 
actor.act_fname AS actor_firstname,
actor.acrt_lname AS actor_lastname,
movie.mov_title AS movie_title,
movie.mov_year AS release_year
FROM actor 
JOIN movie_cast
ON actor.act_id = movie_cast.act_id
JOIN movie
ON movie.mov_id = movie_cast.mov_id
WHERE movie.mov_year NOT BETWEEN 1990 AND 2000;
```

**Output:**
| actor_firstname | actor_lastname | movie_title            | release_year |
|-----------------|----------------|----------------------|--------------|
| James           | Stewart        | Vertigo               | 1958         |
| Deborah         | Kerr           | The Innocents         | 1961         |
| Peter           | OToole         | Lawrence of Arabia    | 1962         |
| Robert          | De Niro        | The Deer Hunter       | 1978         |
| F. Murray       | Abraham        | Amadeus               | 1984         |
| Harrison        | Ford           | Blade Runner          | 1982         |
| Woody           | Allen          | Annie Hall            | 1977         |
| Jon             | Voight         | Deliverance           | 1972         |
| Maggie          | Gyllenhaal     | Donnie Darko          | 2001         |
| Dev             | Patel          | Slumdog Millionaire   | 2008         |
| Sigourney       | Weaver         | Aliens                | 1986         |
| Kevin           | Spacey         | Beyond the Sea        | 2004         |
| Jack            | Nicholson      | Chinatown             | 1974         |
| Christian       | Bale           | Chinatown             | 1974         |


---

## Query 32

**Question:** Write a SQL query to find the directors who have directed films in a variety of genres. Group the result set on director first name, last name and generic title. Sort the result-set in ascending order by director first name and last name. Return director first name, last name and number of genres movies.

**SQL Query:**

```sql
SELECT
director.dir_fname AS director_firstName,
director.dir_lname AS director_lastName,
COUNT(DISTINCT genres.gen_id) AS number_of_genres
FROM director
JOIN movie_direction
ON director.dir_id = movie_direction.dir_id
JOIN movie_genres
ON movie_direction.mov_id = movie_genres.mov_id
JOIN genres
ON movie_genres.gen_id = genres.gen_id
GROUP BY director.dir_fname, director.dir_lname
HAVING COUNT(DISTINCT genres.gen_title) > 1
ORDER BY director.dir_fname, director.dir_lname;
```

**Output:**
| director_fname | director_lname | number_of_genres |
|-----------|-----------|------------------|

---

## Query 33

**Question:** Write a SQL query to find the movies with year and genres. Return movie title, movie year and generic title.

**SQL Query:**

```sql
SELECT 
movie.mov_title AS movie_title,
movie.mov_year AS movie_year,
genres.gen_title AS genres_title
FROM
movie JOIN movie_genres
ON movie.mov_id = movie_genres.mov_id
JOIN genres
ON genres.gen_id = movie_genres.gen_id;
```

**Output:**
| movie_title              | movie_year | genres_title |
|--------------------------|------------|--------------|
| Aliens                   | 1986       | Action       |
| Deliverance              | 1972       | Adventure    |
| Lawrence of Arabia       | 1962       | Adventure    |
| Princess Mononoke        | 1997       | Animation    |
| Annie Hall               | 1977       | Comedy       |
| The Usual Suspects       | 1995       | Crime        |
| The Shawshank Redemption | 1994       | Crime        |
| Spirited Away            | 2001       | Drama        |
| Braveheart               | 1995       | Drama        |
| Trainspotting            | 1996       | Drama        |
| Slumdog Millionaire      | 2008       | Drama        |
| The Innocents            | 1961       | Horror       |
| Beyond the Sea           | 2004       | Music        |
| Eyes Wide Shut           | 1999       | Mystery      |
| Back to the Future       | 1985       | Mystery      |
| Vertigo                  | 1958       | Mystery      |
| American Beauty          | 1999       | Romance      |
| Blade Runner             | 1982       | Thriller     |
| The Deer Hunter          | 1978       | War          |



---

## Query 34

**Question:** Write a SQL query to find all the movies with year, genres, and name of the director.

**SQL Query:**

```sql
SELECT
movie.mov_title AS movie_title,
movie.mov_year AS movie_year,
genres.gen_title AS genres,
director.dir_fname || ' ' || director.dir_lname AS director_name
FROM director 
JOIN movie_direction
ON director.dir_id = movie_direction.dir_id
JOIN movie_genres
ON movie_genres.mov_id = movie_direction.mov_id
JOIN movie
ON movie.mov_id = movie_genres.mov_id
JOIN genres
ON movie_genres.gen_id = genres.gen_id; 
```

**Output:**
### Output
| movie_title             | movie_year | genres      | director_name       |
|-------------------------|------------|------------|-------------------|
| Vertigo                 | 1958       | Mystery    | Alfred Hitchcock   |
| The Innocents           | 1961       | Horror     | Jack Clayton       |
| Lawrence of Arabia      | 1962       | Adventure  | David Lean         |
| The Deer Hunter         | 1978       | War        | Michael Cimino     |
| Blade Runner            | 1982       | Thriller   | Ridley Scott       |
| Eyes Wide Shut          | 1999       | Mystery    | Stanley Kubrick    |
| The Usual Suspects      | 1995       | Crime      | Bryan Singer       |
| Annie Hall              | 1977       | Comedy     | Woody Allen        |
| Princess Mononoke       | 1997       | Animation  | Hayao Miyazaki     |
| The Shawshank Redemption| 1994       | Crime      | Frank Darabont     |
| American Beauty         | 1999       | Romance    | Sam Mendes         |
| Deliverance             | 1972       | Adventure  | John Boorman       |
| Trainspotting           | 1996       | Drama      | Danny Boyle        |
| Slumdog Millionaire     | 2008       | Drama      | Danny Boyle        |
| Aliens                  | 1986       | Action     | James Cameron      |
| Beyond the Sea          | 2004       | Music      | Kevin Spacey       |


---

## Query 35

**Question:** Write a SQL query to find the movies released before 1st January 1989. Sort the result-set in descending order by date of release. Return movie title, release year, date of release, duration, and first and last name of the director.

**SQL Query:**

```sql
SELECT 
movie.mov_title AS movie_title,
movie.mov_year AS movie_release_year,
movie.mov_dt_rel AS movie_release_date,
movie.mov_time AS movie_duration,
director.dir_fname || ' ' || director.dir_lname AS director_name 
FROM director
JOIN movie_direction
ON director.dir_id = movie_direction.dir_id
JOIN movie
ON movie.mov_id = movie_direction.mov_id
WHERE movie.mov_dt_rel < '01-01-1989'
ORDER BY movie.mov_year DESC;
```

**Output:**
| movie_title           | movie_release_year | movie_release_date | movie_duration | director_name      |
|----------------------|------------------|------------------|----------------|------------------|
| Aliens               | 1986             | 1986-08-29       | 137            | James Cameron     |
| Amadeus              | 1984             | 1985-01-07       | 160            | Milos Forman      |
| Blade Runner         | 1982             | 1982-09-09       | 117            | Ridley Scott      |
| The Deer Hunter       | 1978             | 1979-03-08       | 183            | Michael Cimino    |
| Annie Hall           | 1977             | 1977-04-20       | 93             | Woody Allen       |
| Chinatown            | 1974             | 1974-08-09       | 130            | Roman Polanski    |
| Deliverance          | 1972             | 1982-10-05       | 109            | John Boorman      |
| Lawrence of Arabia    | 1962             | 1962-12-11       | 216            | David Lean        |
| The Innocents        | 1961             | 1962-02-19       | 100            | Jack Clayton      |
| Vertigo              | 1958             | 1958-08-24       | 128            | Alfred Hitchcock  |


---

## Query 36

**Question:** Write a SQL query to calculate the average movie length and count the number of movies in each genre. Return genre title, average time and number of movies for each genre.

**SQL Query:**

```sql
SELECT 
genres.gen_title AS genres_title,
AVG(movie.mov_time) AS average_movie_time,
COUNT(movie.mov_id) AS movie_count
FROM genres 
JOIN movie_genres
ON movie_genres.gen_id = genres.gen_id
JOIN movie
ON movie.mov_id = movie_genres.mov_id
GROUP BY movie_genres.gen_id, genres.gen_title;
```

**Output:**
### Output
| genres_title | average_movie_time | movie_count |
|--------------|------------------|-------------|
| War          | 183.00           | 1           |
| Thriller     | 117.00           | 1           |
| Drama        | 129.25           | 4           |
| Comedy       | 93.00            | 1           |
| Animation    | 134.00           | 1           |
| Horror       | 100.00           | 1           |
| Music        | 118.00           | 1           |
| Mystery      | 134.33           | 3           |
| Adventure    | 162.50           | 2           |
| Action       | 137.00           | 1           |
| Crime        | 124.00           | 2           |
| Romance      | 122.00           | 1           |



---

## Query 37

**Question:** Write a SQL query to find movies with the shortest duration. Return movie title, movie year, director first name, last name, actor first name, last name and role.

**SQL Query:**

```sql
SELECT
movie.mov_title AS movie_title,
movie.mov_year AS movie_year,
director.dir_fname AS director_firstName,
director.dir_lname AS director_lastName,
actor.act_fname AS actor_firstName,
actor.acrt_lname AS actor_lastName,
movie_cast.role AS movie_role
FROM movie
JOIN movie_direction
ON movie_direction.mov_id = movie.mov_id
JOIN movie_cast
ON movie_cast.mov_id = movie.mov_id
JOIN actor
ON movie_cast.act_id = actor.act_id
JOIN director
ON movie_direction.dir_id = director.dir_id
WHERE movie.mov_time = (
    SELECT MIN(mov_time)
    FROM movie
);
```

**Output:**
| movie_title | movie_year | director_firstname | director_lastname | actor_firstname | actor_lastname | movie_role   |
|-------------|------------|------------------|-----------------|----------------|----------------|--------------|
| Annie Hall  | 1977       | Woody            | Allen           | Woody          | Allen          | Alvy Singer  |


---

## Query 38

**Question:** Write a SQL query to find the years in which a movie received a rating of 3 or 4. Sort the result in increasing order on movie year.

**SQL Query:**

```sql
SELECT
movie.mov_title AS movie_title,
movie.mov_year AS movie_year
FROM movie
JOIN movie_rating
ON movie_rating.mov_id = movie.mov_id
WHERE movie_rating.rev_stars BETWEEN 3 AND 4
ORDER BY movie.mov_year ASC;
```

**Output:**
| movie_title        | movie_year |
|-------------------|------------|
| Boogie Nights      | 1997       |
| Good Will Hunting  | 1997       |


---

## Query 39

**Question:** Write a SQL query to get the reviewer name, movie title, and stars in an order that reviewer name will come first, then by movie title, and lastly by number of stars.

**SQL Query:**

```sql
movie_reviewer.rev_name AS reviewer_name,
movie.mov_title AS movie_title,
movie_rating.rev_stars AS review_stars
FROM movie
JOIN movie_rating
ON movie_rating.mov_id = movie.mov_id
JOIN movie_reviewer
ON movie_reviewer.rev_id = movie_rating.rev_id
ORDER BY movie_reviewer.rev_name, movie.mov_title, movie_rating.rev_stars ASC;
```

**Output:**
### Output
| reviewer_name        | movie_title            | review_stars |
|---------------------|----------------------|--------------|
| Brandt Sponseller    | Aliens                | 8.40         |
| Flagrant Baronessa   | Lawrence of Arabia    | 8.30         |
| Hannah Steele        | Donnie Darko          | 8.10         |
| Jack Malvern         | The Innocents         | 7.90         |
| Josh Cates           | Good Will Hunting     | 4.00         |
| Krug Stillo          | Seven Samurai         | 7.70         |
| Mike Salvati         | Annie Hall            | 8.10         |
| Neal Wruck           | Chinatown             |              |
| Paul Monks           | Boogie Nights         | 3.00         |
| Richard Adams        | Beyond the Sea        | 6.70         |
| Righty Sock          | Titanic               | 7.70         |
| Righty Sock          | Vertigo               | 8.40         |
| Sasha Goldshtein     | American Beauty       | 7.00         |
| Scott LeBrun         | Trainspotting         |              |
| Simon Wright         | The Usual Suspects    | 8.60         |
| Victor Woeltjen      | Avatar                | 7.30         |
| Vincent Cadena       | Slumdog Millionaire   | 8.00         |
|                     | Blade Runner          | 8.20         |
|                     | Princess Mononoke     | 8.40         |



---

## Query 40

**Question:** Write a SQL query to find those movies that have at least one rating and received the most stars. Sort the result-set on movie title. Return movie title and maximum review stars.

**SQL Query:**

```sql
SELECT
movie.mov_title AS movie_title,
MAX(movie_rating.rev_stars) AS max_review_stars
FROM movie
JOIN movie_rating
ON movie.mov_id = movie_rating.mov_id
GROUP BY movie.mov_id, movie.mov_title
ORDER BY movie.mov_title;
```

**Output:**
| movie_title           | max_review_stars |
|----------------------|-----------------|
| Aliens               | 8.40            |
| American Beauty      | 7.00            |
| Annie Hall           | 8.10            |
| Avatar               | 7.30            |
| Beyond the Sea       | 6.70            |
| Blade Runner         | 8.20            |
| Boogie Nights        | 3.00            |
| Chinatown            |                 |
| Donnie Darko         | 8.10            |
| Good Will Hunting    | 4.00            |
| Lawrence of Arabia   | 8.30            |
| Princess Mononoke    | 8.40            |
| Seven Samurai        | 7.70            |
| Slumdog Millionaire  | 8.00            |
| The Innocents        | 7.90            |
| The Usual Suspects   | 8.60            |
| Titanic              | 7.70            |
| Trainspotting        |                 |
| Vertigo              | 8.40            |


---

## Query 41

**Question:** Write a SQL query to find out which movies have received ratings. Return movie title, director first name, director last name and review stars.

**SQL Query:**

```sql
SELECT
movie.mov_title AS movie_title,
director.dir_fname AS director_firstName,
director.dir_lname AS director_lastName,
movie_rating.rev_stars AS review_stars
FROM movie
JOIN movie_rating
ON movie.mov_id = movie_rating.mov_id
JOIN movie_direction
ON movie.mov_id = movie_direction.mov_id
JOIN director
ON movie_direction.dir_id = director.dir_id
WHERE movie_rating.rev_stars IS NOT NULL;
```

**Output:**
| movie_title           | director_firstname | director_lastname     | review_stars |
|----------------------|------------------|---------------------|--------------|
| Vertigo               | Alfred           | Hitchcock           | 8.40         |
| The Innocents         | Jack             | Clayton             | 7.90         |
| Lawrence of Arabia    | David            | Lean                | 8.30         |
| Blade Runner          | Ridley           | Scott               | 8.20         |
| The Usual Suspects    | Bryan            | Singer              | 8.60         |
| Boogie Nights         | Paul             | Thomas Anderson     | 3.00         |
| Annie Hall            | Woody            | Allen               | 8.10         |
| Princess Mononoke     | Hayao            | Miyazaki            | 8.40         |
| American Beauty       | Sam              | Mendes              | 7.00         |
| Titanic               | James            | Cameron             | 7.70         |
| Good Will Hunting     | Gus              | Van Sant            | 4.00         |
| Donnie Darko          | Richard          | Kelly               | 8.10         |
| Slumdog Millionaire   | Danny            | Boyle               | 8.00         |
| Aliens                | James            | Cameron             | 8.40         |
| Beyond the Sea        | Kevin            | Spacey              | 6.70         |


---

## Query 42

**Question:** Write a SQL query to find movies in which one or more actors have acted in more than one film. Return movie title, actor first and last name, and the role.

**SQL Query:**

```sql
SELECT
movie.mov_title AS movie_title,
actor.act_fname AS actor_firstName,
actor.acrt_lname AS actor_lastName,
movie_cast.role AS role
FROM movie_cast
JOIN actor
ON movie_cast.act_id = actor.act_id
JOIN movie
ON movie_cast.mov_id = movie.mov_id
WHERE movie_cast.act_id IN (
SELECT act_id
FROM movie_cast
GROUP BY act_id
HAVING COUNT(mov_id) > 1
);
```

**Output:**
| movie_title       | actor_firstname | actor_lastname | role           |
|------------------|----------------|----------------|----------------|
| American Beauty   | Kevin          | Spacey         | Lester Burnham |
| Beyond the Sea    | Kevin          | Spacey         | Bobby Darin    |


---

## Query 43

**Question:** Write a SQL query to find the actor whose first name is 'Claire' and last name is 'Danes'. Return director first name, last name, movie title, actor first name and last name, role.

**SQL Query:**

```sql
SELECT
director.dir_fname AS director_firstName,
director.dir_lname AS director_lastName,
movie.mov_title AS movie_title,
actor.act_fname AS actor_first_name,
actor.acrt_lname AS actor_last_name,
movie_cast.role AS role
FROM actor
JOIN movie_cast
ON actor.act_id = movie_cast.act_id
JOIN movie
ON movie_cast.mov_id = movie.mov_id
JOIN movie_direction
ON movie.mov_id = movie_direction.mov_id
JOIN director
ON movie_direction.dir_id = director.dir_id
WHERE
actor.act_fname = 'Claire' AND actor.acrt_lname = 'Danes';
```

**Output:**
| director_firstname | director_lastname | movie_title        | actor_first_name | actor_last_name | role |
|------------------|-----------------|------------------|----------------|----------------|------|
| Hayao            | Miyazaki        | Princess Mononoke | Claire         | Danes          | San  |


---

## Query 44

**Question:** Write a SQL query to find for actors whose films have been directed by them. Return actor first name, last name, movie title and role.

**SQL Query:**

```sql
SELECT
actor.act_fname AS actor_firstName,
actor.acrt_lname AS actor_lastName,
movie.mov_title AS movie_title,
movie_cast.role AS movie_role
FROM actor
JOIN movie_cast
ON actor.act_id = movie_cast.act_id
JOIN movie
ON movie_cast.mov_id = movie.mov_id
JOIN movie_direction
ON movie.mov_id = movie_direction.mov_id
JOIN director
ON movie_direction.dir_id = director.dir_id
WHERE
actor.act_fname = director.dir_fname AND actor.acrt_lname = director.dir_lname;
```

**Output:**
| actor_firstname | actor_lastname | movie_title     | movie_role      |
|----------------|----------------|----------------|----------------|
| Woody           | Allen          | Annie Hall     | Alvy Singer    |
| Kevin           | Spacey         | Beyond the Sea | Bobby Darin    |


---

## Query 45

**Question:** Write a SQL query to find the cast list of the movie ‘Chinatown’. Return first name, last name.

**SQL Query:**

```sql
SELECT
actor.act_fname AS actor_firstName,
actor.acrt_lname AS actor_lastName
FROM movie
JOIN movie_cast
ON movie.mov_id = movie_cast.mov_id
JOIN actor
ON movie_cast.act_id = actor.act_id
WHERE
movie.mov_title = 'Chinatown';
```

**Output:**
| actor_firstname | actor_lastname |
|----------------|----------------|
| Jack           | Nicholson      |
| Christian      | Bale           |


---

## Query 46

**Question:** Write a SQL query to find those movies where actor’s first name is 'Harrison' and last name is 'Ford'. Return movie title.

**SQL Query:**

```sql
SELECT
movie.mov_title AS movie_title
FROM movie
JOIN movie_cast
ON movie.mov_id = movie_cast.mov_id
JOIN actor
ON movie_cast.act_id = actor.act_id
WHERE
actor.act_fname = 'Harrison' AND actor.acrt_lname = 'Ford';
```

**Output:**
| movie_title   |
|---------------|
| Blade Runner  |


---

## Query 47

**Question:** Write a SQL query to find the highest-rated movies. Return movie title, movie year, review stars and releasing country.

**SQL Query:**

```sql
SELECT
movie.mov_title AS movie_title,
movie.mov_year AS movie_year,
movie_rating.rev_stars AS review_stars,
movie.mov_rel_country AS releasing_country
FROM movie
JOIN movie_rating
ON movie.mov_id = movie_rating.mov_id
WHERE movie_rating.rev_stars = (
SELECT 
MAX(rev_stars)
FROM movie_rating
);
```

**Output:**
| movie_title           | movie_year | review_stars | releasing_country |
|----------------------|------------|--------------|-----------------|
| The Usual Suspects    | 1995       | 8.60         | UK              |


---

## Query 48

**Question:** Write a SQL query to find the highest-rated ‘Mystery Movies’. Return the title, year, and rating.

**SQL Query:**

```sql
SELECT
movie.mov_title AS movie_title,
movie.mov_year AS movie_year,
movie_rating.rev_stars AS rating
FROM movie
JOIN movie_genres
ON movie.mov_id = movie_genres.mov_id
JOIN genres
ON movie_genres.gen_id = genres.gen_id
JOIN movie_rating
ON movie.mov_id = movie_rating.mov_id
WHERE
genres.gen_title = 'Mystery'AND movie_rating.rev_stars = (
SELECT MAX(mr.rev_stars)
FROM movie_rating mr
JOIN movie_genres mg
ON mr.mov_id = mg.mov_id
JOIN genres g
ON mg.gen_id = g.gen_id
WHERE g.gen_title = 'Mystery'
);
```

**Output:**
| movie_title | movie_year | rating |
|-------------|------------|--------|
| Vertigo     | 1958       | 8.40   |


---

## Query 49

**Question:** Write a SQL query to find the years when most of the ‘Mystery Movies’ produced. Count the number of generic title and compute their average rating. Group the result set on movie release year, generic title. Return movie year, generic title, number of generic title and average rating.

**SQL Query:**

```sql
SELECT
    movie.mov_year AS movie_year,
    genres.gen_title AS generic_title,
    COUNT(movie.mov_id) AS number_of_generic_title,
    AVG(movie_rating.rev_stars) AS average_rating
FROM movie
JOIN movie_genres
    ON movie.mov_id = movie_genres.mov_id
JOIN genres
    ON movie_genres.gen_id = genres.gen_id
JOIN movie_rating
    ON movie.mov_id = movie_rating.mov_id
WHERE
    genres.gen_title = 'Mystery'
GROUP BY
    movie.mov_year,
    genres.gen_title
ORDER BY
    number_of_generic_title DESC;
```

**Output:**
| movie_year | generic_title | number_of_generic_title | average_rating |
|------------|---------------|------------------------|----------------|
| 1958       | Mystery       | 1                      | 8.40           |


---

## Query 50

**Question:** Write a query in SQL to generate a report, which contain the fields movie title, name of the female actor, year of the movie, role, movie genres, the director, date of release, and rating of that movie.

**SQL Query:**

```sql
SELECT 
    m.mov_title,
    a.act_fname,
    a.acrt_lname,
    m.mov_year,
    mc.role,
    g.gen_title,
    d.dir_fname,
    d.dir_lname,
    m.mov_dt_rel,
    rt.rev_stars
FROM actor a
INNER JOIN movie_cast mc ON a.act_id = mc.act_id
INNER JOIN movie m ON mc.mov_id = m.mov_id
INNER JOIN movie_genres mg ON m.mov_id = mg.mov_id
INNER JOIN genres g ON mg.gen_id = g.gen_id
INNER JOIN movie_direction md ON m.mov_id = md.mov_id
INNER JOIN director d ON md.dir_id = d.dir_id
LEFT JOIN movie_rating rt ON m.mov_id = rt.mov_id
WHERE a.act_gender = 'F'
ORDER BY m.mov_title, a.act_fname, g.gen_title;
```

| movie_title       | actor_first_name | actor_last_name | movie_year | role          | genre_title | director_first_name | director_last_name | date_of_release | rating |
| :---------------- | :--------------- | :-------------- | :--------- | :------------ | :---------- | :------------------ | :----------------- | :-------------- | :----- |
| Aliens            | Sigourney        | Weaver          | 1986       | Ripley        | Action      | James               | Cameron            | 1986-08-29      | 8.40   |
| Eyes Wide Shut    | Nicole           | Kidman          | 1999       | Alice Harford | Mystery     | Stanley             | Kubrick            | 1900-01-01      | NULL   |
| Princess Mononoke | Claire           | Danes           | 1997       | San           | Animation   | Hayao               | Miyazaki           | 2001-10-19      | 8.40   |
| The Innocents     | Deborah          | Kerr            | 1961       | Miss Giddens  | Horror      | Jack                | Clayton            | 1962-02-19      | 7.90   |

---