import express from "express";
import { addUser, deleteUser, getUsers, updateUser } from "../controllers/user.js";

const router = express.Router();

/**
 * Rota para obter todos os usuários.
 * Método HTTP: GET
 * URL: /
 */
router.get("/", getUsers);

/**
 * Rota para adicionar um novo usuário.
 * Método HTTP: POST
 * URL: /
 */
router.post("/", addUser);

/**
 * Rota para atualizar um usuário existente.
 * Método HTTP: PUT
 * URL: /:id
 * @param {string} id - ID do usuário a ser atualizado.
 */
router.put("/:id", updateUser);

/**
 * Rota para deletar um usuário.
 * Método HTTP: DELETE
 * URL: /:id
 * @param {string} id - ID do usuário a ser deletado.
 */
router.delete("/:id", deleteUser);

export default router;