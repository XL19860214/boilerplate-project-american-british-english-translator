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

const punctuations = [',', '.', '?', '!'];

class Translator {
  translate(text, locale) {
    const words = text.split(' ');
    let translatedWords;
    let translated = false;

    if (locale === 'american-to-british') {
      translatedWords = words.map(rawWord => {
        let word = rawWord;
        let punctuation;
        const wordEnd = rawWord[rawWord.length - 1];
        if (punctuations.includes(wordEnd)) {
          punctuation = wordEnd;
          word = rawWord.substring(0, rawWord.length - 1);
        }

        let translatedWord = word;

        if (americanOnly.hasOwnProperty(word)) {
          translated = true;
          translatedWord = `<span class="highlight">${americanOnly[word]}</span>`;
        } else if (americanToBritishSpelling.hasOwnProperty(word)) {
          translated = true;
          translatedWord = `<span class="highlight">${americanToBritishSpelling[word]}</span>`;
        } else if (americanToBritishTitles.hasOwnProperty(word)) {
          translated = true;
          translatedWord = `<span class="highlight">${americanToBritishTitles[word]}</span>`;
        } else if (/^\d{1,2}:\d{2}$/.test(word)) {
          translated = true;
          translatedWord = `<span class="highlight">${word.replace(':', '.')}</span>`;
        }

        if (punctuation !== undefined) {
          return translatedWord + punctuation;
        }
        return translatedWord;
      });
    } else if (locale === 'british-to-american') {
      translatedWords = words.map(rawWord => {
        let word = rawWord;
        let punctuation;
        const wordEnd = rawWord[rawWord.length - 1];
        if (punctuations.includes(wordEnd)) {
          punctuation = wordEnd;
          word = rawWord.substring(0, rawWord.length - 1);
        }

        let translatedWord = word;

        if (britishOnly.hasOwnProperty(word)) {
          translated = true;
          translatedWord = `<span class="highlight">${britishOnly[word]}</span>`;
        } else if (britishToAmericanSpelling.hasOwnProperty(word)) {
          translated = true;
          translatedWord = `<span class="highlight">${britishToAmericanSpelling[word]}</span>`;
        } else if (britishToAmericanTitles.hasOwnProperty(word)) {
          translated = true;
          translatedWord = `<span class="highlight">${britishToAmericanTitles[word]}</span>`;
        } else if (/^\d{1,2}\.\d{2}$/.test(word)) {
          translated = true;
          translatedWord = `<span class="highlight">${word.replace('.', ':')}</span>`;
        }
        
        if (punctuation !== undefined) {
          return translatedWord + punctuation;
        }
        return translatedWord;
      });
    }

    if (translated) {
      return translatedWords.join(' ');
    }
    return 'Everything looks good to me!';
  }
}

module.exports = Translator;