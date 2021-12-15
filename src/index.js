const { response } = require("express");
const express = require("express");

const app = express();

app.use(express.json()); // middleware JSON

/**
 * GET ‒ Buscar uma informação no servidor
 * POST ‒ Inserir uma informação no servidor
 * PUT ‒ Alterar uma informação no servidor
 * PATCH ‒ Alterar uma informação específica
 * DELETE ‒ Deletar uma informação no servidor
 */

/**
 * Tipos de parâmetros
 *
 * Route params: identificam um recurso para edição/deleção/buscar
 * Query params: paginação / filtro
 * Body params: objetos (JSON); inserção/alteração
 */

app.get("/courses", (req, res) => {
  const query = req.query;
  console.log(query);
  return res.json(["Curso 1", "Curso 2", "Curso 3"]);
});

app.post("/courses", (req, res) => {
  const body = req.body;
  console.log(body);
  return res.json(["Curso 1", "Curso 2", "Curso 3", "Curso 4"]);
});

app.put("/courses/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);
  return res.json(["Curso 6", "Curso 2", "Curso 3", "Curso 4"]);
});

app.patch("/courses/:id", (req, res) => {
  return res.json(["Curso 6", "Curso 7", "Curso 3", "Curso 4"]);
});

app.delete("/courses/:id", (req, res) => {
  return res.json(["Curso 6", "Curso 7", "Curso 4"]);
});

app.listen(3333);
