const { expect } = require('chai');
const sinon = require('sinon');
const salesService = require('../../../src/services/salesService');
const salesModel = require('../../../src/models/salesModel');

const sales = require('./mocks/sales.service.mock');

describe('Verifica a camada Service Sales', function() {
  it('Lista de Sales', async function () {
    sinon.stub(salesModel, 'registerSalesMany').resolves(sales);

    const result = await salesService.registerSalesMany();
    expect(result).to.be.deep.equal(sales)
  });
});
