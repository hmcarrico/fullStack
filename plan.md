# Full Stack Review

# Server

## Packages

* express
* body-parser
* axios
* dotenv
* express-session
* massive

## File Structure

* Server Folder
* controllers
    *memes
* index file
* add a `main` to `package.json`
    *proxy
        remember special proxy for auth0
* middleware?

# Routes

* /auth/callback
* /logout
* /user-data
* /api/memes GET (and POST if time)
* /api/memes/:id PATCH/DELETE
* stretch goals

# Client

## Packages

* redux
* react redux
* react-router-dom
* axios

## Components

* Header
* Dashboard
* Home
* Memes
* Login?
* Meme

# Redux

* reeducer
* store
* Provider wrapper
* action creators
    * payload
    * type
* action types/names
* initial state
    * user
    * memes list

# Routes

* Home /
* Dashboard /dashboard
* MemeList /memes

# Database

* memes (table)
    * id
    * url
    * title
    * text captioon?
    * who posted it (user_id)
    * date
    * type
* users (table)
    * id
    * auth0_id
    * name
    * email
    * picture
    * address?
    * nickname

* get_memes_by_user_id
* get_user_by_auth0_id
* create_user
* delete_meme?
* update_meme?