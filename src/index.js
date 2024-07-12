import express from 'express';
import cors  from 'cors';
import bcrypt from 'bcrypt';

const app = express()

app.use(cors())

app.use(express.json())

app.listen(8080, () => console.log('Servidor iniciado'));

const axios = require('axios');

async function fetchData() {
    try {
        const response = await axios.get('https://rickandmortyapi.com/api');
        console.log(response.data);
    } catch (error) {
        console.error('Erro ao fazer a requisição:', error);
    }
}

fetchData();