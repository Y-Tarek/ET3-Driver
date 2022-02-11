import React from 'react';
import { Navbar,Nav,NavDropdown,Container } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import SearchBox from './SearchBox';
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../Actions/UserActions';

const Header = () => {
  const userLogin = useSelector(state => state.userLogin);
  const {userInfo} = userLogin;
  const dispatch = useDispatch();
    const logoutHandler = () => {
      dispatch(logout());
    }
  return (
    <header>
        <Navbar bg="dark" expand="lg" variant='dark'>
        <Container>
            <LinkContainer to={'/'}>
              <Navbar.Brand >ET3 Drive</Navbar.Brand>
            </LinkContainer>
            <SearchBox></SearchBox>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
            <LinkContainer to={'/buses'}>
                <Nav.Link ><i className="fas fa-bus"></i>Buses</Nav.Link>
                </LinkContainer>
                <LinkContainer to={'/reservations'}>
                <Nav.Link ><i className="fas fa-ticket"></i>Tickets</Nav.Link>
                </LinkContainer>
                {userInfo ? (
                      <NavDropdown title={userInfo.username} id='username'>
                          <LinkContainer to='/profile'>
                              <NavDropdown.Item>Profile</NavDropdown.Item> 
                          </LinkContainer>
                          <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                      </NavDropdown>
                    ) : 
                        <LinkContainer to= '/login'>
                        <Nav.Link><i className="fas fa-user"></i>SIGN IN</Nav.Link>
                        </LinkContainer>
                    }
                      {userInfo && userInfo.isAdmin && (
                         <NavDropdown title= 'Admin' id='adminmenue'>
                            <LinkContainer to='/admin/userlist'>
                                <NavDropdown.Item>Users</NavDropdown.Item> 
                            </LinkContainer>
                            <LinkContainer to='/admin/buseslist'>
                                <NavDropdown.Item>Buses</NavDropdown.Item> 
                            </LinkContainer>
                            <LinkContainer to='/admin/reservationslist'>
                                <NavDropdown.Item>Reservations</NavDropdown.Item> 
                            </LinkContainer>
                         </NavDropdown>
                     )}
            </Nav>
            </Navbar.Collapse>
        </Container> 
     </Navbar>
    </header>
  )
}

export default Header