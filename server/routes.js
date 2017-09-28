import express from 'express';
const routes = express();

import doctorCtrl from './controllers/doctorCtrl';

// Doctor routes
routes.post('/doctors/new', doctorCtrl.newDoctor);
// Get all doctors. { _isDeleted: true } wont show
routes.get('/doctors', doctorCtrl.getDoctors);
// Get ALL doctors from db including { _isDeleted: true }
routes.get('/doctors/all', doctorCtrl.getAllDoctors);
routes.get('/doctors/:doctorId', doctorCtrl.getDoctorById);
routes.put('/doctors/update/:doctorId', doctorCtrl.updateDoctor);
// Doctor _isDeleted field changed to true
routes.put('/doctors/delete/:doctorId', doctorCtrl.deleteDoctor);
// Doctor _isDeleted field changed back to false
//routes.put('/doctors/recover/:doctorId', doctorCtrl.recoverDoctor);
// Doctor deleted from db
routes.delete('/doctors/destroy/:doctorId', doctorCtrl.destroyDoctor);


export default routes;
