// src/server.js
const app = require('./app'); // Importa a aplicação do app.js

const port = 3000;

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
