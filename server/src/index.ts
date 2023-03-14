import express from "express"

const app = express()
const PORT = 3000

app.get("/", (req, res) => {res.send("Buscar dados de todas as tarefas")})
app.get("/tarefa/:id", (req, res) => {res.send("Buscar dados de uma tarefa")})
app.post("/tarefa", (req, res) => {res.send("Inserir uma tarefa")})
app.put("/tarefa", (req, res) => {res.send("Altear todos os dados de uma tarefa")})
app.patch("/tarefa/:id", (req, res) => {res.send("Alterar dados especifícos de uma tarefa")})
app.delete("/tarefa/:id", (req, res) => {res.send("Excluir uma tarefa")})


app.listen(PORT, () => (`HTTP server ir running on ${PORT}`))
