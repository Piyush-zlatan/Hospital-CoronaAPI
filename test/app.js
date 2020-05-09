const index = require('../index');
const chai = require('chai');
const request = require('supertest');
const chaiHttp = require('chai-http');
const db = require('../config/mongoose');

//const {except} = chai;

chai.use(chaiHttp);
let should = chai.should(); 


// Default user credentials
const userCredentials = {
    username: 'Ramesh', 
    password: 'ramu'
}

const loginWithDefaultUser = async () => {
    //let user = await getDefaultUser();
    return request(index).post("/doctors/login")
        .send({ "username": userCredentials.username, "password": userCredentials.password })
        .expect(200);
};



describe('Server!',()=>{

    let token;
    before(async ()=> {        
        //get token
        let resToken =  await loginWithDefaultUser();
        token = resToken.body.data.token;     //set the token  
        
    })    

    //Testing the get token function
    it("should retrieve the token",async () => {
            return await loginWithDefaultUser().then(res => {
           //     console.log(res.body);
                res.status.should.equal(200);
                res.body.data.token.should.not.be.empty;
            });
        
    });



   
    // it('OK, Creating POST test',async(done)=>{
    //     request(index).post('/patients/5eb63ff303259a23988d8ec2/all_reports')
    //     .set("Authorization",'Bearer' + token)
    //     .send()
    //     .expect(200)
    //     .then(()=>{
    //         return request(index).get('/patients/5eb63ff303259a23988d8ec2/all_reports')
    //                     // .set("Authorization",'Bearer' +  token)    
    //                     // .send()       
    //                     .expect(200)
    //                     .expect(res =>{                
    //                         // res.body.should.be.an('object').to.have.lengthOf(1);    
    //                         // let item = res.body[0];                            
    //                         // item.should.have.property('title').to.equal(newProject.title);
    //                         // item.should.have.property('summary').to.equal(newProject.summary);
    //                         // item.should.have.property('description').to.equal(newProject.description);
    //                         console.log(res);
    //                     }); 
    //                 }).catch(done)
    // })         

//Register patient
describe('/POST Reigister',()=>{
    it('New Patient', (done) => {
        const patient = {
          phoneNumber:12345673278283
        }
        request(index)
          .post('/register_patient')
          .set({"Authorization":'Bearer ' + token})
          .send(patient)
          .end((err, res) => {
            console.log(res.body);
            res.should.have.status(200);
             res.body.should.be.a('object');
             res.body.p.should.have.property('phoneNumber');
            done();
          });
      });

})


describe('/POST Report',()=>{
    
    it('Create Report',(done)=>{
        let report = {
            status:'Negative',
            patient:'5eb63ff303259a23988d8ec2'
        }
        request(index)
        .post("/patients/5eb63ff303259a23988d8ec2/all_reports")
        .set({"Authorization":'Bearer ' + token})
        .send(report)
        .expect(200)
            .end((err,res)=>{
                console.log('Bearer ' + token);
                done();
            })
        
       
    })
})
    
//Get All the reports
describe('/GET Report',()=>{

    it('Get Report',(done)=>{
        request(index)
        .get("/patients/5eb63ff303259a23988d8ec2/all_reports")
        .set({"Authorization":'Bearer ' + token})
        .expect(200)
            .end((err,res)=>{
                console.log('Bearer ' + token);
                done();
            })
        
       
    })
})

})