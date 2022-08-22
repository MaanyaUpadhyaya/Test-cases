function checkForPalindrome(str){
    const len = str.length;
    for(let i=0;i<len/2;i++){
        if(str[i]!==str[len-1-i]){
            return 'not a palindrome';
        }
        }
    return 'it is a palindrome';
    }
module.exports={checkForPalindrome};