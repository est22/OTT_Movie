import React from 'react';
<<<<<<< HEAD
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
=======
// import { motion } from 'framer-motion';
import  YearButton  from '../components/YearButton';

const Home = () => {
  return (
    <div>
    {/* //   <div className = "home container">
    //     <motion.h2 animate={{ fontSize: 50, color:'#ff2994', x: 100, y:-100}}>
    //       오스카상은 ~~~한 상입니다.
    //     </motion.h2>
    //   </div> */}
      

        <div className="d-flex flex-wrap justify-content-center gap-4 mb-2 p-5 align-items-start flex-direction:row bd-highlight" >
          <YearButton/>
        </div> 
>>>>>>> front

    </div>
  );
};

export default Home;