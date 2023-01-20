const { expect } = require('chai');
const sinon = require('sinon');
const salesModel = require('../../../src/models/salesModel');

const connection = require('../../../src/models/db/connection');
const sales  = require('../models/mocks/sales.model.mock');

describe('Teste de unidade do model Sales', function() {
  it('Cria a lista de Sales', async function() {
    sinon.stub(connection, 'execute').resolves([sales]);

    const result = await salesModel.registerSalesMany();

    expect(result).to.be.deep.equal(sales);
  });
  afterEach(function () {
    sinon.restore();
  });
});
