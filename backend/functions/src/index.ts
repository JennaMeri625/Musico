import * as functions from 'firebase-functions';
import express from 'express';
import cors from 'cors';
import usersRouter from './routes/usersRouter';

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", usersRouter);

export const api = functions.https.onRequest(app);


