const { moviesMock } = require('../utils/mocks/movies');

class MoviesService {
  async getMovies() {
    const movies = await Promise.resolve(moviesMock);
    return movies || []; // Se regresa un arreglo vacio porque son varias peliculas
  }

  async getMovie() {
    const movie = await Promise.resolve(moviesMock[0]);
    return movie || {}; // Se regresa un objeto vacio porque es una sola pelicula
  }

  async createMovie() {
    const createMovieId = await Promise.resolve(moviesMock[0].id);
    return createMovieId;
  }

  async updateMovie() {
    const updatedMovieId = await Promise.resolve(moviesMock[0].id);
    return updatedMovieId;
  }

  async patchMovie() {
    const patchedMovieId = await Promise.resolve(moviesMock[0].id);
    return patchedMovieId;
  }

  async deleteMovie() {
    const deletedMovieId = await Promise.resolve(moviesMock[0].id);
    return deletedMovieId;
  }
}

module.exports = MoviesService;
