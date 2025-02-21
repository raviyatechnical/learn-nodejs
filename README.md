![Logo](https://nodejs.org/static/images/logo.svg)

# Learning Node.js

This project creates a learning of Node.js frontend and backend.

mongodb and chat system using socket

### 💰 Support by donating or sponsoring us.,
 
 [![sponsor](https://img.shields.io/badge/sponsor-30363D?style=for-the-badge&logo=GitHub-Sponsors&logoColor=#white)](https://github.com/sponsors/bhargavraviya) [![Patreon](https://img.shields.io/badge/Patreon-F96854?style=for-the-badge&logo=patreon&logoColor=white)](https://www.patreon.com/raviyatechnical/membership) [![Buymeacoffee](https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/raviyatechnical) [![Ko-Fi](https://img.shields.io/badge/Ko--fi-F16061?style=for-the-badge&logo=ko-fi&logoColor=white)](https://ko-fi.com/raviyatechnical)
-----

## Features

- REST API using MySQL (Sequelize)
- REST API with Caching using node-cache

## Run Locally

```
/project-root
│── /src
│   ├── /config
│   │   ├── database.js        # Sequelize MySQL Connection
│   │   ├── mongoose.js        # MongoDB Mongoose Connection
│   ├── /models
│   │   ├── /sequelize         # Sequelize Models (MySQL)
│   │   │   ├── index.js       # Sequelize ORM Setup
│   │   │   ├── user.model.js  # Example Sequelize Model
│   │   │   ├── order.model.js # Example Sequelize Model
│   │   ├── /mongoose          # Mongoose Models (MongoDB)
│   │   │   ├── index.js       # Mongoose Models Import
│   │   │   ├── category.model.js  # Example Mongoose Model
│   │   │   ├── product.model.js   # Example Mongoose Model
│   ├── /enums
│   │   ├── Status.js          # Common Status Enum
│   │   ├── UserRole.js        # Common User Role Enum
│   ├── /migrations            # Sequelize Migrations
│   ├── /seeders               # Sequelize Seed Data
│   ├── /repositories          # Data Access Layer (For Clean Code)
│   │   ├── user.repository.js # Repository for Sequelize (MySQL)
│   │   ├── category.repository.js # Repository for Mongoose (MongoDB)
│   ├── /services              # Business Logic Layer
│   │   ├── user.service.js    # User Service (MySQL)
│   │   ├── category.service.js # Category Service (MongoDB)
│   ├── /controllers           # Controllers (Express.js Routes)
│   │   ├── user.controller.js # Handles Sequelize Models
│   │   ├── category.controller.js # Handles Mongoose Models
│   ├── /routes
│   │   ├── user.routes.js     # Routes for MySQL (Sequelize)
│   │   ├── category.routes.js # Routes for MongoDB (Mongoose)
│   ├── /middlewares           # Express.js Middlewares
│   ├── /utils                 # Helper Functions
│   ├── app.js                 # Main Express App
│   ├── server.js              # Start Server
│── /tests                     # Unit & Integration Tests
│── .env                       # Environment Variables
│── package.json               # Dependencies
│── README.md                  # Project Documentation
```

## Run Locally

Clone the project

```bash
  git clone https://github.com/raviyatechnical/learn-nodejs
```

Go to the project directory

```bash
  cd learn-nodejs
```

Copy .env.example to .env
```bash
  cp .env.example .env
```

Install dependencies

```bash
  npm install
```

Start the server for development

```bash
  npm run dev
```

## Run Server 

Start the server

```bash
  npm run start
```

## JWT Token

```bash
  node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

## Tech Stack

**Client:** Coming Soon

**Server:** Node, Express

**Database:** MongoDB, MySQL (Sequelize)
 
## Authors

- [@bhargavraviya](https://www.github.com/bhargavraviya)

## Lessons Learned

What did you learn while building this project? What challenges did you face and how did you overcome them?

[LEARN.md](LEARN.md)

## License

[MIT](https://choosealicense.com/licenses/mit/)