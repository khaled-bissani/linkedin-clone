const Job = require('../models/jobs.model');

const createJob = async(req,res) => {
    const {title, company_name, workplace, location, phone_number, employment, description, user_id}=req.body;
    try{
        const job = new Job();
        job.title= title;
        job.company_name=company_name;
        job.workplace=workplace;
        job.location= location;
        job.phone_number=phone_number;
        job.employment=employment;
        job.description=description;
        job.user_id=user_id;

        await job.save();
        res.send(job);
    }
    catch(err){
        res.status(400).json({
            message: err.message
        })
    }
}

module.exports={
    createJob
}