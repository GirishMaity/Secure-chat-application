<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#tech-stack">Tech Used</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#client-side-usageport-3000">Client-side usage</a></li>
        <li><a href="#server-side-usageport-5000">Server-side usage</a></li>
      </ul>
    </li>
  </ol>
</details>

## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

#### Mern Chat App

This is a Full Stack Chatting App.
Uses Socket.io for real time communication and stores user details in encrypted format in Mongo DB Database.




# Tech Stack

**Client:** [![React][React.js]][React-url]

**Server:** [![Node][Node.js]][Node-url]   [![Express][Express.js]][Express-url]

**Database:** [![MongoDb][Mongo.js]][Mongo-url]


## Getting Started

### Prerequisites
- Node ^10.0.0
- npm

### Client-side usage(PORT: 3000)
```
$ cd frontend   // go to client folder
$ npm i         // npm install packages
$ npm start     // run it locally

// deployment for client app
$ npm run build 
```

### Server-side usage(PORT: 5000)
#### Prepare .env file
 You need to add Port number for backend, MongoDB atlas URI and create a JWT secret
```
PORT = 5000
MONGO_URI = <your mongoDB atlas URI>
JWT_SECRET = <your secret key>
```
#### Start
```
$ npm i        // npm install packages
$ cd backend   // go to backend folder
$ npm start    // run it locally
```




[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Node.js]: https://img.shields.io/badge/react.js-000000?style=for-the-badge&logo=reactjs&logoColor=white
[Node-url]: https://nodejs.org/en/about/
[Express.js]: https://img.shields.io/badge/express.js-000000?style=for-the-badge&logo=expressjs&logoColor=white
[Express-url]: https://expressjs.com/
[Mongo.js]: https://img.shields.io/badge/mongo_db-000000?style=for-the-badge&logo=MongoDb&logoColor=white
[Mongo-url]: https://www.mongodb.com/
[product-screenshot]: https://chatsecure.org/images/chatsecure-banner.png

                  
