import express from "express";
import sequelize from "../src/database/connection.js";
import userRouter from "./routers/userRouter.js";

const app = express();
const port = 3000;

app.use("/users", userRouter);

app.get("/", (req, res) => {
  res.send("Olá,mundo!!");
});

const startServer = async () => {
  try {
    await sequelize.sync();
    console.log("Deu bom!");
    app.listen(port, () => {
      console.log(`Servidor rodando na porta ${port}`);
    });
  } catch (error) {
    console.error("Deu ruim", error);
  }
};

startServer();
