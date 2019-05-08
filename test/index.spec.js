var chai = require('chai');
var expect = chai.expect;
var cpf = require('../lib/index');

describe('index lib', () => {
  describe('cpfValidator', () => {

    it('Verifica se cpf é valido', () => {
      expect(cpf.cpfValidator('22861056851')).to.equal(true);
    })

    it('Verifica se cpf NÃO é valido', () => {
      expect(cpf.cpfValidator('22861056852')).to.equal(false);
    })

    
    it('Verifica se cpf possui menos de 11 digitos', () => {
      expect(cpf.cpfValidator('22861056')).to.equal(false);
    })

    it('Verifica se cpf são do tipo número', () => {
      expect(cpf.cpfValidator('a2286105685')).to.equal(false);
    })

    it('Verifica se o campo cpf está vazio', () => {
      expect(cpf.cpfValidator('')).to.equal(false);
    })
    it('Verifica se o campo cpf possui somente números iguais', () => {
      expect(cpf.cpfValidator('11111111111')).to.equal(false);
    })
    it('Verifica se o campo cpf valida com espaços', () => {
      expect(cpf.cpfValidator('228 610 568 51')).to.equal(true);
    })
  })
});




