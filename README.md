# Newsallo v2

Newsallo is a platform that brings all of your favorite news sources into one beautiful and easy to read feed.

# Links

[Newsallo v2 - Live Site](https://www.newsallo.com)

[Newsallo v2 API](https://github.com/acekreations/newsallo-api) - (currently private for security reasons) for the sake of simplicity the API will be covered in this README as well as the newsallo-api repo.

# Concept/Idea

Newsallo is meant to be a place where you can gather all of you favorite news sources into one place instead of bouncing around to all your different news sites or apps. The idea came out of an increasing need for trustworthy news. The problem is not necessarily that news outlets have become untrustworthy, but the places that we find our news have become plagued with untrustworthy people pushing their questionable content on you. That's where Newsallo comes in. Newsallo bridges the gap between the publishers and the consumers, and does it in a way that looks and feels simialar to using the social networks that people like to consume their news with.

# Front End

-   React
    -   React Router
    -   React Moment
    -   Axios
-   HTML
-   Sass
-   Netlify (Hosting)

# Back End (RESTful API)

-   Node.js
-   Express
-   Axios
-   Moment
-   Sequelize
-   Postgres (Database)
-   Newsapi.org (data source)
-   Heroku (Hosting)

## API

The RESTful api currently has two end poins:

-   `/api/update` to trigger a call to the newsapi.org API and update the latest news in the Newsallo database
-   `/api/SOURCE-ID/LIMIT` to retrieve news articles stored in the Newsallo database. _SOURCE-ID_ takes a comma seperated list of "source ids" - source ids are slugified versions of the news outlets proper name i.e. BBC News -> bbc-news. _Limit_ is optional and refers to the number of articles to return in total.

## Database

The Newsallo database is Postgres, containing one table to store all news articles. The articles table model can be seen below.

```
sourceID: {
    type: DataTypes.STRING,
    allowNull: false
},
sourceName: {
    type: DataTypes.STRING,
    allowNull: false
},
author: {
    type: DataTypes.STRING
},
title: {
    type: DataTypes.STRING,
    allowNull: false
},
description: {
    type: DataTypes.TEXT
},
url: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
},
urlToImage: {
    type: DataTypes.TEXT
},
publishedAt: {
    type: DataTypes.STRING
},
content: {
    type: DataTypes.TEXT
}
```

# Future

Future updates to Newsallo will include:

-   Social Functionality
    -   Adding the ability to follow people you _trust_ on the platform, without the ability to see your follower/following count to minimize any sort of negative side effects caused by "influencers"
-   More precise news feed control
    -   Allow users to look at sepreate feeds for sports, finance, technology, etc.
    -   Allow users to only see articles that have not been shown to them before.
-   Allow users to save or favorite articles for later

# Author

Craig Melville - [Portfolio](https://www.craigsportfolio.com)
