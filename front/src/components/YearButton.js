import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';

function YearButton() {
    return (
        
        <>
        <Switch>
            <Route path="/2010">
            <Button variant ="outline-primary" size="lg" href="MoviePage" md="4">2010</Button>{' '}
            </Route>
        </Switch>

        {/* 여기까지 1차 작업 */}
        <div className="d-flex flex-wrap justify-content-center gap-4 mb-2 p-5 align-items-start flex-direction:row bd-highlight" >
            
        <Button variant ="outline-primary" size="lg" href="2010" md="4">2010</Button>{' '}
        <Button variant ="outline-info" size="lg" href="2011">2011</Button>{' '}
        <Button variant ="outline-warning" size="lg" href="2012">2012</Button>{' '}
        <Button variant ="outline-success" size="lg" href="2013">2013</Button>{' '}
        <Button variant ="outline-danger" size="lg" href="2014">2014</Button>{' '}
        <Button variant ="outline-primary" size="lg" href="2015" md="4">2015</Button>{' '}
        <Button variant ="outline-info" size="lg" href="2016">2016</Button>{' '}
        <Button variant ="outline-warning" size="lg" href="2017">2017</Button>{' '}
        <Button variant ="outline-success" size="lg" href="2018">2018</Button>{' '}
        <Button variant ="outline-danger" size="lg" href="2019">2019</Button>{' '}
        <Button variant ="outline-primary" size="lg" href="2020" md="4">2020</Button>{' '}
        <Button variant ="outline-info" size="lg" href="2021">2021</Button>{' '}
        
        </div> 
        </>

    );
}

export default YearButton;