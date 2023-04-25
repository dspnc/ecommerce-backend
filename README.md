# ecommerce-backend

## Description [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
Simple Express.js backend for an ecommerce site that utilizes MySQL for storing/retrieving data

    

  ## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributing](#contributing)
5. [Testing](#tests)
6. [Questions](#questions)

## Installation
First install the required node packages including mysql2, sequelize, dotenv, and express
Connect to mysql and run the db/schema.sql to create the database, and use "npm run seed" to run the index.js in the seeds folder to seed data to the database.
Then run "npm start" to start the server.

## Usage
After the server is running, you can visit different endpoints like /api/products and /api/categories and /api/tags to see the data returned from the API, and POST, PUT, and DELETE calls can be made to alter or add data to the database through the server.

## License
This project was created under the MIT license

## Testing
Test the app in Insomnia at the 3 different endpoints by running different POST, PUT, and DELETE calls to modify the data, then run GET to see the updated data returned from the database.

## Questions
View my GitHub profile [here](https://github.com/dspnc)  

To reach out directly, please email me at dspence.hill@gmail.com

Here is a link to a screencast of the app in action: [video](https://drive.google.com/file/d/1UqwdVWTam9EBK69_3QmRtvbpUWVX93Zu/view)






