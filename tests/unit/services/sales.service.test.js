const { expect } = require('chai');
const sinon = require('sinon');
const salesService = require('../../../src/services/salesService');
const salesModel = require('../../../src/models/salesModel');

const sales = require('./mocks/sales.service.mock');

describe('Verifica a camada Service Sales', function() {
  it('Verifica se recebe o id de sales', async function () {
    const newId = 5;

    sinon.stub(salesModel, 'createSales').resolves(newId);

    const result = await salesService.registerSalesMany(sales);
    expect(result).to.be.deep.equal({id: newId, itemsSold: sales })
  });
  afterEach(function () {
    sinon.restore();
  });
  it('Verifica se ao receber um id que nao exista retorna: Product not found', async function () {
    const productnonexistent = [
      {
        "productId": 99,
        "quantity": 1
      }
    ];
    sinon.stub(salesModel, 'createSales').resolves(undefined);
    const result = await salesService.registerSalesMany(productnonexistent);
    expect(result.message).to.equal('Product not found');
  });
  afterEach(function () {
    sinon.restore();
  });
});
