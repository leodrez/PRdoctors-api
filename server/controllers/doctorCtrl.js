import db from '../models/index';

const doctorCtrl = {};

doctorCtrl.post = (req, res) => {
  const {
    name,
    speciality,
    treatments,
    phone,
    address
  } = req.body;

  const doctor = new db.Doctor({
    name,
    speciality,
    treatments,
    phone,
    address
  });

  doctor.save().then((newDoctor) => {
    res.status(200).json({
      success: true,
      data: newDoctor
    });
  }).catch((err) => {
    res.status(500).json({
      message: err 
    }); 
  });
};

export default doctorCtrl;
