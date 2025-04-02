require('dotenv').config(); // Carrega as variáveis de ambiente
const { URL } = require('url'); // Importa a classe URL

// Cria um objeto URL a partir da string de conexão
// const dbUrl = new URL(process.env.DATABASE_URL);

// Extrai as partes da URL
// const username = dbUrl.username;
// const password = dbUrl.password;
// const host = dbUrl.hostname;
// const port = dbUrl.port;
// const database = dbUrl.pathname.split('/')[1]; // O nome do banco de dados vem após o "/"

// Exporta a configuração do Sequelize
// module.exports = {
//   username,
//   password,
//   database,
//   host,
//   port: port || 5432, // Porta padrão do PostgreSQL é 5432
//   dialect: process.env.DB_DIALECT || "postgres", // Dialeto padrão é o PostgreSQL
//   dialectOptions: {
//     ssl: {
//       require: true,
//       rejectUnauthorized: false, // Permite certificados autoassinados
//     },
//   },
// };

/*local*/
module.exports = {
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: process.env.DB_DIALECT,
  dialectOptions: process.env.DB_SSL === "true" ? { ssl: { require: true, rejectUnauthorized: false } } : {},
};
