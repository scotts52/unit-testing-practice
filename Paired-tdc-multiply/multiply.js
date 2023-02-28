function multiply(num1, num2) {
    const answer = num1 * num2
    return parseFloat(answer.toFixed(2)) ; 
}
console.log(multiply(-8,-8));
module.exports = multiply