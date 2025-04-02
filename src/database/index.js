const { Sequelize } = require('sequelize');
const dbConfig = require('../config/db'); // Caminho para o arquivo db.js

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
  // DATABASE_URL: dbConfig.DATABASE_URL,
  host: dbConfig.host,
  port: dbConfig.port,
  dialect: dbConfig.dialect,
  dialectOptions: dbConfig.dialectOptions
});

sequelize.authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
  })
  .catch(err => {
    console.error('Erro ao conectar ao banco de dados:', err);
    console.log(dbConfig);
  });

module.exports = sequelize;
