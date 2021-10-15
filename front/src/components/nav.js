import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import { Navbar, Nav, Form, FormControl, Button, NavDropdown } from 'react-bootstrap';
=======
import { Navbar, Nav, Form, FormControl, Button, NavDropdown} from 'react-bootstrap';
=======
import { Navbar, Nav, Form, FormControl, Button, NavDropdown,Container} from 'react-bootstrap';
>>>>>>> front
import { Route, Router, Switch, Link } from 'react-router-dom';
>>>>>>> front
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { alignPropType } from 'react-bootstrap/esm/DropdownMenu';

function Navigation() {
<<<<<<< HEAD
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
=======
    return (
        <div className="Navigation ">
            <Navbar bg="primary" expand="lg" variant="dark">

            
                <Navbar.Brand href="/">Movie Awards 수상작 모아보기</Navbar.Brand>

                  

  <Navbar.Toggle aria-controls="navbarScroll " />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="mr-auto my-2 my-lg-0 "
      style={{ maxHeight: '100px'}}
      navbarScroll
    >
      <Nav.Link href="Login">로그인</Nav.Link>
      <Nav.Link href="Join">회원가입</Nav.Link>
      <NavDropdown title="마이페이지" id="navbarScrollingDropdown">
        <NavDropdown.Item href="Favorites">즐겨찾기</NavDropdown.Item>
        <NavDropdown.Item href="Myreview">내 리뷰</NavDropdown.Item>
      </NavDropdown>
    </Nav>

  </Navbar.Collapse>
</Navbar>
>>>>>>> front

    </div>
  );
}

export default Navigation;