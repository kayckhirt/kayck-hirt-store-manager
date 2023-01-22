const { expect } = require('chai');
const sinon = require('sinon');
const salesModel = require('../../../src/models/salesModel');

const connection = require('../../../src/models/db/connection');
const sales  = require('../models/mocks/sales.model.mock');

describe('Teste de unidade do model Sales', function() {
  it('Cria a id de Sales', async function() {
    sinon.stub(connection, 'execute').resolves([{ insertId:5}]);

    const result = await salesModel.createSales(sales);

    expect(result).to.be.deep.equal(5);
  });
  afterEach(function () {
    sinon.restore();
  });
  it('Cria a id de Sales_products', async function() {
    sinon.stub(connection, 'execute').resolves([{ insertId:5}]);

    const result = await salesModel.registerSalesMany(sales);

    expect(result).to.be.deep.equal(5);
  });
});

