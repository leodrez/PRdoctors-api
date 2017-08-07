import express from 'express';
const app = express();

import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import routes from '../server/routes';

mongoose.Promise = global.Promise;
const dbpromise = mongoose.connect('mongodb://localhost:27017/prdoctors', {
  useMongoClient: true  
});
dbpromise.then(() => {
  console.log('DB running');
});

app.use(bodyParser.json());

app.use('/api', routes);

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

