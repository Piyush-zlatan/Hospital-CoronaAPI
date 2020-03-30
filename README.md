# Hospital-CoronaAPI
This is a simple API Application

1. Clone the repo by using 'git clone https://github.com/Piyush-zlatan/Hospital-CoronaAPI.git'

2. Install all the libraries by using npm install

3. Start the server by using npm start


The routes used in this app are:-

For registering Doctor
-> http://localhost:8000/doctors/register

For Doctor Login
-> http://localhost:8000/doctors/login

For Registering Patient
-> http://localhost:8000/register_patient

For creating report
-> http://localhost:8000/patients/:id/create_report  (Here :id is patient's id)

For Listing down all reports for a patient

->  http://localhost:8000/patients/:id/all_reports  (Here :id is patient's id)

For getting all the reports according to status of all the patients

->  http://localhost:8000/reports/:status (Here :status is report's status)
