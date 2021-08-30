const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
const translator = new Translator();

const tests = [
  ['Mangoes are my favorite fruit.','american-to-british', 'Mangoes are my <span class="highlight">favourite</span> fruit.'], // #1
  ['I ate yogurt for breakfast.', 'american-to-british', 'I ate <span class="highlight">yoghurt</span> for breakfast.'], // #2
  ["We had a party at my friend's condo.", 'american-to-british', `We had a party at my friend's <span class="highlight">flat</span>.`], // #3
  ['Can you toss this in the trashcan for me?', 'american-to-british', 'Can you toss this in the <span class="highlight">bin</span> for me?'], // #4
  ['The parking lot was full.', 'american-to-british', 'The <span class="highlight">car park</span> was full.'], // #5
  ['Like a high tech Rube Goldberg machine.', 'american-to-british', 'Like a high tech <span class="highlight">Heath Robinson device</span>.'], // #6
  ['To play hooky means to skip class or work.', 'american-to-british', 'To <span class="highlight">bunk off</span> means to skip class or work.'], // #7
  ['No Mr. Bond, I expect you to die.', 'american-to-british', 'No <span class="highlight">Mr</span> Bond, I expect you to die.'], // #8
  ['Dr. Grosh will see you now.', 'american-to-british', '<span class="highlight">Dr</span> Grosh will see you now.'], // #9
  ['Lunch is at 12:15 today.', 'american-to-british', 'Lunch is at <span class="highlight">12.15</span> today.'], // #10
  ['We watched the footie match for a while.', 'british-to-american', 'We watched the <span class="highlight">soccer</span> match for a while.'], // #11
  ['Paracetamol takes up to an hour to work.', 'british-to-american', '<span class="highlight">Tylenol</span> takes up to an hour to work.'], // #12
  ['First, caramelise the onions.', 'british-to-american', 'First, <span class="highlight">caramelize</span> the onions.'], // #13
  ['I spent the bank holiday at the funfair.', 'british-to-american', 'I spent the <span class="highlight">public holiday</span> at the <span class="highlight">carnival</span>.'], // #14
  ['I had a bicky then went to the chippy.', 'british-to-american', 'I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-chip shop</span>.'], // #15
  ["I've just got bits and bobs in my bum bag.", 'british-to-american', `I've just got <span class="highlight">odds and ends</span> in my <span class="highlight">fanny pack</span>.`], // #16
  ['The car boot sale at Boxted Airfield was called off.', 'british-to-american', 'The <span class="highlight">swap meet</span> at Boxted Airfield was called off.'], // #17
  ['Have you met Mrs Kalyani?', 'british-to-american', 'Have you met <span class="highlight">Mrs.</span> Kalyani?'], // #18
  ["Prof Joyner of King's College, London.", 'british-to-american', `<span class="highlight">Prof.</span> Joyner of King's College, London.`], // #19
];

suite('Unit Tests', () => {

  suite('Translate from American to British English', () => {
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

    // #5
    test('Translate The parking lot was full. to British English', done => {
      assert.equal(translator.translate(tests[4][0], tests[4][1]), tests[4][2]);
      done();
    });

    // #6
    test('Translate Like a high tech Rube Goldberg machine. to British English', done => {
      assert.equal(translator.translate(tests[5][0], tests[5][1]), tests[5][2]);
      done();
    });

    // #7
    test('Translate To play hooky means to skip class or work. to British English', done => {
      assert.equal(translator.translate(tests[6][0], tests[6][1]), tests[6][2]);
      done();
    });

    // #8
    test('Translate No Mr. Bond, I expect you to die. to British English', done => {
      assert.equal(translator.translate(tests[7][0], tests[7][1]), tests[7][2]);
      done();
    });

    // #9
    test('Translate Dr. Grosh will see you now. to British English', done => {
      assert.equal(translator.translate(tests[8][0], tests[8][1]), tests[8][2]);
      done();
    });

    // #10
    test('Translate Lunch is at 12:15 today. to British English', done => {
      assert.equal(translator.translate(tests[9][0], tests[9][1]), tests[9][2]);
      done();
    });
  });
  

  suite('Translate from American to British English', () => {
    // #11
    test('Translate We watched the footie match for a while. to American English', done => {
      assert.equal(translator.translate(tests[10][0], tests[10][1]), tests[10][2]);
      done();
    });

    // #12
    test('Translate Paracetamol takes up to an hour to work. to American English', done => {
      assert.equal(translator.translate(tests[11][0], tests[11][1]), tests[11][2]);
      done();
    });

    // #13
    test('Translate First, caramelise the onions. to American English', done => {
      assert.equal(translator.translate(tests[12][0], tests[12][1]), tests[12][2]);
      done();
    });

    // #14
    test('Translate I spent the bank holiday at the funfair. to American English', done => {
      assert.equal(translator.translate(tests[13][0], tests[13][1]), tests[13][2]);
      done();
    });

    // #15
    test('Translate I had a bicky then went to the chippy. to American English', done => {
      assert.equal(translator.translate(tests[14][0], tests[14][1]), tests[14][2]);
      done();
    });
    
    // #16
    test("Translate I've just got bits and bobs in my bum bag. to American English", done => {
      assert.equal(translator.translate(tests[15][0], tests[15][1]), tests[15][2]);
      done();
    });

    // #17
    test('Translate The car boot sale at Boxted Airfield was called off. to American English', done => {
      assert.equal(translator.translate(tests[16][0], tests[16][1]), tests[16][2]);
      done();
    });

    // #18
    test('Translate Have you met Mrs Kalyani? to American English', done => {
      assert.equal(translator.translate(tests[17][0], tests[17][1]), tests[17][2]);
      done();
    });

    // #19
    test("Translate Prof Joyner of King's College, London. to American English", done => {
      assert.equal(translator.translate(tests[18][0], tests[18][1]), tests[18][2]);
      done();
    });

  });

});
