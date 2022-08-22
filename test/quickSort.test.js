const { expect } = require("chai");
const {quickSort} = require('../quicksort');
describe('UNIT test for QUICKSORT', ()=>{
    it('check if array is sorted [2,10,11,34,55,67]', ()=>{
        expect(quickSort([3,4,1,2],0,3)).to.deep.equal([1,2,3,4]);
    });
});