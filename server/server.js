// app.js
import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import dbconfig from './db/db.js';



dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use('/api/auth', router);

dbconfig()

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
