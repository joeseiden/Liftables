# Schema Information

## Users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## Articles
column name  | data type | details
-------------|-----------|-----------------------
id           | integer   | not null, primary key
title        | string    | not null
description  | text      | not null
img_url      | string    | not null
user_id      | integer   | not null, foreign key (references user), indexed

has_many steps, comments

## Steps
column name  | data type | details
-------------|-----------|-----------------------
id           | integer   | not null, primary key
title        | string    | not null
contents     | text      | not null
media_url    | text      | 
article_id   | integer   | not null, indexed, foreign key (references article)

## Comments

column name  | data type | details
-------------|-----------|-----------------------
id           | integer   | not null, primary key
author_id    | integer   | not null, foreign key (references user), indexed
article_id   | integer   | not null, foreign key (references article), indexed
content      | text      | not null
