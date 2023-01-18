const express = require('express');
const routes = require('./routes/router');

const app = express();

// não remova esse endpoint, é para o avaliador funcionar, blz
app.get('/', (_request, response) => {
  response.send();
});

app.use('/products', routes);
// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;