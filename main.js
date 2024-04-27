const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Configurando o middleware body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configurando o diretório estático
app.use(express.static(path.join(__dirname, 'public')));

// Rota para lidar com o envio do formulário de contato
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log("Nome: ${name}, Email: ${email}, Mensagem: ${message}");
  // Aqui você pode adicionar o código para enviar o e-mail ou salvar as mensagens em um banco de dados
  res.send('Mensagem recebida!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Servidor rodando na porta ${PORT}"));
