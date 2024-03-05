import travelImage from "@/public/test-images/Scottsdale_waterfront.jpg";
import foodImage from "@/public/test-images/Food-Taco-Cloud-Style-Graphics-9428700-1.jpg";
import movieImage from "@/public/test-images/7f58450a663c6c99a07d97fe1c61344ej.webp";

export const topics = [
  "All",
  "Destinations",
  "Best of the year",
  "Tacos",
  "Gaming",
  "House Mucic",
  "Burritos",
  "Classical",
  "Horror Stories",
  "trap music",
  "comedy",
  "corvettes",
  "computers",
  "Phoenix",
  "portland",
  "Live Music",
  "Concerts",
];

/*
List example::
{
    id: UUID,
    title: string,
    author: userId
    image: url,
    description: string
    category: enum
    date: timestamp,
    viewcount: number ---> increment on each view,
    list: integer[], ---> list of list item id's
    topics:string[], ---> topics for searching
  },



  listitem example:
{   id: UUID,
    title: string,
    image: string,
    description: string,
    link: string,
    subcategory: string,
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

export const curations = [
  {
    id: 1,
    title: "Best Places To Visit",
    author: "Shawn Sidwell",
    image: travelImage,
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo
  dolor facere, dolore iure delectus, a atque nesciunt ipsa nihil amet
  sapiente exercitationem labore obcaecati officiis temporibus quod
  placeat? Maxime, quia.`,
    rating: "🖊️🖊️🖊️🖊️🖊️",
    category: "Travel",
    topic: "destinations",
    views: 250,
    date: "2 months",
    list: ["Portland", "Tigard", "Hillsboro"],
  },
  {
    id: 2,
    title: "Favorite Movies of 2024",
    author: "Leonardo Dicaprio",
    image: movieImage,
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo
  dolor facere, dolore iure delectus, a atque nesciunt ipsa nihil amet
  sapiente exercitationem labore obcaecati officiis temporibus quod
  placeat? Maxime, quia.`,
    rating: "🖊️🖊️🖊️🖊️🖊️",
    category: "Movies",
    topic: "best of the year",
    views: 200,
    date: "2 months",
    list: ["Portland", "Tigard", "Hillsboro"],
  },
  {
    id: 3,
    title: "Favorite Taco Restaurant",
    author: "Gordon Ramsey",
    image: foodImage,
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo
  dolor facere, dolore iure delectus, a atque nesciunt ipsa nihil amet
  sapiente exercitationem labore obcaecati officiis temporibus quod
  placeat? Maxime, quia.`,
    rating: "🖊️🖊️🖊️🖊️🖊️",
    category: "Food",
    topic: "tacos",
    views: 100,
    date: "2 months",
    list: ["Portland", "Tigard", "Hillsboro"],
  },
  {
    id: 4,
    title: "Best Places To Visit",
    author: "Shawn Sidwell",
    image: travelImage,
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo
  dolor facere, dolore iure delectus, a atque nesciunt ipsa nihil amet
  sapiente exercitationem labore obcaecati officiis temporibus quod
  placeat? Maxime, quia.`,
    rating: "🖊️🖊️🖊️🖊️🖊️",
    category: "Travel",
    topic: "destinations",
    views: 250,
    date: "2 months",
    list: ["Portland", "Tigard", "Hillsboro"],
  },
  {
    id: 5,
    title: "Favorite Movies of 2024",
    author: "Leonardo Dicaprio",
    image: movieImage,
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo
  dolor facere, dolore iure delectus, a atque nesciunt ipsa nihil amet
  sapiente exercitationem labore obcaecati officiis temporibus quod
  placeat? Maxime, quia.`,
    rating: "🖊️🖊️🖊️🖊️🖊️",
    category: "Movies",
    topic: "best of the year",
    views: 200,
    date: "2 months",
    list: ["Portland", "Tigard", "Hillsboro"],
  },
  {
    id: 6,
    title: "Favorite Taco Restaurant",
    author: "Gordon Ramsey",
    image: foodImage,
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo
  dolor facere, dolore iure delectus, a atque nesciunt ipsa nihil amet
  sapiente exercitationem labore obcaecati officiis temporibus quod
  placeat? Maxime, quia.`,
    rating: "🖊️🖊️🖊️🖊️🖊️",
    category: "Food",
    topic: "tacos",
    views: 100,
    date: "2 months",
    list: ["Portland", "Tigard", "Hillsboro"],
  },
  {
    id: 7,
    title: "Best Places To Visit",
    author: "Shawn Sidwell",
    image: travelImage,
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo
  dolor facere, dolore iure delectus, a atque nesciunt ipsa nihil amet
  sapiente exercitationem labore obcaecati officiis temporibus quod
  placeat? Maxime, quia.`,
    rating: "🖊️🖊️🖊️🖊️🖊️",
    category: "Travel",
    topic: "destinations",
    views: 250,
    date: "2 months",
    list: ["Portland", "Tigard", "Hillsboro"],
  },
  {
    id: 8,
    title: "Favorite Movies of 2024",
    author: "Leonardo Dicaprio",
    image: movieImage,
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo
  dolor facere, dolore iure delectus, a atque nesciunt ipsa nihil amet
  sapiente exercitationem labore obcaecati officiis temporibus quod
  placeat? Maxime, quia.`,
    rating: "🖊️🖊️🖊️🖊️🖊️",
    category: "Movies",
    topic: "best of the year",
    views: 200,
    date: "2 months",
    list: ["Portland", "Tigard", "Hillsboro"],
  },
  {
    id: 9,
    title: "Favorite Taco Restaurant",
    author: "Gordon Ramsey",
    image: foodImage,
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo
  dolor facere, dolore iure delectus, a atque nesciunt ipsa nihil amet
  sapiente exercitationem labore obcaecati officiis temporibus quod
  placeat? Maxime, quia.`,
    rating: "🖊️🖊️🖊️🖊️🖊️",
    category: "Food",
    topic: "tacos",
    views: 100,
    date: "2 months",
    list: ["Portland", "Tigard", "Hillsboro"],
  },
  {
    id: 10,
    title: "Best Places To Visit",
    author: "Shawn Sidwell",
    image: travelImage,
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo
  dolor facere, dolore iure delectus, a atque nesciunt ipsa nihil amet
  sapiente exercitationem labore obcaecati officiis temporibus quod
  placeat? Maxime, quia.`,
    rating: "🖊️🖊️🖊️🖊️🖊️",
    category: "Travel",
    topic: "destinations",
    views: 250,
    date: "2 months",
    list: ["Portland", "Tigard", "Hillsboro"],
  },
  {
    id: 11,
    title: "Favorite Movies of 2024",
    author: "Leonardo Dicaprio",
    image: movieImage,
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo
  dolor facere, dolore iure delectus, a atque nesciunt ipsa nihil amet
  sapiente exercitationem labore obcaecati officiis temporibus quod
  placeat? Maxime, quia.`,
    rating: "🖊️🖊️🖊️🖊️🖊️",
    category: "Movies",
    topic: "best of the year",
    views: 200,
    date: "2 months",
    list: ["Portland", "Tigard", "Hillsboro"],
  },
  {
    id: 12,
    title: "Favorite Taco Restaurant",
    author: "Gordon Ramsey",
    image: foodImage,
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo
  dolor facere, dolore iure delectus, a atque nesciunt ipsa nihil amet
  sapiente exercitationem labore obcaecati officiis temporibus quod
  placeat? Maxime, quia.`,
    rating: "🖊️🖊️🖊️🖊️🖊️",
    category: "Food",
    topic: "tacos",
    views: 100,
    date: "2 months",
    list: ["Portland", "Tigard", "Hillsboro"],
  },
];
