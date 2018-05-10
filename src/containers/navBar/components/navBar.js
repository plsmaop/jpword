import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import '../../../styles/navBar.css'

const NavBar = ({ initState }) => {
  return (
    <div className='navBar container'>
      <Navbar className='navbar navbar-expand-md navbar-light bg-light navbar-fixed-top'>
        <NavbarBrand tag={Link} to='/' onClick={initState}>日文單字練習</NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink tag={Link} to='/rank'>排行榜</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

NavBar.propTypes ={
  initState: PropTypes.func.isRequired,
}

export default NavBar;
