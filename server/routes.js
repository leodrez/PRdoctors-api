import express from 'express';
const routes = express();

import doctorCtrl from './controllers/doctorCtrl';

// Doctor routes
routes.post('/doctors/add', doctorCtrl.post);
routes.get('/doctors', doctorCtrl.getAll);

export default routes;
