var express = require('express');
var router = express.Router();
var moment = require('moment');

const messages = [
  {
    title: 'La Gran Estafa',
    text: 'Lucas cree que puede manipular la verdad y hacerme ver como una mentirosa, pero la verdad es que esta es mi primera publicacion en la página. PD: EL otro dia quedamos 5 a 3 en un set.',
    user: 'The Real Liss',
    date: moment()
    .startOf('hour' - 1)
    .fromNow(),
  },
  {
    title: 'Duda',
    text: 'La Liz dice que ella es buena para jugar tenis, y que ha entrenado mucho, pero no se nota...será verdad?',
    user: 'Lucas',
    date: moment()
    .startOf('hour' - 1)
    .fromNow(),
  },
  {
    title: 'No se que pasa...',
    text: 'Cuando chica, entrené tenis más de 6 años en un club. Pero parece que no es suficiente para ganarle a Lucas...',
    user: 'Liz',
    date: moment()
    .startOf('hour' - 1)
    .fromNow(),
  }
];



/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Message Board', messages: messages });
});

router.get('/new', function (req, res, next) {
  res.render('form', { title: 'New Message'});
});
router.post('/new', (req, res, render) => {
  const newMessage = {
    title: req.body.title,
    text: req.body.description,
    user: req.body.username,
    date: moment()
      .startOf('hour' - 1)
      .fromNow(),
  };
  messages.unshift(newMessage);
  res.redirect('/');
});

module.exports = router;
