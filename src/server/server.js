/* eslint-disable global-require */
import express from 'express';
import dotenv from 'dotenv';
import webpack from 'webpack';

dotenv.config();

const { ENV, PORT } = process.env;
const app = express();

if (ENV === 'development') {
  console.log('Development Config...');
  // Configuracion de webpack del proyecto
  const webpackConfig = require('../../webpack.config');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  // Copiler para compilar la configuracion de webpack
  const compiler = webpack(webpackConfig);
  // Esta objeto se utiliza con el DevMiddleware
  const serverConfig = {
    port: PORT,
    hot: true,
  };

  // Usamos nuestros middlewares con el servidor de express
  app.use(webpackDevMiddleware(compiler, serverConfig));
  // Este nos ayuda a hacer el hotmodule replacement de nuestro proyecto
  app.use(webpackHotMiddleware(compiler));
}

app.get('*', (req, res) => {
  console.log('Hola');

  res.send(`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="assets/app.css" type="text/css">
      <title>Video Platform</title>
    </head>
    <body>
      <div id="app"></div>
      <script src="assets/app.js" type="text/javascript"></script>
    </body>
  </html>
  `);
});

app.listen(PORT, (err) => {
  if (err) console.log(err);
  else console.log(`Server running on port ${PORT}`);
});
