import React from 'react';
// import bootstrap
import { Navbar, Nav, Form, FormControl, Button, NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function Navigation() {
    return (
        <div className="Navigation">
            <Navbar bg="primary" expand="lg" variant="dark">
  <Navbar.Brand href="#">Movie Awards 수상작 모아보기</Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
      <Nav.Link href="#action1">로그인 / 회원가입</Nav.Link>
      <NavDropdown title="마이페이지" id="navbarScrollingDropdown">
        <NavDropdown.Item href="#action2">즐겨찾기</NavDropdown.Item>
        <NavDropdown.Item href="#action3">내 리뷰</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#" disabled>
        영화 검색
      </Nav.Link>
    </Nav>
    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
      />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>

        </div>
    );
}

export default Navigation;