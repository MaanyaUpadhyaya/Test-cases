const {expect} = require("chai");
const {sequentialSearch} = require('../sequential');
describe('UNIT TEST FOR SEQUENCE', ()=>{
    it('check if 89 is present in[2,10,89,56]', ()=>{
        expect(sequentialSearch([2,10,89,56],89).found).equals(2);
        expect(sequentialSearch([2,10,89,56],89).iterations).equals(2);
    });
    it('check if 3 is present in[2,10,89,56]', ()=>{
        expect(sequentialSearch([2,10,89,56],3).found).equals(-1);
    });
    it('check if -10 is present in[2,-10,89,56]', ()=>{
        expect(sequentialSearch([2,-10,89,56],-10).found).equals(1);
        expect(sequentialSearch([2,-10,89,56],-10).iterations).equals(1);
    });
    it('check if 24 is present in[2,-10,89,56,78,44,56,24]', ()=>{
        expect(sequentialSearch([2,-10,89,56,78,44,56,24],24).found).equals(7);
        expect(sequentialSearch([2,-10,89,56,78,44,56,24],24).iterations).equals(7);
    });
});

