const moviesMock = [
  {
    id: 'eb43c7e6-bcb1-4c2d-9ef4-5d1ffbcdf22c',
    title: 'I Am Comic',
    year: 1992,
    cover: 'http://dummyimage.com/130x183.png/ff4444/ffffff',
    description:
      'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    duration: 1917,
    contentRaiting: 'PG-13',
    source: 'http://livejournal.com/curae/mauris.xml',
    tags: ['Adventure|Sci-Fi', 'Comedy|Horror']
  },
  {
    id: 'ab39b8b0-cd80-44e7-9a86-ec69f2e91552',
    title: 'Raven, The',
    year: 1989,
    cover: 'http://dummyimage.com/149x193.png/ff4444/ffffff',
    description:
      'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    duration: 2061,
    contentRaiting: 'R',
    source: 'http://telegraph.co.uk/nunc/viverra/dapibus/nulla/suscipit/ligula/in.jpg',
    tags: ['Drama', 'Drama|War']
  },
  {
    id: '6b87b0b2-710e-469c-960e-3ebf3b45b6f5',
    title: 'Small Town Gay Bar',
    year: 1992,
    cover: 'http://dummyimage.com/239x166.png/cc0000/ffffff',
    description:
      'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.',
    duration: 1993,
    contentRaiting: 'PG-13',
    source: 'https://infoseek.co.jp/amet/nunc/viverra/dapibus/nulla/suscipit.jsp',
    tags: ['Action|Thriller']
  },
  {
    id: '42eba2f9-8218-4994-9315-65ed3282d8b2',
    title:
      'Bicycle Thieves (a.k.a. The Bicycle Thief) (a.k.a. The Bicycle Thieves) (Ladri di biciclette)',
    year: 1996,
    cover: 'http://dummyimage.com/226x101.png/ff4444/ffffff',
    description:
      'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
    duration: 1909,
    contentRaiting: 'PG',
    source: 'https://springer.com/orci/mauris/lacinia/sapien/quis/libero/nullam.html',
    tags: ['Documentary', 'Drama', 'Musical']
  },
  {
    id: '55203fd5-f52c-4325-8b16-2b901ab83856',
    title: 'Five Children and It',
    year: 2013,
    cover: 'http://dummyimage.com/196x234.bmp/5fa2dd/ffffff',
    description: 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    duration: 1999,
    contentRaiting: 'PG',
    source: 'https://wordpress.org/morbi/a.aspx',
    tags: ['Action']
  },
  {
    id: '587ec776-2cd6-4fa5-9e87-499b1df90c46',
    title: '3 dev adam (Three Giant Men) ',
    year: 2012,
    cover: 'http://dummyimage.com/174x138.bmp/ff4444/ffffff',
    description:
      'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    duration: 2001,
    contentRaiting: 'PG',
    source: 'http://google.es/justo.jsp',
    tags: ['Comedy|Romance', 'Drama|Romance', 'Documentary']
  },
  {
    id: '7dd3e831-c3ad-4ed5-a929-b149fed2576e',
    title:
      'Neon Genesis Evangelion: Death & Rebirth (Shin seiki Evangelion Gekijô-ban: Shito shinsei)',
    year: 2002,
    cover: 'http://dummyimage.com/132x157.bmp/5fa2dd/ffffff',
    description: 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    duration: 2059,
    contentRaiting: 'PG',
    source: 'https://bravesites.com/vehicula.aspx',
    tags: ['Comedy|Drama', 'Animation|Comedy|Sci-Fi', 'Crime|Film-Noir']
  },
  {
    id: '1233cc56-9d04-46d1-9289-38cb864de131',
    title: 'Hitcher, The',
    year: 2001,
    cover: 'http://dummyimage.com/119x106.bmp/cc0000/ffffff',
    description:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.',
    duration: 1926,
    contentRaiting: 'NC-17',
    source: 'https://123-reg.co.uk/eu/felis/fusce/posuere.jpg',
    tags: ['Romance|Western', 'Sci-Fi|Thriller', 'Comedy|Drama', 'Action|Sci-Fi|War']
  },
  {
    id: '37b3f433-6e78-487f-a788-68322c576e91',
    title: 'Dog of Flanders, A',
    year: 1989,
    cover: 'http://dummyimage.com/214x245.bmp/cc0000/ffffff',
    description:
      'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    duration: 1990,
    contentRaiting: 'NC-17',
    source: 'https://prlog.org/euismod.js',
    tags: ['Comedy', 'Adventure|Drama|Thriller']
  },
  {
    id: 'f8f258be-b6ff-4335-8f64-f4365c5d9b97',
    title: 'Spartacus',
    year: 1990,
    cover: 'http://dummyimage.com/229x214.bmp/dddddd/000000',
    description:
      'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    duration: 2017,
    contentRaiting: 'G',
    source: 'https://boston.com/venenatis/non/sodales/sed/tincidunt/eu.aspx',
    tags: ['Drama|Romance', 'Thriller', 'Action|Romance|Thriller', 'Drama', 'Drama']
  }
];

// Utilidad para crear peliculas filtradas
function filteredMoviesMock(tag) {
  return moviesMock.filter(movie => movie.tags.includes(tag));
}

// Mock de los servicios
class MoviesServiceMock {
  async getMovies() {
    return Promise.resolve(moviesMock);
  }

  async createMovie() {
    return Promise.resolve(moviesMock[0]);
  }
}

module.exports = {
  moviesMock,
  filteredMoviesMock,
  MoviesServiceMock
};
