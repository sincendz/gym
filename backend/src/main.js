import express from "express";
import sequelize from "../src/database/connection.js";
import userRouter from "./routers/userRouter.js";
import planRouter from "./routers/planRouter.js";

const app = express();
const port = 3000;
app.use(express.json());

app.use("/users", userRouter);
app.use("/plans", planRouter);

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
