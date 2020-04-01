import { useState, useEffect } from 'react';

const useInitialState = (API) => {
  // Definimos videos como estado y setVideos para modificar ese estado
  const [videos, setVideos] = useState({
    mylist: [],
    trends: [],
    originals: [],
  });
  // Logica de donde se obtendra los datos, recibimos la api, la convertimos en jason
  // se la pasamos al estado.
  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setVideos(data));
  }, []);

  return videos;
};

export default useInitialState;
