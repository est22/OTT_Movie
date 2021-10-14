import React from 'react';
import { Route, Router, Switch, Link } from 'react-router-dom';
import Home from './templates/Home';
import Navigation from './components/nav';
import styled from "styled-components";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Sidebar from './components/sidebar';
import Login from './templates/Login';
import Join from './templates/Join';
import MoviePage from './templates/MoviePage';
import Myreview from './components/Myreview';
import Favorites from './components/Favorites';


const App = () => {
  return (  <div>

    <Navigation/>
    

  <div className="App">
  <Home/>
    <Switch>  
      <Route exact path="/" exact={true} component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/join" component={Join} />
      <Route path="/favorites" component={Favorites} />
      <Route path="/myreview" component={Myreview} />
      <Route path="/2010" component={MoviePage} />



    </Switch>
  </div>
</div>
    

  

  );
};

export default App;
