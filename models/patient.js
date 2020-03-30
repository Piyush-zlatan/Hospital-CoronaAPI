const mongoose = require('mongoose');


const  PatientSchema = new mongoose.Schema({
    phoneNumber:{
        type:Number,
        required:true
    },
    reports:[{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'report'
    }]
},{
    timestamps:true
});

const Patient = mongoose.model('Patient',PatientSchema);
module.exports = Patient;