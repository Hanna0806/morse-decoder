const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let symbolsRes = '';

    for (let i = 0; i < expr.length; i += 2) {
        if (i !== 0 && i % 10 == 0) {
            symbolsRes = symbolsRes + ' ';
        }
        if (expr[i] + expr[i + 1] == '10') {
            symbolsRes = symbolsRes + '.';
        }
        if (expr[i] + expr[i + 1] == '11') {
            symbolsRes = symbolsRes + '-';
        }
    }

    const result = symbolsRes.split('  ').map((word) => word.split(' ').map((char) => MORSE_TABLE[char]).join('')).join(' ');
    return result;
}

module.exports = {
    decode
}