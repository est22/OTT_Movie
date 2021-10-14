import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './templates/Home';


const App = () => {
  return (
    <div>

      {/* <Link to="/">라우팅 테스트</Link> */}

      {/* <hr /> */}

      <Route path="/" exact={true} component={Home} />
    </div>

  );
};

export default App;