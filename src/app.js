import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import auth from './auth/main_auth.js';
import mongoConnect from './config/database.js';
import empleadosRouter from './routes/empleados.router.js';
import designsRouter from './routes/designs.router.js';
import usersRouter from './routes/users.router.js';


const app = express();
export const port = 4000;

mongoConnect();


app.use(express.json());
app.use(cookieParser());
app.use(cors());

//app.use(auth);
app.use('/users', usersRouter);
app.use('/empleados', empleadosRouter);
app.use('/designs', designsRouter);


app.use((req, res, next)  => {
  res.status(404).json({
    message: 'Endpoint Not Found'
  });
});


app.listen( port, () => {
  console.log(`Server running on port ${port}`);
});