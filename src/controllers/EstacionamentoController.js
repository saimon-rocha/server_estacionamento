// src/controllers/TarefasController.js
const Tarefas = require('../models/Tarefas'); // Importa o modelo de Tarefas

class TarefasController {
    // Método para listar todas as tarefas
    static async index(req, res) {
        try {
            const tarefas = await Tarefas.findAll();
            return res.status(200).json(tarefas.length > 0 ? tarefas : []); // Retorna array vazio se não houver tarefas
        } catch (error) {
            console.error('Erro ao buscar tarefas:', error.message);
            return res.status(500).json({ error: "Erro ao buscar tarefas" }); // Retorna um objeto de erro
        }
    }

    // Método para criar uma nova tarefa
    static async create(req, res) {
        const { title, description } = req.body;  // Desestruturação do corpo da requisição

        try {
            // Criando a nova tarefa no banco de dados
            const newTarefa = await Tarefas.create({
                title,
                description
            });

            // Retorna sucesso com a nova tarefa criada
            return res.status(201).json({ message: 'Tarefa criada com sucesso!', tarefa: newTarefa });
        } catch (error) {
            console.error('Erro ao criar tarefa:', error);  // Exibe o erro no console
            return res.status(500).json({ message: 'Erro ao criar tarefa.' });  // Retorna erro genérico
        }
    }

    // Método para deletar uma tarefa
    static async delete(req, res) {
        const { id } = req.params;  // Obtém o ID da tarefa a ser deletada

        try {
            // Busca a tarefa no banco de dados
            const tarefa = await Tarefas.findByPk(id);
            if (!tarefa) {
                return res.status(404).json({ message: 'Tarefa não encontrada!' });
            }

            // Deleta a tarefa
            await tarefa.destroy();

            // Retorna uma resposta de sucesso
            return res.status(200).json({ message: 'Tarefa deletada com sucesso!' });
        } catch (error) {
            console.error('Erro ao deletar tarefa:', error);
            return res.status(500).json({ message: 'Erro ao deletar tarefa.' });
        }
    }
}

module.exports = TarefasController;  // Exporta o controlador para ser utilizado nas rotas
