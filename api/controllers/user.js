import { db } from "../db.js";

/**
 * Obtém todos os usuários do banco de dados.
 * 
 * @param {Object} _ - Parâmetro não utilizado.
 * @param {Object} res - Objeto de resposta HTTP.
 */
export const getUsers = (_, res) => {
  const q = "SELECT * FROM usuarios";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

/**
 * Adiciona um novo usuário ao banco de dados.
 * 
 * @param {Object} req - Objeto de requisição HTTP.
 * @param {Object} res - Objeto de resposta HTTP.
 */
export const addUser = (req, res) => {
  const { nome, email, fone, data_contratacao, cargo, gerente, salario } = req.body;

  // Verificando se todos os campos necessários foram fornecidos
  if (!nome || !email || !fone || !data_contratacao || !cargo || !gerente || !salario) {
    return res.status(400).json("Todos os campos são obrigatórios.");
  }

  console.log("Dados recebidos para adicionar usuário:", req.body);

  const q =
    "INSERT INTO usuarios(`nome`, `email`, `fone`, `data_contratacao`, `cargo`, `gerente`, `salario`) VALUES(?, ?, ?, ?, ?, ?,?)";

  const values = [nome, email, fone, data_contratacao, cargo, gerente, salario];

  // Verificando os valores antes de enviar ao banco de dados
  console.log("Consultando com os valores:", values);

  db.query(q, values, (err, result) => {
    if (err) {
      console.error("Erro ao tentar inserir no banco:", err);
      return res.status(500).json({ message: "Erro no banco de dados", error: err });
    }

    console.log("Usuário criado com sucesso:", result);
    return res.status(200).json("Usuário criado com sucesso.");
  });
};

/**
 * Atualiza um usuário existente no banco de dados.
 * 
 * @param {Object} req - Objeto de requisição HTTP.
 * @param {Object} res - Objeto de resposta HTTP.
 */
export const updateUser = (req, res) => {
  const q =
    "UPDATE usuarios SET `nome` = ?, `email` = ?, `fone` = ?, `data_contratacao` = ?, `cargo` =?, `gerente` =?, `salario` =? WHERE `id` = ?";

  const values = [
    req.body.nome,
    req.body.email,
    req.body.fone,
    req.body.data_contratacao,
    req.body.cargo,
    req.body.gerente,
    req.body.salario,
  ];

  db.query(q, [...values, req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuário atualizado com sucesso.");
  });
};

/**
 * Deleta um usuário do banco de dados.
 * 
 * @param {Object} req - Objeto de requisição HTTP.
 * @param {Object} res - Objeto de resposta HTTP.
 */
export const deleteUser = (req, res) => {
  const q = "DELETE FROM usuarios WHERE `id` = ?";

  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuário deletado com sucesso.");
  });
};