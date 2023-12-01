const express = require('express');
const cors = require('cors');

const app = express();

// Habilitar o middleware CORS
app.use(cors());

// Rotas da sua aplicação
app.get('/', (req, res) => {
  res.send('Sua aplicação está funcionando!');
});

// Porta para a aplicação ou porta padrão 3000
const port = process.env.PORT || 4000;

// Inicializar o servidor
app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});