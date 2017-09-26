import express from 'express';
const routes = express();

import doctorCtrl from './controllers/doctorCtrl';

// Doctor routes
routes.post('/doctors/new', doctorCtrl.newDoctor);
routes.get('/doctors', doctorCtrl.getAllDoctors);
routes.get('/doctors/:doctorId', doctorCtrl.getDoctorById);
routes.put('/doctors/update/:doctorId', doctorCtrl.updateDoctor);
// routes.delete('/doctors/delete/:id', doctorCtrl.delete);

export default routes;
