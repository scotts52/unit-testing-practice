function alphabet_order(str)
  {
return str.toLowerCase().split('').sort().join('');
  }

module.exports = alphabet_order

console.log(alphabet_order("boop" + " ".repeat(500)));