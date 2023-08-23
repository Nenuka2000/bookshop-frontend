const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new Schema({

    name : {
        type : String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    gender:{
        type: String,
        requied: true
    }
})

const Student = mongoose.model("Student",studentSchema);

modeule.exports = Student;