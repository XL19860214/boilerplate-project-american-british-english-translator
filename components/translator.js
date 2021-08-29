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
    let words;
    let translatedWords;
    let translated = false;
    let translation = text;

    if (locale === 'american-to-british') {
      for (const [key, value] of Object.entries(americanOnly).reverse()) {
          if (translation.includes(key)) {
            translated = true;
            translation = translation.replace(key, `{${value}}`);
          }
      }

      words = translation.split(' ');

      translatedWords = words.map(rawWord => {
        let word = rawWord;
        let punctuation;
        const wordEnd = rawWord[rawWord.length - 1];
        if (punctuations.includes(wordEnd)) {
          punctuation = wordEnd;
          word = rawWord.substring(0, rawWord.length - 1);
        }

        let translatedWord = word;

        if (americanToBritishSpelling.hasOwnProperty(word)) {
          translated = true;
          translatedWord = `{${americanToBritishSpelling[word]}}`;
        } else if (americanToBritishTitles.hasOwnProperty(word)) {
          translated = true;
          translatedWord = `{${americanToBritishTitles[word]}}`;
        } else if (/^\d{1,2}:\d{2}$/.test(word)) {
          translated = true;
          translatedWord = `{${word.replace(':', '.')}}`;
        }

        if (punctuation !== undefined) {
          return translatedWord + punctuation;
        }
        return translatedWord;
      });

      translatedWords = translatedWords.map(translatedWord => {
        if (translatedWord.includes('{')) {
          translatedWord = translatedWord.replace('{', '<span class="highlight">');
        }
        if (translatedWord.includes('}')) {
          translatedWord = translatedWord.replace('}', '</span>');
        }
        return translatedWord;
      });

      // console.log(`translatedWords`, translatedWords); // DEBUG

      translation = translatedWords.join(' ');

    } else if (locale === 'british-to-american') {
      for (const [key, value] of Object.entries(britishOnly).reverse()) {
          if (translation.includes(key)) {
            translated = true;
            translation = translation.replace(key, `{${value}}`);
          }
      }

      words = translation.split(' ');

      translatedWords = words.map(rawWord => {
        let word = rawWord;
        let punctuation;
        const wordEnd = rawWord[rawWord.length - 1];
        if (punctuations.includes(wordEnd)) {
          punctuation = wordEnd;
          word = rawWord.substring(0, rawWord.length - 1);
        }

        let translatedWord = word;

        if (britishToAmericanSpelling.hasOwnProperty(word)) {
          translated = true;
          translatedWord = `{${britishToAmericanSpelling[word]}}`;
        } else if (britishToAmericanTitles.hasOwnProperty(word)) {
          translated = true;
          translatedWord = `{${britishToAmericanTitles[word]}}`;
        } else if (/^\d{1,2}\.\d{2}$/.test(word)) {
          translated = true;
          translatedWord = `{${word.replace('.', ':')}}`;
        }
        
        if (punctuation !== undefined) {
          return translatedWord + punctuation;
        }
        return translatedWord;
      });

      translatedWords = translatedWords.map(translatedWord => {
        if (translatedWord.includes('{')) {
          translatedWord = translatedWord.replace('{', '<span class="highlight">');
        }
        if (translatedWord.includes('}')) {
          translatedWord = translatedWord.replace('}', '</span>');
        }
        return translatedWord;
      });

      translation = translatedWords.join(' ');
    }

    if (translated) {
      return translation;
    }
    return 'Everything looks good to me!';
  }
}

module.exports = Translator;