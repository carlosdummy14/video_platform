const MongoLib = require('../lib/mongo');

class MoviesService {
  // Se crea instancia  de BD y se selecciona la coleccion a utilizar
  constructor() {
    this.collection = 'movies';
    this.mongoDB = new MongoLib();
  }

  async getMovies({ tags }) {
    const query = tags && { tags: { $in: tags } }; // Query de tags que se reciban para buscar peliculas
    const movies = await this.mongoDB.getAll(this.collection, query);
    return movies || []; // Se regresa un arreglo vacio porque son varias peliculas
  }

  async getMovie({ movieId }) {
    const movie = await this.mongoDB.get(this.collection, movieId);
    return movie || {}; // Se regresa un objeto vacio porque es una sola pelicula
  }

  async createMovie({ movie }) {
    const createMovieId = await this.mongoDB.create(this.collection, movie);
    return createMovieId;
  }

  async updateMovie({ movieId, movie } = {}) {
    const updatedMovieId = await this.mongoDB.update(
      this.collection,
      movieId,
      movie
    );
    return updatedMovieId;
  }

  async patchMovie({ movieId, movie } = {}) {
    const patchedMovieId = await this.mongoDB.update(
      this.collection,
      movieId,
      movie
    );
    return patchedMovieId;
  }

  async deleteMovie({ movieId }) {
    const deletedMovieId = await this.mongoDB.delete(this.collection, movieId);
    return deletedMovieId;
  }
}

module.exports = MoviesService;
