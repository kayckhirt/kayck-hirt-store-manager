const { expect } = require('chai');
const sinon = require('sinon');
const productsService = require('../../../src/services/productsService');
const productsModel = require('../../../src/models/productsModel');

const allProducts = require('./mocks/products.service.mock');

describe('Verifica a camada Service Products', function () {
  it('Listagem de produtos', async function () {
    //Arranjo
    sinon.stub(productsModel, 'getAll').resolves(allProducts);
    //ação
    const result = await productsService.getAll();
    //Asserção
    expect(result).to.be.deep.equal(allProducts);
  });

describe('Buscando por produtos com id especifico', function () {
  it('retorna um erro caso receba um ID inválido', async function() {
      //Ação
      const result = await productsService.getById('a');
      //Asserção
      expect(result.type).to.equal('PRODUCT_NOT_FOUND');
      expect(result.message).to.equal('Product not found');
    });
  it('retorna um produto caso ID válido', async function() {
      //Arranjo
      sinon.stub(productsModel, 'getById').resolves(allProducts[0]);
      //Ação
      const result = await productsService.getById(1);
      //Asserção
      expect(result.type).to.equal(null);
      expect(result.message).to.equal(allProducts[0]);
    });
  });
  afterEach(function() {
    sinon.restore();
  });
});