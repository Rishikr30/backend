/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('rishiDatabase');

// Insert a few documents into the courses collection.
db.getCollection('courses').insertMany([
  
  { "Name": "Java", "Price": 999, "Instructor": "Rishi" },
  { "Name": "JavaScript", "Price": 599, "Instructor": "Rishi" },
  { "Name": "Python", "Price": 899, "Instructor": "Rishi" },
  { "Name": "C++", "Price": 899, "Instructor": "Rishi" },
  { "Name": "C", "Price": 499, "Instructor": "Rishi" },
  { "Name": "Ruby", "Price": 399, "Instructor": "Rishi" },
  { "Name": "Web Dev", "Price": 1999, "Instructor": "Rishi" },
  { "Name": "DSA", "Price": 2999, "Instructor": "Rishi" },
  { "Name": "AI/ML", "Price": 1999, "Instructor": "Rishi" },
]);



// Print a message to the output window.
console.log("Done Inserting data");
