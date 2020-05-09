const index = require('../index');
const chai = require('chai');
const expect = require('chai').expect;
const request = require('supertest');
const chaiHttp = require('chai-http');
const mongoose = require('mongoose');
const db = require('../config/mongoose');

//const {except} = chai;

chai.use(chaiHttp);
let should = chai.should(); 



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
        token = resToken.body.data.token;       
        
    })    




    it("should retrieve the token",async () => {
            return await loginWithDefaultUser().then(res => {
                console.log(res.body);
                res.status.should.equal(200);
                res.body.data.token.should.not.be.empty;
            });
        
    });



   
    it('OK, Creating POST test',async(done)=>{


        request(index).post('/patients/5eb63ff303259a23988d8ec2/all_reports')
        .set("Authorization", token)
        .send()
        .expect(200)
        .then(()=>{
            return request(index).get('/patients/5eb63ff303259a23988d8ec2/all_reports')
                        .set("Authorization", token)    
                        .send()       
                        .expect(200)
                        .expect(res =>{                
                            // res.body.should.be.an('object').to.have.lengthOf(1);    
                            // let item = res.body[0];                            
                            // item.should.have.property('title').to.equal(newProject.title);
                            // item.should.have.property('summary').to.equal(newProject.summary);
                            // item.should.have.property('description').to.equal(newProject.description);
                            console.log(res);
                        }); 
                    }).catch(done)
    })         





            //console.log(token);
            // await request(index).post('/patients/5eb63ff303259a23988d8ec2/all_reports')
            // .set("Authorization", token)
            // .send()
            // .expect(200)
            // .expect((res)=>{
            //     console.log(res);
            // })
            // .then(()=>{
            //     request(index).get('/patients/5eb63ff303259a23988d8ec2/all_reports')
            //     .set("Authorization", token)
            //     .send()
            //     .expect(200,done);
            // }).catch(done)

          







    
        // request(index).get('/patients/5eb63ff303259a23988d8ec2/all_reports')
        //                 .then((res)=>{
        //                     const body = res.body;
        //                     console.log(body);
        //                     expect(res.statusCode).to.equal(200);
        //                     // expect(body).to.contain.property('_id');
        //                     // expect(body).to.contain.property('status');
        //                     done();
        //                 }).catch(done);    
       
   // });
})