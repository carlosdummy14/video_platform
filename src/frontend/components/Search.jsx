import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { searchingVideo } from '../actions';
import '../assets/styles/components/Search.scss';

const Search = ({ isHome, searchingVideo }) => {
  const inputStyle = classNames('input', {
    isHome,
  });

  const handleSearch = (event) => {
    searchingVideo(event.target.value);
  };

  return (
    <section className='main'>
      <h2 className='main__title'>¿Qué quieres ver hoy?</h2>
      <input type='text' className={inputStyle} placeholder='Buscar...' onChange={handleSearch} />
    </section>
  );
};

const mapDispatchToProps = {
  searchingVideo,
};

export default connect(null, mapDispatchToProps)(Search);
