import express from "express";
import userRoutes from "./routes/users.js";
import cors from "cors";

const app = express();

// Middleware para permitir o uso de JSON nas requisições
app.use(express.json());

// Middleware para habilitar CORS (Cross-Origin Resource Sharing)
app.use(cors());

// Middleware para definir as rotas de usuários
app.use("/", userRoutes);

// Inicia o servidor na porta 8800
app.listen(8800, () => {
  console.log("Servidor rodando na porta 8800");
});