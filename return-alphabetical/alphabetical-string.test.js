const alphabet_order = require("./alphabetical-string")

describe('alphabet_order syntax',() => {
    it("all versions of a word", () => {
    const result = alphabet_order ("different");
    expect(result).toBe['deeffinrt']
})
    it("word has a special character", () => {
    const result = alphabet_order ("can&^$%!t");
    expect(result).toBe['!$%&^acnt']
})
    it("500 white spaces", () => {
    const result = alphabet_order ("boop" + " ".repeat(500));
    expect(result).toBe('                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    boop')
})
    it("empty value", () => {
    const result = alphabet_order ("");
    expect(result).toBe('')
})
    it("single space", () => {
    const result = alphabet_order (" ");
    expect(result).toBe(' ')
})

})
