const mongoose = require('mongoose');

//Setting up doctor Schema
const DoctorSchema = new mongoose.Schema({

    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
},{
    timestamps:true
}) 

const Doctor = mongoose.model('Doctor',DoctorSchema);
module.exports = Doctor;