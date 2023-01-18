const { expect } = require('chai');
const sinon = require('sinon');
const productsModel = require('../../../src/models/productsModel');

const connection = require('../../../src/models/db/connection');
const products  = require('../models/mocks/products.model.mock');

describe('Testes de unidade do model Products', function () {
  it('Recupera a lista de todos os produtos', async function () {
    //Arrange(Arranjo)
    sinon.stub(connection, 'execute').resolves([products]);
    //Act(Ação)
    const result = await productsModel.getAll();
    //Assert(asserção)
    expect(result).to.be.deep.equal(products);
  });
  it('Recupera apenas um produto a partir do seu id', async function () {
    //Arrange(Arranjo)
    sinon.stub(connection, 'execute').resolves([[products[0]]]);
    //Act(Ação)
    const result = await productsModel.getById(1);
    //Assert(Asserção)
    expect(result).to.be.deep.equal(products[0]);
  })
  afterEach(function () {
    sinon.restore();
  });
});