const Doctor = require('../../../models/doctor');
const jwt = require('jsonwebtoken');


//sign in and create a session for doctor
module.exports.login = async function(req,res){

 try{

    let doctor = await Doctor.findOne({username: req.body.username});

    if(!doctor || doctor.password != req.body.password){
        return res.json(401,{
            message: "Invalid username or password"
        });
    }
    // Returning JWT Token
    return res.json(200,{
        message: "SignIn Successfull",
        data:{
            token : jwt.sign(doctor.toJSON(),'corona',{expiresIn: 100000})
        }
    });
 }catch(err){
    console.log('Error',err);
    return res.json(500,{
        message: 'Internal Server Error'
    });
 }
} 


module.exports.register = function(req,res){

    Doctor.create(req.body, function(err, user) {
        if (err) {
            
            return res.json(400,{
                message:'Doctor with same name is already there'
            });
        }

        return res.json({
            message: 'New Doctor Registered!!',
        });
    });
}