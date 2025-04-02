const { Model, DataTypes, INTEGER } = require('sequelize');
const sequelize = require('../database');

class Estacionamento extends Model { }

Estacionamento.init(
  {
    id_estacionamento: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    placa: {
      type: DataTypes.STRING(7), // Corrigido para suportar placas alfanuméricas
      allowNull: false,
    },
    dt_entrada: {
      type: DataTypes.DATEONLY, // DATE sem hora
      allowNull: false,
    },
    hr_entrada: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    dt_saida: {
      type: Datatypes.DATEONLY,
    },
    hr_saida: {
      type: DataTypes.TIME,
    },
    vl_estacionamento: {
      type: Datatypes.DECIMAL(10.2),
    },
    vl_total: {
      type: Datatypes.DECIMAL(10.2),
    },
  },
  {
    sequelize,            // Conexão com o banco de dados
    modelName: 'Estacionamento', // Nome do modelo
    tableName: 'estacionamento', // Nome da tabela no banco de dados
    timestamps: false,     // Adiciona os campos 'createdAt' e 'updatedAt'
  }
);

module.exports = Estacionamento;
