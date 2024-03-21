const mongoose = require('mongoose')

const connectDb = async () => {

    try {
        await mongoose.connect("mongodb+srv://Hitec:4102EEwQODUEHJkZ@hitecdb.htrnbfc.mongodb.net/notes?retryWrites=true&w=majority")
        console.log(' db connected successfully')


    } catch (error) {
        console.log(error, 'db error')
    }


}

module.exports = connectDb;
