const chai = require('chai');
const expect = chai.expect;
const login = require('../src/models/auth').login

//Your tests here...

describe('login', function () {
    it('should be a function', function () {
        expect(login).to.be.a('function')
    })
})
