const reverse_a_number = require("./reverse_a_number")

it("reverse the number given", () => {
    const result = reverse_a_number(1,2,3,4,5);
    expect(result).toBe[5,4,3,2,1]
})