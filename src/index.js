import express from 'express';
import cors  from 'cors';
import bcrypt from 'bcrypt';

const app = express()

app.use(cors())

app.use(express.json())

app.listen(8080, () => console.log('Servidor iniciado'));