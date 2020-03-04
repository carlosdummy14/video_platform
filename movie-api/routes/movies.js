const express = require('express');
const MovieService = require('../services/movies');

// Requerimos datos para usar validacion, los schemas y el manejador
const { movieIdSchema, createMovieSchema, updateMovieSchema } = require('../utils/schemas/movies');
const validationHandler = require('../utils/middleware/validationHandler');

function moviesApi(app) {
  const router = express.Router();
  app.use('/api/movies', router);

  const movieService = new MovieService();

  //  GET todas las peliculas
  router.get('/', async function(req, res, next) {
    const { tags } = req.query;

    try {
      const movies = await movieService.getMovies({ tags });

      res.status(200).json({
        data: movies,
        message: 'movies listed'
      });
    } catch (err) {
      next(err);
    }
  });

  //  GET:movie una sola pelicula
  router.get('/:movieId', validationHandler({ movieId: movieIdSchema }, 'params'), async function(
    req,
    res,
    next
  ) {
    const { movieId } = req.params;

    try {
      const movies = await movieService.getMovie({ movieId });

      res.status(200).json({
        data: movies,
        message: 'movie retrieved'
      });
    } catch (err) {
      next(err);
    }
  });

  //  POST creacion de pelicula
  router.post('/', validationHandler(createMovieSchema), async function(req, res, next) {
    const { body: movie } = req;

    try {
      const createMovieId = await movieService.createMovie({ movie });
      res.status(201).json({
        data: createMovieId,
        message: 'movie created'
      });
    } catch (err) {
      next(err);
    }
  });

  //  PUT se actualiza una pelicula
  router.put(
    '/:movieId',
    validationHandler({ movieId: movieIdSchema }, 'params'),
    validationHandler(updateMovieSchema),
    async function(req, res, next) {
      const { movieId } = req.params;
      const { body: movie } = req;

      try {
        const updatedMovieId = await movieService.updateMovie({ movieId, movie });
        res.status(200).json({
          data: updatedMovieId,
          message: 'movie updated'
        });
      } catch (err) {
        next(err);
      }
    }
  );

  //  PATCH se actualiza una parte de la pelicula
  router.patch(
    '/:movieId',
    validationHandler({ movieId: movieIdSchema }, 'params'),
    validationHandler(updateMovieSchema),
    async function(req, res, next) {
      const { movieId } = req.params;
      const { body: movie } = req;

      try {
        const patchedMovieId = await movieService.patchMovie({ movieId, movie });
        res.status(200).json({
          data: patchedMovieId,
          message: 'movie patched'
        });
      } catch (err) {
        next(err);
      }
    }
  );

  // DELETE elimina una pelicula
  router.delete(
    '/:movieId',
    validationHandler({ movieId: movieIdSchema }, 'params'),
    async function(req, res, next) {
      const { movieId } = req.params;

      try {
        const deletedMovieId = await movieService.deleteMovie({ movieId });
        res.status(200).json({
          data: deletedMovieId,
          message: 'movie deleted'
        });
      } catch (err) {
        next(err);
      }
    }
  );
}

module.exports = moviesApi;
