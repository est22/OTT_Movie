import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './Home';

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>

      </ul>
      <hr />
      <Route path="/" exact={true} component={Home} />

    </div>
  );
};

export default App;