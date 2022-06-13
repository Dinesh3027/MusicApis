# MusicApis

A local restful style API, capable of extracting a randomised list of songs from a database table, along with associated artists for each song.

Application is developed in `node.js`, `Express.js`, [PostgresSQL npm module `pg`](https://node-postgres.com/)

Please refer to the `apis_collection` folder to consume the API. You import the file into the `Postman` Application and test the API's while application is running locally.

As per the plan, we can futher fragment the database few more table. Something similar as below:

 - Songs
 - Artists
 - Albums
 - Genre
 - Favorites

 But due to lack of time, I have used only tables and only with six records to test and develop the APIs.

 Commands used to run the project:

 - `npm init`
 - `npx express-generator`
 - `npm install pug`
 - `npm install node-postgres`

 Please find the schema in the `queries` folder, `schema.sql`. 

 Please run the insert query with few records on `songs` and `artists` table before starting the application.

 Thanking you
