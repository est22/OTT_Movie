import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, NavDropdown,Container} from 'react-bootstrap';
import { Route, Router, Switch, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { alignPropType } from 'react-bootstrap/esm/DropdownMenu';

function Navigation() {
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

    </div>
  );
}

export default Navigation;