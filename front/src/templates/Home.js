import React from 'react';
import Navigation from '../components/nav';
import GenreButton from '../components/GenreButton';
import pieChart_blue from '../components/img/pieChart_blue.png';
import oscar_vintage from '../components/img/oscar_vintage.jpg';
const Home = () => {
  return (
    <div>
      <Navigation />

      <div className="d-flex flex-wrap justify-content-center gap-4 mb-2 p-5 align-items-start flex-direction:row bd-highlight" >
        <GenreButton />
        {/* <img src={oscar_vintage} alt="oscar_vintage" /> */}
      </div>

    </div>
  );
};

export default Home;