import React from 'react';
import Navigation from '../components/nav';
import  GenreButton  from '../components/GenreButton';

const Home = () => {
  return (
    <div>
      <Navigation/>

        <div className="d-flex flex-wrap justify-content-center gap-4 mb-2 p-5 align-items-start flex-direction:row bd-highlight" >
          <GenreButton/>
        </div> 

    </div>
  );
};

export default Home;