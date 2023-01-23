const { expect } = require('chai');
const sinon = require('sinon');
const salesService = require('../../../src/services/salesService');
const salesModel = require('../../../src/models/salesModel');

const sales = require('./mocks/sales.service.mock');

describe('Verifica a camada Service Sales', function() {
  afterEach(function () {
    sinon.restore();
  });
  // it('Verifica se recebe o id de sales', async function () {
  //   const id = 5;
  //   const newSale = { 
  //     id:5,
  //     itemsSold: [
  //     {
  //       "productId": 1,
  //       "quantity": 1,
  //     }
  //   ]
  //   }
  //   sinon.stub(salesModel, 'registerSalesMany').resolves(id);
  //   const result = await salesService.registerSalesMany(sales);
  //   expect(result).to.be.deep.equal(newSale)
  // });
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
