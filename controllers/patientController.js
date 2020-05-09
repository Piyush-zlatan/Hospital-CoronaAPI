const Patient = require('../models/patient');
const Report = require('../models/report');

module.exports.register = async function (req, res) {

    let patient = await Patient.findOne({phoneNumber:req.body.phoneNumber});
    if (patient) {
        return res.json({
            message: 'Patient Already Registered..!!',
            data: patient
        });
    } else {
       // console.log(req.body);
      let data =  await Patient.create(req.body, function (err, patient) {
            if (err) {
                console.log(err);
                return res.json(400, {
                    message: 'Error while registering Patient!'
                });
            }
            return res.json(200, {
                message: 'Patient Successfully registered!!',
                data: data
            });
        })
    }
}

module.exports.createReport = async function (req, res) {

    try {
      
        console.log(req.params.id);
        let patient = await Patient.findById(req.params.id);
        console.log(req.user._id);
        if (patient != null) {
            let report = await Report.create({
                doctor: req.user._id,
                status: req.body.status,
                patient: req.params.id
            });
            patient.reports.push(report);
            patient.save();

            return res.json(200, {
                data: {
                    report: report
                },
                message: 'Report Created..!!!'
            });
        }



    } catch (err) {
        console.log('Error:', err);
        return res.json(400, {
            message: 'Failed to create the report..!!'
        });
    }

}

module.exports.allReports = async function(req,res){

    try{
        // finding all the reports from patient id 
        let report = await Report.find({patient: req.params.id})
                                .sort([["createdAt", -1]])
                                .exec();

        if(report){
            return res.json(200,{
                message:'Here are the reports..!!!',    //Success
                report : report
            })
        }else{
            return res.json(404,{
                message:'Not Found..!!'     //Failure
            })
        }

    }catch(err){
        console.log('Error:', err);
        return res.json(400, {
            message: 'Failed to Find the Patient..!!'
        });
    }

}