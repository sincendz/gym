import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  "postgres://postgres:password@localhost:5432/gymjs"
);

try {
  await sequelize.authenticate();
  console.log("Conexão estabelecida com sucesso!");
} catch (error) {
  console.error("Erro ao conectar:", error);
}

export default sequelize;
