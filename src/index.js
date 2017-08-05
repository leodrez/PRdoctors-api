import express from 'express';
const app = express();

import mongoose from 'mongoose';

import bodyParser from 'body-parser';
app.use(bodyParser.json());

app.listen(3000, () => {
  console.log('Server listening  on port 3000');
});

