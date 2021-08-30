const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
const translator = new Translator();

const tests = [
  ['Mangoes are my favorite fruit.','american-to-british', 'Mangoes are my favourite fruit.'], // #1
  ['I ate yogurt for breakfast.', 'american-to-british', 'I ate yoghurt for breakfast.'], // #2
  ["We had a party at my friend's condo.", 'american-to-british', `We had a party at my friend's flat.`], // #3
  ['Can you toss this in the trashcan for me?', 'american-to-british', 'Can you toss this in the bin for me?'], // #4
  ['The parking lot was full.', 'american-to-british', 'The car park was full.'], // #5
  ['Like a high tech Rube Goldberg machine.', 'american-to-british', 'Like a high tech Heath Robinson device.'], // #6
  ['To play hooky means to skip class or work.', 'american-to-british', 'To bunk off means to skip class or work.'], // #7
  ['No Mr. Bond, I expect you to die.', 'american-to-british', 'No Mr Bond, I expect you to die.'], // #8
  ['Dr. Grosh will see you now.', 'american-to-british', 'Dr Grosh will see you now.'], // #9
  ['Lunch is at 12:15 today.', 'american-to-british', 'Lunch is at 12.15 today.'], // #10
  ['We watched the footie match for a while.', 'british-to-american', 'We watched the soccer match for a while.'], // #11
  ['Paracetamol takes up to an hour to work.', 'british-to-american', 'Tylenol takes up to an hour to work.'], // #12
  ['First, caramelise the onions.', 'british-to-american', 'First, caramelize the onions.'], // #13
  ['I spent the bank holiday at the funfair.', 'british-to-american', 'I spent the public holiday at the carnival.'], // #14
  ['I had a bicky then went to the chippy.', 'british-to-american', 'I had a cookie then went to the fish-and-chip shop.'], // #15
  ["I've just got bits and bobs in my bum bag.", 'british-to-american', `I've just got odds and ends in my fanny pack.`], // #16
  ['The car boot sale at Boxted Airfield was called off.', 'british-to-american', 'The swap meet at Boxted Airfield was called off.'], // #17
  ['Have you met Mrs Kalyani?', 'british-to-american', 'Have you met Mrs. Kalyani?'], // #18
  ["Prof Joyner of King's College, London.", 'british-to-american', `Prof. Joyner of King's College, London.`], // #19
  ['Tea time is usually around 4 or 4.30.', 'british-to-american', 'Tea time is usually around 4 or 4:30.'], // #20
  ['Mangoes are my favorite fruit.', 'american-to-british', 'Mangoes are my <span class="highlight">favourite</span> fruit.'], // #21
  ['I ate yogurt for breakfast.', 'american-to-british', 'I ate <span class="highlight">yoghurt</span> for breakfast.'], // #22
  ['We watched the footie match for a while.', 'british-to-american', 'We watched the <span class="highlight">soccer</span> match for a while.'], // #23
  ['Paracetamol takes up to an hour to work.', 'british-to-american', '<span class="highlight">Tylenol</span> takes up to an hour to work.'], // #24
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

    // #20
    test('Translate Tea time is usually around 4 or 4.30. to American English', done => {
      assert.equal(translator.translate(tests[19][0], tests[19][1]), tests[19][2]);
      done();
    });

  });

  suite('Highlight Tests', () => {
    
    // #21
    test('Highlight translation in Mangoes are my favorite fruit.', done => {
      assert.equal(translator.translateWithHighlight(tests[20][0], tests[20][1]), tests[20][2]);
      done();
    });

    // #22
    test('Highlight translation in I ate yogurt for breakfast.', done => {
      assert.equal(translator.translateWithHighlight(tests[21][0], tests[21][1]), tests[21][2]);
      done();
    });

    // #23
    test('Highlight translation in We watched the footie match for a while.', done => {
      assert.equal(translator.translateWithHighlight(tests[22][0], tests[22][1]), tests[22][2]);
      done();
    });

    // #24
    test('Highlight translation in Paracetamol takes up to an hour to work.', done => {
      assert.equal(translator.translateWithHighlight(tests[23][0], tests[23][1]), tests[23][2]);
      done();
    });
  });

});
