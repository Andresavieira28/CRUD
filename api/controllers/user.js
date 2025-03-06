import { db } from "../db.js";

export const getUsers = (_, res) => {
  const q = "SELECT * FROM usuarios";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const addUser = (req, res) => {
  const { nome, email, fone, data_contratacao, cargo, gerente } = req.body;

  // Verificando se todos os campos necessários foram fornecidos
  if (!nome || !email || !fone || !data_contratacao || !cargo || !gerente) {
    return res.status(400).json("Todos os campos são obrigatórios.");
  }

  console.log("Dados recebidos para adicionar usuário:", req.body);

  const q =
    "INSERT INTO usuarios(`nome`, `email`, `fone`, `data_contratacao`, `cargo`, `gerente`) VALUES(?, ?, ?, ?, ?, ?)";

  const values = [nome, email, fone, data_contratacao, cargo, gerente];

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


export const updateUser = (req, res) => {
  const q =
    "UPDATE usuarios SET `nome` = ?, `email` = ?, `fone` = ?, `data_contratacao` = ?, `cargo` =?, `gerente` =? WHERE `id` = ?";

  const values = [
    req.body.nome,
    req.body.email,
    req.body.fone,
    req.body.data_contratacao,
    req.body.cargo,
    req.body.gerente,
  ];

  db.query(q, [...values, req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuário atualizado com sucesso.");
  });
};

export const deleteUser = (req, res) => {
  const q = "DELETE FROM usuarios WHERE `id` = ?";

  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuário deletado com sucesso.");
  });
};