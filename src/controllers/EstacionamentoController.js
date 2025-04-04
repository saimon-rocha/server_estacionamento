// src/controllers/EstacionamentoController.js
const Estacionamento = require('../models/Estacionamento'); // Importa o modelo de Estacionamento

class EstacionamentoController {
    // Método para listar
    static async index(req, res) {
        try {
            const estacionamento = await Estacionamento.findAll();
            return res.status(200).json(estacionamento.length > 0 ? estacionamento : []); // Retorna array vazio se não houver
        } catch (error) {
            console.error('Erro ao buscar estacionamento:', error.message);
            return res.status(500).json({ error: "Erro ao buscar estacionamento" }); // Retorna um objeto de erro
        }
    }

    // Método para criar
    static async create(req, res) {
        const { placa, dt_entrada, hr_entrada, dt_saida, hr_saida, saida, vl_estacionamento, vl_total } = req.body;  // Desestruturação do corpo da requisição
        try {
            // Criando nova no banco de dados
            const newEstacionamento = await Estacionamento.create({
                placa, dt_entrada, hr_entrada, dt_saida, hr_saida, saida, vl_estacionamento, vl_total
            });
            // Retorna sucesso com
            return res.status(201).json({ message: 'Entrada com Sucesso !', tarefa: newTarefa });
        } catch (error) {
            console.error('Erro ao criar tarefa:', error);  // Exibe o erro no console
            return res.status(500).json({ message: 'Erro ao dar entrada.' });  // Retorna erro genérico
        }
    }
    
    // Método para saída
    static async saida(req, res) {
    }
}

module.exports = EstacionamentoController;  // Exporta o controlador para ser utilizado nas rotas
