const express = require('express');
const productsController = require('./controllers/productsController');

const app = express();

// não remova esse endpoint, é para o avaliador funcionar, blz
app.get('/', (_request, response) => {
  response.send();
});

app.use('/products', productsController);
// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;