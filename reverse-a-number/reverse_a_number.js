function reverse_a_number(n)
{
	n = n + "";
	return n.split("").reverse().join("");
}

module.exports = reverse_a_number