function generateCombinations(str) {
	let result = [];
  
	function permute(current, remaining) {
	  if (remaining.length === 0) {
		result.push(current);
	  } else {
		for (let i = 0; i < remaining.length; i++) {
		  permute(current + remaining.charAt(i), remaining.slice(0, i) + remaining.slice(i + 1));
		}
	  }
	}
  
	permute('', str);
  
	return result;
  }
  module.exports = generateCombinations

console.log(generateCombinations(" "));