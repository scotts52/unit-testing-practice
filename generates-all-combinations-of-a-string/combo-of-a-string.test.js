const generateCombinations = require("./combo-of-a-string")

describe('generatecombinationsyntax',() => {
    it("all versions of a word", () => {
    const result = generateCombinations("cant");
    expect(result).toBe['cant', 'catn', 'cnat', 'cnta', 'ctan', 'ctna', 'acnt', 'actn', 'anct', 'antc', 'atcn', 'atnc', 'ncat', 'ncta', 'nact', 'natc', 'ntca', 'ntac', 'tcan', 'tcna', 'tacn', 'tanc', 'tnca', 'tnac']
})
    it("word has a special character", () => {
    const result = generateCombinations("can!t");
    expect(result).toBe['can!t', 'cant!', 'ca!nt', 'ca!tn', 'catn!', 'cat!n', 'cna!t',
    'cnat!', 'cn!at', 'cn!ta', 'cnta!', 'cnt!a', 'c!ant', 'c!atn',
    'c!nat', 'c!nta', 'c!tan', 'c!tna', 'ctan!', 'cta!n', 'ctna!',
    'ctn!a', 'ct!an', 'ct!na', 'acn!t', 'acnt!', 'ac!nt', 'ac!tn',
    'actn!', 'act!n', 'anc!t', 'anct!', 'an!ct', 'an!tc', 'antc!',
    'ant!c', 'a!cnt', 'a!ctn', 'a!nct', 'a!ntc', 'a!tcn', 'a!tnc',
    'atcn!', 'atc!n', 'atnc!', 'atn!c', 'at!cn', 'at!nc', 'nca!t',
    'ncat!', 'nc!at', 'nc!ta', 'ncta!', 'nct!a', 'nac!t', 'nact!',
    'na!ct', 'na!tc', 'natc!', 'nat!c', 'n!cat', 'n!cta', 'n!act',
    'n!atc', 'n!tca', 'n!tac', 'ntca!', 'ntc!a', 'ntac!', 'nta!c',
    'nt!ca', 'nt!ac', '!cant', '!catn', '!cnat', '!cnta', '!ctan',
    '!ctna', '!acnt', '!actn', '!anct', '!antc', '!atcn', '!atnc',
    '!ncat', '!ncta', '!nact', '!natc', '!ntca', '!ntac', '!tcan',
    '!tcna', '!tacn', '!tanc', '!tnca', '!tnac', 'tcan!', 'tca!n',
    'tcna!', 'tcn!a']
})
    it("500 white spaces", () => {
    const result = generateCombinations("cant" + " ".repeat(500));
    expect(result).not.toBe('time out')
})
    it("empty value", () => {
    const result = generateCombinations("");
    expect(result).toBe('')
})
    it("single space", () => {
    const result = generateCombinations(" ");
    expect(result).toBe(' ')
})

})
