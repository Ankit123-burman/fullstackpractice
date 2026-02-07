const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema({
    title:String,
    description:String,
})

const noteModle = mongoose.model('notes',noteSchema)

module.exports = noteModle