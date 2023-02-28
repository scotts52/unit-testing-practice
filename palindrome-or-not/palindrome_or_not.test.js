const isPalindrome = require("./palindrome_or_not")

it("is the word a palindrome", () => {
    const result = isPalindrome("madam");
    expect(result).toBe("is palindrome")
})
