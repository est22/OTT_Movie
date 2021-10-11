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
        <div className="d-grid col-4 gap-4">
          <>
          <Button variant ="outline-primary" size="lg" href="https://www.naver.com" md="4">Comedy</Button>{' '}
          <Button variant ="outline-info" size="lg" href="https://www.naver.com">Romance</Button>{' '}
          <Button variant ="outline-warning" size="lg" href="https://www.naver.com">S/F</Button>{' '}
          <Button variant ="outline-success" size="lg" href="https://www.naver.com">Action</Button>{' '}
          <Route path="/" exact={true} component={Home} />
          </>
        </div>

    </div>
  );
};

export default App;