import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Mypage from '../templates/Mypage';

function Navigation() {
  return (
    <div className="Navigation ">
      <Navbar bg="primary" expand="lg" variant="dark">
        <Navbar.Brand href="#" style={{ fontFamily: 'DMedium' }}>Movie Awards 수상작 모아보기</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll " />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" style={{ fontFamily: 'DMedium' }}>로그인 / 회원가입</Nav.Link>
            <NavDropdown title="마이페이지" id="navbarScrollingDropdown" style={{ fontFamily: 'DMedium' }}>
              <NavDropdown.Item href="#action2" style={{ fontFamily: 'DMedium' }}>즐겨찾기</NavDropdown.Item>
              <NavDropdown.Item href="#action3" style={{ fontFamily: 'DMedium' }}>내 리뷰</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled style={{ fontFamily: 'DMedium' }}>
              영화 검색
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              style={{ fontFamily: 'DMedium' }}
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
            />
            <Button variant="outline-success" style={{ fontFamily: 'DBold' }}>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>

    </div>
  );
}

export default Navigation;