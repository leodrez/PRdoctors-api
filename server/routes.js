import express from 'express';
const routes = express();

import doctorCtrl from './controllers/doctorCtrl';

// Doctor routes
routes.get('/doctors', doctorCtrl.getAll);
routes.post('/doctors/new', doctorCtrl.post);
routes.get('/doctors/:speciality?', doctorCtrl.getBySpeciality);

export default routes;
