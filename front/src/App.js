import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './Home';
import Navigation from './nav';

const App = () => {
  return (
    <div>
        <Navigation/>
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