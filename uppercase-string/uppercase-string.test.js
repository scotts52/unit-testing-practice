const uppercase = require("./uppercase-string")

describe('uppercase syntax',() => {
    it("all words capital", () => {
    const result = uppercase ("the quick brown fox");
    expect(result).toBe['The Quick Brown Fox']
})
    it("word has a special character", () => {
    const result = uppercase ("!the @quick brown fox");
    expect(result).not.toBe['The Quick Brown Fox']
})
    it("500 white spaces", () => {
    const result = uppercase ("boop" + " ".repeat(500) + "moo");
    expect(result).toBe('Boop                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    Moo')
})
    it("empty value", () => {
    const result = uppercase ("");
    expect(result).toBe('')
})
    it("single space", () => {
    const result = uppercase (" ");
    expect(result).toBe(' ')
})

})
