import express from 'express';
const routes = express();

import doctorCtrl from './controllers/doctorCtrl';

// Doctor routes
routes.post('/doctors/new', doctorCtrl.newDoctor);
routes.get('/doctors', doctorCtrl.getAllDoctors);
// routes.get('/doctors/:id', doctorCtrl.getDoctorById);
// routes.put('/doctors/update/:id', doctorCtrl.put);
// routes.delete('/doctors/delete/:id', doctorCtrl.delete);

export default routes;
