/*
DATABASE NOTES:

List example:
{
    id: UUID,
    title: string,
    author: userId
    image: url,
    description: string
    category: enum
    date: timestamp,
   
  },



  listitem example:
{   id: UUID,
    title: string,
    image: string,
    description: string,
    link: string,
    subcategory: string,
    category: category_type (create the category type like so: CREATE TYPE item_category AS ENUM ('Electronics', 'Clothing', 'Books', 'Furniture');
)
},

rating:
CREATE TABLE ratings (
    rating_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(user_id),
    item_id INT REFERENCES items(item_id),
    rating_value FLOAT NOT NULL CHECK (rating_value >= 0 AND rating_value <= 5),
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

Topics:
CREATE TABLE topics (
    Topic_id SERIAL PRIMARY KEY,
    item_id INT REFERENCES items(item_id),
    topic TEXT );

CREATE TABLE viewing_history (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    item_id INTEGER NOT NULL,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE saved_list (
    user_id INTEGER PRIMARY KEY,
    item_id INTEGER NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (item_id) REFERENCES items(id)
);

User Example:
{
  id: UUID,
  name: string,
  profile: picture,
  email: string,
  password: bigint,
  biography: string,
  followers: int ---> increment on each following. 

  //These will be grabbed from join tables
  history: UUID[] ---> will be a list of recently viewed lists
  saved: UUID[] ---> will be a list of saved lists
  following: UUID[] ---> will be a list of userids,
  created: UUID[] ---> will be a list of usercreated lists



CREATE TABLE user_followers (
    follower_id INTEGER,
    followed_id INTEGER,
    PRIMARY KEY (follower_id, followed_id),
    FOREIGN KEY (follower_id) REFERENCES users(id),
    FOREIGN KEY (followed_id) REFERENCES users(id)
);
}




*/

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email TEXT NOT NULL,
    profile_picture TEXT NULL,
    biography TEXT NULL
);

-- will need to create enum for category type--
CREATE TYPE item_category AS ENUM ('Electronics', 'Clothing', 'Books', 'Furniture');

CREATE TABLE user_lists (
    id SERIAL PRIMARY KEY,
    user_id BIGINT NOT NULL,
    title TEXT NOT NULL,
    image TEXT NULL,
    description TEXT NULL,
    category item_category NOT NULL,
    date TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE list_items (
    id SERIAL PRIMARY KEY,
    list_id BIGINT NOT NULL,
    list_item TEXT NOT NULL,
    image TEXT NULL,
    description TEXT NULL,
    link TEXT NULL,
    subcategory TEXT NULL,
    FOREIGN KEY (list_id) REFERENCES lists(id)
);

CREATE TABLE user_viewing_histories (
    id SERIAL PRIMARY KEY,
    user_id BIGINT NOT NULL,
    item_id BIGINT NOT NULL,
    timestamp TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (item_id) REFERENCES lists(id)
);

CREATE TABLE list_topics (
    id SERIAL PRIMARY KEY,
    item_id BIGINT NOT NULL,
    topic TEXT NOT NULL,
    FOREIGN KEY (item_id) REFERENCES lists(id)
);

CREATE TABLE user_ratings (
    id SERIAL PRIMARY KEY,
    user_id BIGINT NOT NULL,
    item_id BIGINT NOT NULL,
    rating_value DOUBLE PRECISION NOT NULL,
    timestamp TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (item_id) REFERENCES lists(id)
);

CREATE TABLE user_followers (
    follower_id BIGINT NOT NULL,
    followed_id BIGINT NOT NULL,
    PRIMARY KEY (follower_id, followed_id),
    FOREIGN KEY (follower_id) REFERENCES users(id),
    FOREIGN KEY (followed_id) REFERENCES users(id)
);

CREATE TABLE user_saved_lists (
    id SERIAL PRIMARY KEY,
    user_id BIGINT NOT NULL,
    item_id BIGINT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (item_id) REFERENCES lists(id)
);

