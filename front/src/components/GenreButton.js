import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';

function GenreButton() {
    return (
        
        <>
        <Switch>
            <Route path="/comedy">
            <Button variant ="outline-primary" size="lg" href="https://www.naver.com" md="4">Comedy</Button>{' '}
            </Route>
        </Switch>

        {/* 여기까지 1차 작업 */}
        
        <Button variant ="outline-info" size="lg" href="https://www.naver.com">Romance</Button>{' '}
        <Button variant ="outline-warning" size="lg" href="https://www.naver.com">S/F</Button>{' '}
        <Button variant ="outline-success" size="lg" href="https://www.naver.com">Action</Button>{' '}
        <Button variant ="outline-danger" size="lg" href="https://www.naver.com">Thriller</Button>{' '}
        </>

    );
}

export default GenreButton;