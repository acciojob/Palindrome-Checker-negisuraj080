// complete the given function

function palindrome(str){
const cleanedString = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // Compare the original string with its reversed version
    return cleanedString === cleanedString.split('').reverse().join('');
}
module.exports = palindrome
