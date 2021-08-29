'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      // console.log(`req.body`, req.body);
      if (!req.body.hasOwnProperty('text')
        || !req.body.hasOwnProperty('locale')
      ) {
        return res.json({ error: 'Required field(s) missing' });
      }
      const text = req.body.text;
      if (text.length === 0) {
        return res.json({ error: 'No text to translate' });
      }
      const locale = req.body.locale;
      if (!['american-to-british', 'british-to-american'].includes(locale)) {
        return res.json({ error: 'Invalid value for locale field' });
      }
      console.log(translator.translate(text, locale));
      res.json({
        text: req.body.text,
        translation: translator.translate(text, locale)
      });
    });
};
