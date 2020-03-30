const mongoose = require('mongoose');

const ReportSchema = new mongoose.Schema({
    doctor:{            //Creating relation between doctor and the report
        type:mongoose.Schema.Types.ObjectId,
        ref:'doctor'
    },
    status:{
        type: String,
        enum:['Negative', 'Travelled-Quarantine', 'Symptoms-Quarantine', 'Positive-Admit'],
        default:'Negative'
    },
    //Creating relation between paitent and report
    patient:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'patient'
    }

},{timestamps:true})

const Report = mongoose.model('Report',ReportSchema);
module.exports = Report;