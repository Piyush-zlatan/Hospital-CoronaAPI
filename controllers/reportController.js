const Report = require('../models/report');


// Finding report of a particular status
module.exports.reports = async function (req, res) {

    try {
        let report = await Report.find({ status: req.param.status });
        if (report) {
            return res.json(200, {
                message: ' Here are all the reports of this type',
                data: report
            })
        } else {
            return res.json(404, {
                message: 'No report Found!!'
            });
        }
    } catch (err) {
        return res.json(400, {
            message: 'Failed to Find the Reports..!!'
        });
    }

}