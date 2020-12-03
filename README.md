# crudAPI
I am familiarizing myself with node, express and other tools by building a basic CRUD API.
This is a folder that I saved all of my work in. The way it is currently written is that it sets up the CRUD on your machine's localhost port 5000.
The next steps I will take are to connect a database to it, probably using MongoDB.
For now, there is no database, it just creates a temporary array while the server is running. All info is lost after the server stops.
In order to test it out, just download the folder. Go into it from the terminal, and run npm start. It's scripted to begin/update the server right off the bat.
I also used POSTMAN for testing the functionality, so I recommend using that for testing.

the objects it is set up for are of the form:
{
  "firstName": string,
  "lastName": string,
  "age": int
}
