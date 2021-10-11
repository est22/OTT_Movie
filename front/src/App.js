import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './Home';
import Navigation from './nav';
import { Button } from 'react-bootstrap';

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
      <Button href="https://www.naver.com">Link</Button>
      <Route path="/" exact={true} component={Home} />

    </div>
  );
};

export default App;