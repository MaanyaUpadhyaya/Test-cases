const { expect } = require("chai");
const {binarySearch} = require('../binarysearch');
describe('UNIT TEST FOR SEARCH', ()=>{
    it('check if 56 is present in[2,10,56,89,99,102]', ()=>{
        expect(binarySearch([2,10,56,89,99,102],56).found).equals(2);
        expect(binarySearch([2,10,56,89,99,102],56).iterations).equals(1);
    });
    it('check if 102 is present in[2,10,56,89,99,102]', ()=>{
        expect(binarySearch([2,10,56,89,99,102],102).found).equals(5);
        expect(binarySearch([2,10,56,89,99,102],102).iterations).equals(3);
    });
    it('check if 2 is present in[2,10,89,99,102]', ()=>{
        expect(binarySearch([2,10,89,99,102],2).found).equals(0);
        expect(binarySearch([2,10,89,99,102],2).iterations).equals(2);
    });
});
