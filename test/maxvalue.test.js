const { expect } = require("chai");
const {maxElement} = require('../maxvalue');
describe('UNIT TEST FOR MAXVALUE', ()=>{
    it('check if 89 is largest in[2,10,89,56]', ()=>{
        expect(maxElement([2,10,89,56])).equals(89);
    });
    it('check if 89 is largest in[2,10,89,56]', ()=>{
        expect(maxElement([2,10,89,56])).not.equals(56);
    });
    it('check if 89 is largest in[2,10,89,56]', ()=>{
        expect(maxElement([2,0,89,56])).equals(89);
    });
    it('check if -2 is largest in[-2,-10,-89,-56]', ()=>{
        expect(maxElement([-2,-10,-89,-56])).equals(-2);
    });
    it('check if 89 is largest in[2,-10,89,-56]', ()=>{
        expect(maxElement([2,-10,89,-56])).equals(89);
    });
});
