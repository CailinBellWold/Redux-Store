<!-- ## Your Task

In this unit, you learned how to manage global state using React’s Context API. The Context API is quickly gaining traction as a worthy alternative or perhaps even successor to other libraries that manage global state in tandem with React, such as Flux or MobX. Nonetheless, the open source JavaScript library Redux remains the industry standard for managing complex state in a large-scale React application, and you’ll likely encounter it on the job.

Your challenge this week is to refactor the e-commerce platform from [Activity 26](../01-Activities/26-Stu_Actions-Reducers/Unsolved) so that it uses [Redux](https://redux.js.org/). You won’t need to make sweeping changes to the code, but you will need to read through the Redux documentation on your own to find the information you need. Some guidelines have been provided in the Getting Started section to point you in the right direction. If you haven't yet, download the [e-commerce platform code from Activity 26](http://static.fullstack-bootcamp.com/fullstack-ground/unit-22/26-Stu_Actions-Reducers.zip).

**On the Job**: Web developers frequently have to immerse themselves in a new technology to solve a problem, with only that tool’s documentation for help. They must sift through it to find the information that matches the specific problem they’re trying to solve. This assignment will allow you to practice a skill that you’ll use many times over the course of your career. -->

# 22 State Homework: Redux Store
[![License: MIT](https://img.shields.io/github/license/CailinBellWold/Redux-Store?style=plastic)](https://opensource.org/licenses/MIT)

## Description

Refactor a fully functioning e-commerce platform, replacing the Context API with Redux to manage global state.

### Motivation

<!-- Gaining skills to allow user of my apps to use offline functionality will allow users to access their information any time, improving overall app functionality. -->

### Learning Targets
<!-- Build out the manifest, service-worker and db files need to create a progressive web app (PWA). Continue to develop skills working with Mongo/Mongoose and deploying to Heroku while hosting the database on MongoDB Atlas. -->

## Table of Contents
- [Core Objectives Met](#Core)
- [Technologies Used](#Technologies)
- [Screen Shot](#Screen)
- [Deployed App](#Deployed)
- [Demo](#Demo)
- [License](#MIT)
- [Questions](#Questions)

## Core Objectives Met

GIVEN an e-commerce platform that uses Redux to manage global state...

1. When a user reviews the app’s store, they find that the app uses a Redux store instead of the Context API.
2. When a user reviews the way the React front end accesses the store, they find that the app uses a Redux provider.
3. When a user reviews the way the app determines changes to its global state, then they find that the app passes reducers to a Redux store instead of using the Context API.
4. When a user reviews the way the app extracts state data from the store, then they find that the app uses Redux instead of the Context API.
5. When a user reviews the way the app dispatches actions, then they find that the app uses Redux instead of the Context API.

## Technologies Used 
- Heroku
- [NPM Apollo Client Package](https://www.npmjs.com/package/stripe)
- [NPM Apollo-Server-Express Package](https://www.npmjs.com/package/apollo-server-express)
- [NPM Bcrypt Package](https://www.npmjs.com/package/bcrypt)
- [NPM Express.js Package](https://www.npmjs.com/package/express)
- [NPM Express-Session Package](https://www.npmjs.com/package/express-session)
- [NPM GraphQL Package](https://www.npmjs.com/package/graphql)
- [NPM JSONWebToken](https://www.npmjs.com/package/jsonwebtoken)
- [NPM JWT-Decode Package](https://www.npmjs.com/package/jwt-decode)
- [NPM Mongoose Package](https://www.npmjs.com/package/mongoose)
- [NPM nodemon Package](https://www.npmjs.com/package/nodemon)
- [NPM Stripe Package](https://www.npmjs.com/package/stripe)
- [NPM React Package](https://www.npmjs.com/package/react)
- [React-Dom](https://www.npmjs.com/package/react-dom)
- [React-Redux](https://www.npmjs.com/package/react-redux)
- [React-Router-Dom](https://www.npmjs.com/package/react-router-dom)
- [React-Scripts](https://www.npmjs.com/package/react-scripts)
- JavaScript
- Node.js
<!-- - [NPM dotenv Package](https://www.npmjs.com/package/dotenv) -->

## Screen Shot

<!-- ![Google Book Search Engine](./client/src/assets/Google_Book_Search_Demo.gif) -->

## Deployed Application

<!-- https://google-book-search-cailin.herokuapp.com/ -->

## MIT License
&copy;2021 Cailin Bell Wold

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Contact
For inquiries, please contact [Cailin Bell Wold](https://github.com/CailinBellWold).

