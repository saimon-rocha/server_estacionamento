const { Router } = require('express');
const TarefasController = require('./controllers/TarefasController');

const tarefasRoutes = new Router();

tarefasRoutes.get('/', TarefasController.index); 
tarefasRoutes.post('/cadastrar', TarefasController.create);
tarefasRoutes.delete('/deletar/:id', TarefasController.delete);

const routes = new Router();
// Associando cada roteador à rota principal
routes.use('/tarefas', tarefasRoutes);

// Página inicial
routes.get('/', (req, res) => {
    res.redirect('/tarefas/');
});

module.exports = routes;