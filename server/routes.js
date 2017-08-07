import express from 'express';
const routes = express();

import doctorCtrl from './controllers/doctorCtrl';

// Doctor routes
routes.post('/doctors/add', doctorCtrl.post);
//route.get('/doctors', doctorCtrl.getAll);
//route.get('/doctors/:id', doctorCtrl.get);

export default routes;
