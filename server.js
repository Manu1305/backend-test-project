const express = require('express');
const app = express();
const connectDb =require('./database/connection')
app.use(express.json());
const openaiRouter = require('./routes/openai');
// Routes
const notesRouter = require('./routes/note');
app.use('/', notesRouter);
app.use('/', openaiRouter);
// Start the server
const PORT =  3000;
app.listen(3000, () => {
    console.log("Server is running on port 3000")

    connectDb()
   
})