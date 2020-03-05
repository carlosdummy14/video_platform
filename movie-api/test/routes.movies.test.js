const assert = require('assert');
const proxyquire = require('proxyquire'); // Permite traer un mock en lugar del real

const { moviesMock, MoviesServiceMock } = require('../utils/mocks/movies.js');
const testServer = require('../utils/testServer');

describe('routes - movies', function() {
  // Definimos la ruta a utilizar con proxyquire, se remplaza una ruta por la del mock
  const route = proxyquire('../routes/movies', {
    '../services/movies': MoviesServiceMock
  });

  const request = testServer(route);
  describe('GET /movies', function() {
    // Primer test, llamado routes - movies con callback
    it('should respond with status 200', function(done) {
      request.get('/api/movies').expect(200, done);
    });

    // Segundo test sobre lo que regresa la peticion
    it('should respond with the list of movies', function(done) {
      request.get('/api/movies').end((err, res) => {
        assert.deepEqual(res.body, {
          data: moviesMock,
          message: 'movies listed'
        });

        done();
      });
    });
  });
});
