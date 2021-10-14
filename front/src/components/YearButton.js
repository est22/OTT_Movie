import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';

function YearButton() {
    return (
        
        <>
        <Switch>
            <Route path="/2010">
            <Button variant ="outline-primary" size="lg" href="https://www.naver.com" md="4">Comedy</Button>{' '}
            </Route>
        </Switch>

        {/* 여기까지 1차 작업 */}
        <Button variant ="outline-primary" size="lg" href="MoviePage.js" md="4">2010</Button>{' '}
        <Button variant ="outline-info" size="lg" href="https://www.naver.com">2011</Button>{' '}
        <Button variant ="outline-warning" size="lg" href="https://www.naver.com">2012</Button>{' '}
        <Button variant ="outline-success" size="lg" href="https://www.naver.com">2013</Button>{' '}
        <Button variant ="outline-danger" size="lg" href="https://www.naver.com">2014</Button>{' '}
        <Button variant ="outline-primary" size="lg" href="https://www.naver.com" md="4">2015</Button>{' '}
        <Button variant ="outline-info" size="lg" href="https://www.naver.com">2016</Button>{' '}
        <Button variant ="outline-warning" size="lg" href="https://www.naver.com">2017</Button>{' '}
        <Button variant ="outline-success" size="lg" href="https://www.naver.com">2018</Button>{' '}
        <Button variant ="outline-danger" size="lg" href="https://www.naver.com">2019</Button>{' '}
        <Button variant ="outline-primary" size="lg" href="https://www.naver.com" md="4">2020</Button>{' '}
        <Button variant ="outline-info" size="lg" href="https://www.naver.com">2021</Button>{' '}
        </>

    );
}

export default YearButton;