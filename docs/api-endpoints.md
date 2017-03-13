# API Endpoints

## HTML API

### Root

- `GET /` -loads React web app

## JSON API

### USERS

- `POST /api/users`
- `PATCH /api/users`

### SESSION

- `POST /api/session`
- `DELETE /api/session`

### CATEGORIES

- `GET /api/categories`
- `GET /api/categories/:id`

### ARTICLES

- `GET /api/articles`
- `GET /api/articles?title=search_title`
- `GET /api/articles/:id`
- `POST /api/articles`
- `PATCH /api/articles/:id`
- `DELETE /api/articles/:id`

### COMMENTS

- `POST /api/articles/:article_id/comments`
- `DELETE /api/articles/:article_id/comments/:id`
