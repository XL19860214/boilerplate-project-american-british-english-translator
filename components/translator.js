const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
let britishToAmericanSpelling = {};
for (const [key, value] of Object.entries(americanToBritishSpelling)) {
  britishToAmericanSpelling[value] = key;
}
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishToAmericanTitles = {};
for (const [key, value] of Object.entries(americanToBritishTitles)) {
  britishToAmericanTitles[value] = key;
}
const britishOnly = require('./british-only.js');

const libraries = {
  'american-to-british': [
    Object.entries(americanOnly),
    Object.entries(americanToBritishSpelling),
    Object.entries(americanToBritishTitles)
  ],
  'british-to-american': [
    Object.entries(britishOnly),
    Object.entries(britishToAmericanSpelling),
    Object.entries(britishToAmericanTitles)
  ]
};

const timeFormats = {
  'american-to-british': {
    regExp: new RegExp(/\d{1,2}:\d{2}/, 'gi'),
    split: ':',
    join: '.'
  },
  'british-to-american': {
    regExp: new RegExp(/\d{1,2}\.\d{2}/, 'gi'),
    split: '.',
    join: ':'
  }
};

const punctuationsInTheMiddle = [',', ';'];
const punctuationsAtTheEnd = ['.', '?', '!'];
const upperCaseCharCodes = [65, 90];
const lowerCaseCharCodes = [97, 122];

const highlight = [
  '<span class="highlight">',
  '</span>'
]

class Translator {

  stringHasUpperCase(str) {
    for (let i = 0; i < str.length; i++) {
      if (str.charCodeAt(i) >= upperCaseCharCodes[0] && str.charCodeAt(i) <= upperCaseCharCodes[1]) {
        return true;
      }
    }
    return false;
  }

  translate(text, locale) {
    const highlightedTranslation = this.translateWithHighlight(text, locale);

    return highlightedTranslation.replace(new RegExp(highlight[0], 'gi'), '').replace(new RegExp(highlight[1], 'gi'), '');
  }

  translateWithHighlight(text, locale) {
    let translated = false;
    let translation = text;

    libraries[locale].forEach(library => {
      for (const [key, value] of library) {
        let regExp = new RegExp(key, 'gi');
        let matchIndex = translation.search(regExp);
        if (matchIndex !== -1) {
          translation  = translation.replace(regExp, (match, offset, string) => {
            // console.log(
            //   `match`, match,
            //   `offset`, offset,
            //   `string`, string,
            //   `/\W/.test(string[offset - 1])`, /\W/.test(string[offset - 1]),
            //   `/\W/.test(string[offset + match.length])`, /\W/.test(string[offset + match.length])
            // ); // DEBUG
            if ((string[offset - 1] === undefined || /\W/.test(string[offset - 1])) && /\W/.test(string[offset + match.length])) {
              const precedingPart = string.substring(0, offset);
              const highlightLeftMatchesInPrecedingPart = precedingPart.match(new RegExp(highlight[0], 'gi'));
              const highlightRigthMatchesInPrecedingPart = precedingPart.match(new RegExp(highlight[1], 'gi'));
              if (highlightLeftMatchesInPrecedingPart === null
                || (highlightRigthMatchesInPrecedingPart !== null && highlightLeftMatchesInPrecedingPart.length === highlightRigthMatchesInPrecedingPart.length)
              ) {
                translated = true;
                return `${highlight[0]}${value}${highlight[1]}`;
              }
            }
            return match;
          });
        }
      }
    });

    // Time format
    const {regExp, split, join} = timeFormats[locale];
    let matchIndex = translation.search(regExp);
    if (matchIndex !== -1) {
      const matches = translation.match(regExp);
      matches.forEach(match => {
        translation  = translation.replace(match, `${highlight[0]}${match.split(split).join(join)}${highlight[1]}`);
      });
      //
      translated = true;
    }

    if (translated) {
      return translation;
    }
    return 'Everything looks good to me!';
  }

}

module.exports = Translator;