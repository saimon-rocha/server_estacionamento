const { Router } = require('express');
const EstacionamentoController = require('./controllers/EstacionamentoController');

const estacionamentoRoutes = new Router();

estacionamentoRoutes.get('/',           EstacionamentoController.index); 
estacionamentoRoutes.post('/cadastrar', EstacionamentoController.create);
estacionamentoRoutes.post('/saida',     EstacionamentoController.create);


const routes = new Router();
// Associando cada roteador à rota principal
routes.use('/estacionamento', estacionamentoRoutes);

// Página inicial
routes.get('/', (req, res) => {
    res.redirect('/estacionamento/');
});

module.exports = routes;