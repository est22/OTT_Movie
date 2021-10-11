import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './Home';
import Navigation from './nav';
import  GenreButton  from './button';


const App = () => {
  return (
    <div>
        <Navigation/>

        <div className="d-flex flex-wrap justify-content-center gap-4 mb-2 p-5 align-items-start flex-direction:row bd-highlight" >
          <GenreButton/>
          <GenreButton/>
        </div> 
        

      <ul>
        <li>
          <Link to="/">라우팅 테스트</Link>
        </li>

      </ul>
      <hr />
        
        
          <Route path="/" exact={true} component={Home} />

    </div>
  );
};

export default App;