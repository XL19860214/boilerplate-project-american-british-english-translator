const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const britishToAmericanSpelling = {};
for (const {key, value} of Object.entries(americanToBritishSpelling)) {
  britishToAmericanSpelling[value] = key;
}
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishToAmericanTitles = {};
for (const {key, value} of Object.entries(americanToBritishTitles)) {
  britishToAmericanTitles[value] = key;
}
const britishOnly = require('./british-only.js');

const libraries = {
  'american-to-british': [
    Object.entries(americanOnly).reverse(),
    Object.entries(americanToBritishSpelling),
    Object.entries(americanToBritishTitles)
  ],
  'british-to-american': [
    Object.entries(britishOnly).reverse(),
    Object.entries(britishToAmericanSpelling),
    Object.entries(britishToAmericanTitles)
  ]
}

const punctuationsInTheMiddle = [',', ';'];
const punctuationsAtTheEnd = ['.', '?', '!'];
const upperCaseCharCodes = [65, 90];
const lowerCaseCharCodes = [97, 122];

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
    let words;
    let translatedWords;
    let translated = false;
    let translation = text;

    libraries[locale].forEach(library => {
      for (const [key, value] of library) {

        let regExp = new RegExp(key, 'gi');
        
        let matchIndex = translation.search(regExp);
        if (matchIndex !== -1) {
          let matches = translation.match(regExp);
          let partToTranslate = translation.substring(matchIndex, matchIndex + key.length)
          translation  = translation.replace(regExp, `<span class="highlight">${value}</span>`);
          //
          translated = true;
        }
      }
    });

    if (translated) {
      return translation;
    }
    return 'Everything looks good to me!';
  }

}

module.exports = Translator;