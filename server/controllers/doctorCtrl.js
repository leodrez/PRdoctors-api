import db from '../models/index';

const doctorCtrl = {};

doctorCtrl.newDoctor = (req, res) => {
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

doctorCtrl.getAllDoctors = (req, res) => {
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

doctorCtrl.getDoctorById = (req, res) => {

  let doctorId = req.params.id;

  db.Doctor.find({ _id: doctorId })
    .then((docs) => {
      return res.status(200).json({
        success: true,
        data: docs
      }); 
    })
    .catch((err) => {
      res.status(500).json({
        message: err 
      });
    });
};

export default doctorCtrl;
