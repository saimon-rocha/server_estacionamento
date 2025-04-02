// src/app.js
const express = require('express');
const cors = require('cors');
const routes = require('./routes'); // Importa as rotas
const database = require('./database'); // Conexão com o banco de dados


const app = express();
const port = 3000;

// Middleware para analisar o corpo da requisição em formato JSON
app.use(express.json());

// Habilitar CORS para o seu frontend no Vercel)
app.use(cors({
  origin: [
    'https://gerenciador-tarefas-e2h2ap4cx-saimon-rochas-projects.vercel.app',
    'https://gerenciador-tarefas-gold.vercel.app'
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE']
}));

// Usando as rotas definidas em outro arquivo
app.use('/', routes);

module.exports = app; // Exporta a aplicação para testes ou outra configuração
