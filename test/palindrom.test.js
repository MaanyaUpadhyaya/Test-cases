const { expect } = require("chai");
const {checkForPalindrome} = require('../palindrom');
describe('UNIT test for palindrome', ()=>{
    it('check palindrome of MOM', ()=>{
        expect(checkForPalindrome('moem')).equals('not a palindrome');
    });
    it('check palindrome of MOON', ()=>{
        expect(checkForPalindrome('moon')).equals('not a palindrome');
    });
});
