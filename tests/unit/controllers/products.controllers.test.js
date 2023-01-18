const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const productsService = require('../../../src/services/productsService');
const productsController = require('../../../src/controllers/productsController');
const { productListMock, productMock } = require('./mocks/products.mock.controllers');

describe('Teste de unidade do productsControllers', function () {
  describe('Listando os Produtos', function () {
    it('Deve retornar o status 200 e a lista de produtos', async function (){
      //Arranjo
      const res = {};
      const req = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(productsService, 'getAll')
      .resolves(productListMock);
      //AÇÃO
      await productsController.getAll(req, res);
      //ASSERÇÃO
      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(productListMock);
    });
    describe('Buscando por um produto pelo id', function () {
      it('Deve retornar o status 200 e o produto caso o id seja correto', async function () {
        //arranjo
        const res = {};
        const req = {
          params: { id: 1 },
        }
        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns();
        sinon.stub(productsService, 'getById')
        .resolves({ type: null, message: productMock });
        //ação
        await productsController.getById(req, res);
        //asserção
        expect(res.status).to.have.been.calledWith(200);
        expect(res.json).to.have.been.calledWith(productMock);
      });
      it('Deve retornar o status 404 e a mensagem de erro', async function () {
        const message = 'Product not found';
        const res = {};
        const req = {
          params: { id: 'JaodasNeves' },
        }
        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns();
        sinon.stub(productsService, 'getById')
        .resolves({ type: 'PRODUCT_NOT_FOUND', message:'Product not found' });
        //ação
        await productsController.getById(req, res);
        //asserção
        expect(res.status).to.have.been.calledWith(404);
        expect(res.json).to.have.been.calledWith({message});
      });
    });
  });
  afterEach(function () {
    sinon.restore();
  });
});