import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function GenreButton() {
    return (

        <>
            <Button variant="outline-primary" size="lg" href="https://www.naver.com" md="4" style={{ fontFamily: 'DBold' }}>Comedy</Button>{' '}
            <Button variant="outline-info" size="lg" href="https://www.naver.com" style={{ fontFamily: 'DBold' }}>Romance</Button>{' '}
            <Button variant="outline-warning" size="lg" href="https://www.naver.com" style={{ fontFamily: 'DBold' }}>S/F</Button>{' '}
            <Button variant="outline-success" size="lg" href="https://www.naver.com" style={{ fontFamily: 'DBold' }}>Action</Button>{' '}
            <Button variant="outline-danger" size="lg" href="https://www.naver.com" style={{ fontFamily: 'DBold' }}>Thriller</Button>{' '}
        </>

    );
}

export default GenreButton;