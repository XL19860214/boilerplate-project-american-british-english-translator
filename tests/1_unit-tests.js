const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
const translator = new Translator();

suite('Unit Tests', () => {
  // #1
  test('Translate Mangoes are my favorite fruit. to British English', done => {
    assert.equal(translator.translate('Mangoes are my favorite fruit.', 'american-to-british'),
    'Mangoes are my <span class="highlight">favourite</span> fruit.'
    );
    done();
  });



});
