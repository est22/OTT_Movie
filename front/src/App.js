import React from 'react';
import { Route, Router, Switch, Link } from 'react-router-dom';
import Home from './templates/Home';
import Navigation from './components/nav';


const App = () => {
  return (
    <div>

        <Navigation/>
        <Home/>
        
      <Route path="/" exact={true} component={Home} />
      <div className="App">
        {/* <Switch>  
          <Route path="/mypage">


          </Route> */}
        {/* </Switch> */}
      </div>
    </div>

  );
};

export default App;