import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';

import '../assets/styles/App.scss';

const App = () => {
  // Definimos videos como estado y setVideos para modificar ese estado
  const [videos, setVideos] = useState({
    mylist: [],
    trends: [],
    originals: [],
  });

  // Logica de donde se obtendra los datos, recibimos la api, la convertimos en jason
  // se la pasamos al estado.
  useEffect(() => {
    fetch('http://localhost:3030/initialState')
      .then(response => response.json())
      .then(data => setVideos(data));
  }, []);

  return (
    <div className='App'>
      <Header />
      <Search />

      {videos.mylist.length > 0 && (
        <Categories title='Mi lista'>
          <Carousel>
            <CarouselItem />
          </Carousel>
        </Categories>
      )}

      <Categories title='Tendencias'>
        <Carousel>
          {videos.trends.map(item => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>

      <Categories title='Originales'>
        <Carousel>
          {videos.originals.map(item => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>

      <Footer />
    </div>
  );
};

export default App;
