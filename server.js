const express = require('express');
const app = express();
const connectDb =require('./database/connection')
app.use(express.json());
const openaiRouter = require('./routes/openai');
// Routes
const notesRouter = require('./routes/note');
app.use('/', notesRouter);
app.use('/', openaiRouter);


const PORT =  3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)

    connectDb()
   
})

module.exports = app;