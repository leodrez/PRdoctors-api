import db from '../models/index';

const doctorCtrl = {};

doctorCtrl.post = (req, res) => {
  const {
    firstName,
    lastName,
    speciality,
    treatments,
    phone,
    address
  } = req.body;

  const doctor = new db.Doctor({
    firstName,
    lastName,
    speciality,
    treatments,
    phone,
    address
  });

  doctor.save().then((newDoctor) => {
    return res.status(200).json({
      success: true,
      data: newDoctor
    });
  }).catch((err) => {
    res.status(500).json({
      message: err 
    }); 
  });
};

doctorCtrl.getAll = (req, res) => {
  db.Doctor.find({}).then((doctors) => {
    return res.status(200).json({
      success: true,
      data: doctors
    });
  }).catch((err) => {
    res.status(500).json({
      message: err 
    }); 
  });
};

export default doctorCtrl;
