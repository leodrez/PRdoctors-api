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

  let doctorId = req.params.doctorId;

  db.Doctor.find({ _id: doctorId })
    .then((doctor) => {
      return res.status(200).json({
        success: true,
        data: doctor
      }); 
    })
    .catch((err) => {
      res.status(500).json({
        message: err 
      });
    });
};


doctorCtrl.updateDoctor = (req, res) => {

  let doctorId = req.params.doctorId; 
  let newData = req.body;

  db.Doctor.findByIdAndUpdate(doctorId, newData)
    .then((doctor) => {
      return res.status(200).json({
        success: true,
        data: doctor
      }); 
    })
    .catch((err) => {
      res.status(500).json({
        message: err 
      });
    });
};

doctorCtrl.deleteDoctor = (req, res) => {
  
  let doctorId = req.params.doctorId;

  db.Doctor.findByIdAndRemove(doctorId)
    .then((doctor) => {
      return res.status(200).json({
        success: true,
        data: doctor
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err 
      });
    });
};
export default doctorCtrl;
