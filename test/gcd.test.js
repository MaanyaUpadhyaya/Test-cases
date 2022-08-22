const { expect } = require("chai");
const {gcd} = require('../gcd');
describe('UNIT test for GCD', ()=>{
    it('check gcd [2,10]', ()=>{
        expect(gcd(2,10)).equals(2);
    });
    it('check gcd [0,10]', ()=>{
        expect(gcd(0,10)).equals(10);
    });
    it('check gcd [4,-10]', ()=>{
        expect(gcd(4,-10)).equals(2);
    });
    it('check gcd [10,0]', ()=>{
        expect(gcd(10,0)).equals(10);
    });
    it('check gcd [0,0]', ()=>{
        expect(gcd(0,0)).equals(0);
    });
});
