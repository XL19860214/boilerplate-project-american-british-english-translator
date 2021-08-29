const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
const translator = new Translator();

const tests = [
  ['Mangoes are my favorite fruit.','american-to-british', 'Mangoes are my <span class="highlight">favourite</span> fruit.'],
  ['I ate yogurt for breakfast.', 'american-to-british', 'I ate <span class="highlight">yoghurt</span> for breakfast.'],
  ["We had a party at my friend's condo.", 'american-to-british', `We had a party at my friend's <span class="highlight">flat</span>.`],
  ['Can you toss this in the trashcan for me?', 'american-to-british', 'Can you toss this in the <span class="highlight">bin</span> for me?']
];

suite('Unit Tests', () => {
  // #1
  test('Translate Mangoes are my favorite fruit. to British English', done => {
    assert.equal(translator.translate(tests[0][0], tests[0][1]), tests[0][2]);
    done();
  });

  // #2
  test('Translate I ate yogurt for breakfast. to British English', done => {
    assert.equal(translator.translate(tests[1][0], tests[1][1]), tests[1][2]);
    done();
  });

  // #3
  test("Translate We had a party at my friend's condo. to British English", done => {
    assert.equal(translator.translate(tests[2][0], tests[2][1]), tests[2][2]);
    done();
  });

  // #4
  test('Translate Can you toss this in the trashcan for me? to British English', done => {
    assert.equal(translator.translate(tests[3][0], tests[3][1]), tests[3][2]);
    done();
  });

  

});
