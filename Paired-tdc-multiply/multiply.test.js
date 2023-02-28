
/*
    1. should multiply 3 and 5 to give 15
    2. should multply integer for output
    3. should only accept value type of number for input
    4. should accept large number input
    5. should accept floating number
    6. should have output accurate to 2 decimel place
    7. should give positive number when multiplying 2 negative numbers
    8. should give expected result for edge case eg. multiply by 0 or -1
*/
const multiply = require('./multiply.js')

describe('multiplication syntax',() => {
    it("should multiply 3 and 5 to give 15", () => {
    const result = multiply (3,5);
    expect(result).toBe(15)
})
it("multply integer for output", () => {
    const result = multiply (10,2);
    expect(result).toBe(20)
})

it("should only accept value type of number for input", () => {
    const result = multiply ('six', 7)
    expect(result).toBe(NaN)  
})

it("should accept large number input", () => {
    const result = multiply (3294609832696230492304602936, 81239426815926734086723)
    expect(result).toBe(2.67652214390358e+50) 
})

it("should accept floating number", () => {
    const result = multiply (11, 2.5)
    expect(result).toBe(27.5)  
})
it("should have output accurate to 2 decimel place", () => {
    const result = multiply (6.4532, 2.5453)
    expect(result).toBe(16.43)  
})
it("should give positive number when multiplying 2 negative numbers", () => {
    const result = multiply (-8, -8)
    expect(result).toBe(64)  
})

it("should give expected result for edge case eg. multiply by 0 or -1", () => {
    const result = multiply (0, -1)
    expect(result).toBe(0)  
})

})