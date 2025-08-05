import sequelize from "./database/connection.js";
import { User } from "./models/User.js";

try {
  await sequelize.sync();
  console.log("Deu bom!");
} catch (error) {
  console.error("Deu ruim", error);
}
