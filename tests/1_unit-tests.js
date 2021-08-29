const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
const translator = new Translator();

const tests = [
  ['Mangoes are my favorite fruit.',
  'Mangoes are my <span class="highlight">favourite</span> fruit.'],

];

suite('Unit Tests', () => {
  // #1
  test('Translate Mangoes are my favorite fruit. to British English', done => {
    assert.equal(translator.translate('Mangoes are my favorite fruit.', 'american-to-british'),
    'Mangoes are my <span class="highlight">favourite</span> fruit.'
    );
    done();
  });

  // #2
  test('Translate I ate yogurt for breakfast. to British English', done => {
    assert.equal(translator.translate('I ate yogurt for breakfast.', 'american-to-british'),
    'I ate <span class="highlight">yoghurt</span> for breakfast.'
    );
    done();
  });

  // #3
  test("Translate We had a party at my friend's condo. to British English", done => {
    assert.equal(translator.translate("We had a party at my friend's condo.", 'american-to-british'),
    `We had a party at my friend's <span class="highlight">flat</span>.`
    );
    done();
  });

  // #4
  test('Translate Can you toss this in the trashcan for me? to British English', done => {
    assert.equal(translator.translate('Can you toss this in the trashcan for me?', 'american-to-british'),
    'Can you toss this in the <span class="highlight">bin</span> for me?'
    );
    done();
  });

});
