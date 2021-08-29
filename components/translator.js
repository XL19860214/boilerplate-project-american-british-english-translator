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
const britishOnly = require('./british-only.js')

class Translator {
  translate(text, locale) {
    const words = text.split(' ');
    let translatedWords;
    let translated = false;
    if (locale === 'american-to-british') {
      translatedWords = words.map(word => {
        if (americanOnly.hasOwnProperty(word)) {
          translated = true;
          return `<span class="highlight">${americanOnly[word]}</span>`;
        } else if (americanToBritishSpelling.hasOwnProperty(word)) {
          translated = true;
          return `<span class="highlight">${americanToBritishSpelling[word]}</span>`;
        } else if (americanToBritishTitles.hasOwnProperty(word)) {
          translated = true;
          return `<span class="highlight">${americanToBritishTitles[word]}</span>`;
        } else if (/^\d{2}:\d{2}$/.test(word)) {
          translated = true;
          return `<span class="highlight">${word.replace(':', '.')}</span>`;
        }
        return word;
      });
    } else if (locale === 'british-to-american') {
      translatedWords = words.map(word => {
        if (britishOnly.hasOwnProperty(word)) {
          translated = true;
          return `<span class="highlight">${britishOnly[word]}</span>`;
        } else if (britishToAmericanSpelling.hasOwnProperty(word)) {
          translated = true;
          return `<span class="highlight">${britishToAmericanSpelling[word]}</span>`;
        } else if (britishToAmericanTitles.hasOwnProperty(word)) {
          translated = true;
          return `<span class="highlight">${britishToAmericanTitles[word]}</span>`;
        } else if (/^\d{2}\.\d{2}$/.test(word)) {
          translated = true;
          return `<span class="highlight">${word.replace('.', ':')}</span>`;
        }
        return word;
      });
    }

    if (translated) {
      return translatedWords.join(' ');
    }
    return 'Everything looks good to me!';
  }
}

module.exports = Translator;