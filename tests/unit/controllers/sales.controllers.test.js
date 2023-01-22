// const chai = require('chai');
// const sinon = require('sinon');
// const sinonChai = require('sinon-chai');

// const { expect } = chai;
// chai.use(sinonChai);

// const salesService = require('../../../src/services/salesService');
// const salesController = require('../../../../src/controllers/salesController');
// const { sales } = require('./mocks/sales.mock.controllers');

// describe('Teste de unidade do salesControllers', function () {
//   describe('criando as sales', function () {
//     it('Deve retornar o status 201 e as vendas', async function (){
//       //Arranjo
//       const res = {};
//       const req = {};
//       res.status = sinon.stub().returns(res);
//       res.json = sinon.stub().returns();
//       sinon.stub(salesService, 'registerSalesMany')
//       .resolves(sales);
//       //AÇÃO
//       await salesController.registerSalesMany(req, res);
//       //ASSERÇÃO
//       expect(res.status).to.have.been.calledWith(201);
//       expect(res.json).to.have.been.calledWith(sales);
//     });
//   });
//   afterEach(function () {
//     sinon.restore();
//   });
// });
