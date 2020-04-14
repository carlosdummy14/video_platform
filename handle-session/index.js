const express = require('express');
const session = require('express-session');

const app = express();

// resave, no guarda cookies cada que se hace cambio
// saveUninitialized, si no esta la cookie inicializada no la guarda por defecto
// secret, para asegurar la cookie, debera ser string de por lo menos 256 bit, si es segura sera decifrada con este secret
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: 'qwerty cat',
  }),
);

app.get('/', (req, res) => {
  req.session.count = req.session.count ? req.session.count + 1 : 1;
  res.status(200).json({ hello: 'world', counter: req.session.count });
});

app.listen(3000, () => {
  console.log('Listening http://localhost:3000');
});
