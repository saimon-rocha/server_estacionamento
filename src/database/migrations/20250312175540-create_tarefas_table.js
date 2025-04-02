module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('estacionamento', {
      id_estacionamento: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      placa: {
        type: Sequelize.STRING(7), // Definição adequada para a placa
        allowNull: false,
      },
      dt_entrada: {
        type: Sequelize.DATEONLY, // Apenas a data sem hora
        allowNull: false,
      },
      hr_entrada: {
        type: Sequelize.TIME,
        allowNull: false,
      },
      dt_saida: {
        type: Sequelize.DATEONLY,
        allowNull: true, // Permitido ser nulo no momento da entrada
      },
      hr_saida: {
        type: Sequelize.TIME,
        allowNull: true, // Permitido ser nulo no momento da entrada
      },
      vl_estacionamento: {
        type: Sequelize.DECIMAL(10,2), // Corrigido o formato
        allowNull: false,
      },
      vl_total: {
        type: Sequelize.DECIMAL(10,2), // Corrigido o formato
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('estacionamento'); // Corrigido o nome da tabela
  }
};
