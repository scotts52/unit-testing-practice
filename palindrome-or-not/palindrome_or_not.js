function isPalindrome(str) {
	str = str.toLowerCase().replace(/[\W_]/g, '');
	
	const reversedStr = str.split('').reverse().join('');
	
	if (str === reversedStr){
		return 'is palindrome'
	} else {
		return 'not a palindrome'
	}
  }
  
  module.exports = isPalindrome
	// isPalindrome('madam');
	// isPalindrome('nurses run');
	// isPalindrome('fox');
	// console.log(isPalindrome('madam'));
