<!-- ! ACCEPTANCE CRITERIA -->
GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page
WHEN I click on the Save icon
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column
WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column

<!-- ! Getting Started -->
On the back end, the application should include a db.json file that will be used to store and retrieve notes using the fs module.

The following HTML routes should be created:
<!-- TODO: -->
GET /notes should return the notes.html file.
<!-- TODO: -->
GET * should return the index.html file.

The following API routes should be created:
<!-- TODO: -->
GET /api/notes should read the db.json file and return all saved notes as JSON.
<!-- TODO: -->
POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).

<!-- ! Kris's Notes -->
// Front end is done, you are making the backend

// You will need to make a routes folder and two(three) files in this folder --> apiRoutes.js, and htmlRoutes.js (index.js) [Activity 22 solution has this]

// ***The path set in your router.*('/yourPathHere') for these files needs to reflect it's positioning relative to the path called in server.js -- Activity 22... router middleware

// You will need to make a server.js in the main directory of the app.

<!--* The mini-project is a gold mine of what you will need to complete this - server.js, routes/tips.js, and helpers/fsUtils.js as well as Activities 21/22 will be particularly helpful - how can the promisified readFile and writeFile be used?  -->

// If you are going to work on the Bonus section (I highly recommend this!), research how the array.filter() method can help with this task.  How would you go about making use of an id?