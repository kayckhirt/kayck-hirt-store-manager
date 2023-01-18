const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const productsService = require('../../../src/services/productsService');
const productsController = require('../../../src/controllers/productsController');
const { productListMock } = require('./mocks/products.mock.controllers');

describe('Teste de unidade do productsControllers', function () {
  describe('Listando os Produtos', function () {
    it('Deve retornar o status 200 e a lista de produtos', async function (){
      //Arranjo
      const res = {};
      const req = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(productsService, 'getAll')
      .resolves({ type: null, message:productListMock });
      //AÇÃO
      await productsController.getAll(req, res);
      //ASSERÇÃO
      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(productListMock);
    });
  });
  afterEach(function () {
    sinon.restore();
  });
});