const express = require('express');
const routes = require('./routes/router');
const routeSales = require('./routes/routeSales');

const app = express();
app.use(express.json());
// não remova esse endpoint, é para o avaliador funcionar, blz
app.get('/', (_request, response) => {
  response.send();
});

app.use('/products', routes);
app.use('/sales', routeSales);
// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;
